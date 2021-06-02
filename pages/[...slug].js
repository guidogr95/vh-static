// Utils
import renderWithProps from 'utils/renderWithProps'
import getPaths from 'utils/getPaths'
import { dynamic } from 'utils/imports/packages'
import strapiDateToDateString from 'utils/strapiDateToDateString'
// Site Data
import { Pages, Blogs as blogs, Tutorials as tutorials, NavButtons, FooterData } from 'utils/imports/siteData'
// Components
const FallbackController = dynamic(() => import('components/Shared/FallbackController'))

const slug = (props) => {

  const { Body } = props

  return (
    <div>
      {/* Map through page components and add props */}
      <FallbackController>
        {Body && Body.map(bodyComponent => {
          return (
            renderWithProps({
              componentName: bodyComponent.__component,
              props: { ComponentProps: { ...bodyComponent }, ...props }
            })
          )
        })}
      </FallbackController>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths () {
  // Get the paths we want to pre-render based on pages. Exclude home page
  const paths = getPaths(Pages).filter(page => page !== '/home')
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time. Receives the paths from the above functions and passes the information down to the page
export async function getStaticProps ({ params }) {
  const { slug } = params
  const Slug = slug[slug.length - 1]
  const pageData = Pages.find(page => page.Slug === Slug)
  const Blogs = blogs.filter(blog => blog !== null).sort((a, b) => new Date(strapiDateToDateString(b.Publication)) - new Date(strapiDateToDateString(a.Publication)))
  const Tutorials = tutorials
  return { props: { ...pageData, NavButtons, Pathname: Slug, Blogs, FooterData, Tutorials } }
}

export default slug