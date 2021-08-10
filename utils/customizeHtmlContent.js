// Edit HTML contents to suit needs
const customizeHtmlContent = (content, alt) => {
    if (!content) return
    let childContent = content
    childContent = childContent.replace(/<a href/g, '<a target="_blank" rel="noopener noreferer" href')
    if (alt) {
        childContent = childContent.replace(/<img/g, `<img alt="${alt}" `)
    }
    return childContent
}

export default customizeHtmlContent