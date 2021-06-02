// Utils
const fs = require('fs')
const axios = require('axios')
const jsdom = require('jsdom')
const strapiDateToDateString = require('../utils/strapiDateToDateString')
const { JSDOM } = jsdom
// Contants
const apiUrl = 'https://strapi-pr-3-ufrr.onrender.com'
const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIwODcxOTIzLCJleHAiOjE2MjM0NjM5MjN9.U-PfOaIBjKYqfjWpFKLbqa-Cc89M8JMPM7ZIBVwWir0'

const fetchData = async () => {
  console.log('Started site data fetch')
  try {
    const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const navButtons = navRes.data.MenuItemMain
    const footerRes = await axios.get(`${apiUrl}/footer`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const footerData = footerRes.data
    const blogLimit = await axios.get(`${apiUrl}/blogs/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
    const blogPosts = await axios.post(`${apiUrl}/graphql`, {
      query: `{
        blogs(limit: ${blogLimit.data}) {
          Title,
          Content,
          Slug,
          published_at,
          Publication,
          Featured,
          Publisher {
            fullname,
            description,
            ProfilePicture {
              url
            }
          },
          Thumbnail {
            formats
          },
          ThumbnailBgColorHex,
          TitleColor
        }
      }`
    },
    { headers: { Authorization: `Bearer ${apiToken}` } }
    )
    const Blogs = blogPosts.data.data.blogs.filter(blog => blog !== null).sort((a, b) => new Date(strapiDateToDateString(b.Publication)) - new Date(strapiDateToDateString(a.Publication)))
    const tutorials = await axios.get(`${apiUrl}/tutorials`, { headers: { Authorization: `Bearer ${apiToken}` } })
    tutorials.data.forEach(tut => {
      const domContent = new JSDOM(`<div class="domContent" >${tut.Content}</div>`)
      tut.TextContent = `${domContent.window.document.querySelector('.domContent').textContent}`
    })
    const wpandebooks = await axios.get(`${apiUrl}/whitepapers-and-ebooks`, { headers: { Authorization: `Bearer ${apiToken}` } })
    wpandebooks.data.forEach(item => {
      const domContent = new JSDOM(`<div class="domContent" >${item.Content}</div>`)
      item.TextContent = `${domContent.window.document.querySelector('.domContent').textContent}`
    })
    const pages = await axios.get(`${apiUrl}/pages`, { headers: { Authorization: `Bearer ${apiToken}` } })
    fs.writeFileSync('builder/data/blogs.json', JSON.stringify(Blogs))
    fs.writeFileSync('builder/data/tutorials.json', JSON.stringify(tutorials.data))
    fs.writeFileSync('builder/data/wpandebooks.json', JSON.stringify(wpandebooks.data))
    fs.writeFileSync('builder/data/pages.json', JSON.stringify(pages.data))
    fs.writeFileSync('builder/data/navButtons.json', JSON.stringify(navButtons))
    fs.writeFileSync('builder/data/footerData.json', JSON.stringify(footerData))
    console.log('Data fetch and storage successful')
  } catch (err) {
    console.log('Data fetch failed', err)
  }
}

fetchData()