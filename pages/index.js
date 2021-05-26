// Utils
import renderWithProps from 'utils/renderWithProps'
// Site Data
import { Pages, Blogs as blogs, NavButtons, FooterData } from 'utils/imports/siteData'

const index = ({ Body, Pathname, Blogs }) => {
  return (
    <div>
      {Body && Body.map(bodyComponent => {
        return (
          renderWithProps({
            componentName: bodyComponent.__component,
            props: { ...bodyComponent, Pathname, Blogs }
          })
        )
      })}
    </div>
  )
}

// This also gets called at build time
export async function getStaticProps () {
  const page = Pages.find(page => page.Slug === '/home')

  const Blogs = blogs.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))

  // Pass post data to the page via props
  return { props: { ...page, NavButtons, Blogs, FooterData } }
}

export default index