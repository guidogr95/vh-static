const getPath = (page) => {
    let path = page.Slug.trim()
    if (page.Parent) path = `${getPath(page.Parent)}/${path}`
    return path
}

// Iterate through every page and get path including path from parent
const getPaths = (pages, isSingular) => {

    if (!isSingular) {
        const paths = pages.map(page => {
            const path = getPath(page)
            return `/${path}`
        })
        return paths
    } else {
        const path = getPath(pages)
        return `/${path}`
    }
}

export default getPaths