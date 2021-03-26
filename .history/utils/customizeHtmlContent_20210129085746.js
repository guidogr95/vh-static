// Edit HTML contents to suit needs
const customizeHtmlContent = (content) => {
    let childContent = content
    childContent = childContent.replace(/<a href/g, '<a target="_blank" rel="noopener noreferer" href')
    return childContent
}

export default customizeHtmlContent