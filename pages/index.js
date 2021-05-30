// Utils
// import renderWithProps from 'utils/renderWithProps'
import { dynamic } from 'utils/imports'
// Site Data
import { Pages, Blogs as blogs, NavButtons, FooterData } from 'utils/imports/siteData'
// Components
import HeroStyleOne from 'components/Shared/HeroComponents/HeroStyleOne'
import TestimonialsStyleOne from 'components/Shared/Testimonials/TestimonialsStyleOne'
import ServicesStyleOne from 'components/Shared/Services/ServicesStyleOne'
const FallbackController = dynamic(() => import('components/Shared/FallbackController'))

const index = ({ Body, Pathname, Blogs }) => {
  return (
    <FallbackController>
      <HeroStyleOne />
      <TestimonialsStyleOne />
      <ServicesStyleOne/>
      {/* <TestimonialsStyleOne />
      <TestimonialsStyleOne />
      <TestimonialsStyleOne />
      <TestimonialsStyleOne />
      <TestimonialsStyleOne />
      <TestimonialsStyleOne />
      <TestimonialsStyleOne />
      <TestimonialsStyleOne /> */}
    </FallbackController>
    /* {Body && Body.map(bodyComponent => {
      return (
        renderWithProps({
          componentName: bodyComponent.__component,
          props: { ...bodyComponent, Pathname, Blogs }
        })
      )
    })} */
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