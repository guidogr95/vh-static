// Utils
// import renderWithProps from 'utils/renderWithProps'
import { dynamic } from 'utils/imports/packages'
// Site Data
import { Pages, Blogs as blogs, NavButtons, FooterData, WpAndEbooks } from 'utils/imports/siteData'
// Components
import HeroStyleOne from 'components/Shared/HeroComponents/HeroStyleOne'
import TestimonialsStyleOne from 'components/Shared/Testimonials/TestimonialsStyleOne'
import ServicesStyleOne from 'components/Shared/Services/ServicesStyleOne'
import TwoColumnToutStyleOne from 'components/Shared/TwoColumnTout/StyleOne'
import TwoColumnToutStyleTwo from 'components/Shared/TwoColumnTout/StyleTwo'
import SwiperStyleOne from 'components/Shared/ContentSwipers/SwiperStyleOne'
import WESwiperCard from 'components/Shared/ContentSwipers/SwiperCards/WESwiperCard'
import BlogSwiperCard from 'components/Shared/ContentSwipers/SwiperCards/BlogSwiperCard'
import CardStack from 'components/Shared/CardStack'
// Assets
const FallbackController = dynamic(() => import('components/Shared/FallbackController'))

const index = ({ Body, Pathname, Blogs }) => {
  return (
    <FallbackController>
      <HeroStyleOne />
      <TestimonialsStyleOne />
      <ServicesStyleOne/>
      <TwoColumnToutStyleOne />
      <TwoColumnToutStyleTwo />
      <SwiperStyleOne
        title='Know cloud and more'
        content={WpAndEbooks}
        CardComponent={WESwiperCard}
      />
      <CardStack />
      <SwiperStyleOne
        title='Explore our latest content'
        slidesPerView={2}
        initialItemsInSwipe={4}
        itemsToAdd={2}
        content={blogs}
        CardComponent={BlogSwiperCard}
        breakpoints={{
          1366: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
      />
    </FallbackController>
    /* {Body && Body.map(bodyComponent => {
      return (
        renderWithProps({
          componentName: bodyComponent.__component,
          props: { ...bodyComponent, Slug, Blogs }
        })
      )
    })} */
  )
}

// This also gets called at build time
export async function getStaticProps () {
  const page = Pages.find(page => page.Slug === 'home')
  const displayBg = true
  // Pass post data to the page via props
  return {
      props: {
    ...page,
    NavButtons,
    FooterData,
    displayBg
    }
  }
}

export default index