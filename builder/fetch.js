// Utils
const fs = require('fs')
const axios = require('axios')
const jsdom = require('jsdom')
const strapiDateToDateString = require('../utils/strapiDateToDateString')
const { JSDOM } = jsdom
// Contants
const apiUrl = 'http://localhost:1337'
const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIzMTE4NTI3LCJleHAiOjE2MjU3MTA1Mjd9.IIjUYDGXfiF8BYLZW5TNosu4VAtYXEPaqKIOAeQPl1g'

const fetchData = async () => {
  console.log('Started site data fetch')
  try {
    const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const navButtons = navRes.data.MenuItemMain
    const footerRes = await axios.get(`${apiUrl}/footer`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const footerData = footerRes.data
    const bioLimit = await axios.get(`${apiUrl}/bio-posts/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const bioPosts = await axios.get(`${apiUrl}/bio-posts?_limit=${bioLimit.data}`, { headers: { Authorization: `Bearer ${apiToken}` } })
    bioPosts.data.forEach(post => {
      const domContent = new JSDOM(`<div class="domContent" >${post.Post.Content}</div>`)
      post.Post.TextContent = `${domContent.window.document.querySelector('.domContent').textContent}`
    })
    bioPosts.data = bioPosts.data.sort((a, b) => a.id - b.id)
    const blogLimit = await axios.get(`${apiUrl}/blogs/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const blogPosts = await axios.get(`${apiUrl}/blogs?_limit=${blogLimit.data}`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const Blogs = blogPosts.data.filter(blog => blog !== null).sort((a, b) => new Date(strapiDateToDateString(b.Publication)) - new Date(strapiDateToDateString(a.Publication)))
    Blogs.forEach(blog => {
      const domContent = new JSDOM(`<div class="domContent" >${blog.Content}</div>`)
      blog.TextContent = `${domContent.window.document.querySelector('.domContent').textContent}`
    })
    const tutorialLimit = await axios.get(`${apiUrl}/tutorials/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const tutorials = await axios.get(`${apiUrl}/tutorials?_limit=${tutorialLimit.data}`, { headers: { Authorization: `Bearer ${apiToken}` } })
    tutorials.data.forEach(tut => {
      const domContent = new JSDOM(`<div class="domContent" >${tut.Content}</div>`)
      tut.TextContent = `${domContent.window.document.querySelector('.domContent').textContent}`
    })
    const wpandeLimit = await axios.get(`${apiUrl}/whitepapers-and-ebooks/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const wpandebooks = await axios.get(`${apiUrl}/whitepapers-and-ebooks?_limit=${wpandeLimit.data}`, { headers: { Authorization: `Bearer ${apiToken}` } })
    wpandebooks.data.forEach(item => {
      const domContent = new JSDOM(`<div class="domContent" >${item.Content}</div>`)
      item.TextContent = `${domContent.window.document.querySelector('.domContent').textContent}`
    })
    const pages = await axios.get(`${apiUrl}/pages`, { headers: { Authorization: `Bearer ${apiToken}` } })
    fs.writeFileSync('builder/data/blogs.json', JSON.stringify(Blogs))
    fs.writeFileSync('builder/data/tutorials.json', JSON.stringify(tutorials.data))
    fs.writeFileSync('builder/data/wpandebooks.json', JSON.stringify(wpandebooks.data))
    fs.writeFileSync('builder/data/pages.json', JSON.stringify(pages.data))
    fs.writeFileSync('builder/data/bioPosts.json', JSON.stringify(bioPosts.data))
    fs.writeFileSync('builder/data/navButtons.json', JSON.stringify(navButtons))
    fs.writeFileSync('builder/data/footerData.json', JSON.stringify(footerData))
    console.log('Data fetch and storage successful')
  } catch (err) {
    console.log('Data fetch failed', err)
  }
}

fetchData()