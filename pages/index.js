// Utils
import renderWithProps from 'utils/renderWithProps'
import { dynamic, axios } from 'utils/imports'
// Contants
import { apiUrl, apiToken } from 'config/constants'
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
  // const res = await axios.get(`${apiUrl}/pages?Slug=home`, { headers: { Authorization: `Bearer ${apiToken}` } })
  // const page = res.data[0]
  const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navButtons = navRes.data.MenuItemMain

  // const footerRes = await axios.get(`${apiUrl}/footer`, { headers: { Authorization: `Bearer ${apiToken}` } })
  // const FooterData = footerRes.data

  // const blogLimit = await axios.get(`${apiUrl}/blogs/count`, { headers: { Authorization: `Bearer ${apiToken}` } })

  // const blogPosts = await axios.post(`${apiUrl}/graphql`, {
  //   query: `{
  //     blogs(limit: ${blogLimit.data}) {
  //       Title,
  //       Content,
  //       Slug,
  //       published_at,
  //       Featured,
  //       Publisher {
  //         fullname,
  //         description,
  //         ProfilePicture {
  //           url
  //         }
  //       },
  //       Thumbnail {
  //         formats
  //       },
  //       ThumbnailBgColorHex,
  //       TitleColor
  //     }
  //   }`
  //   },
  //   { headers: { Authorization: `Bearer ${apiToken}` } }
  // )

  // const Blogs = blogPosts.data.data.blogs.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))

  // // Pass post data to the page via props
  return { props: { navButtons } }
}

export default index