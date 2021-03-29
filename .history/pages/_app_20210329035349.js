// Styles
import AppLayout from 'AppLayout'
import 'styles/custom.scss'
// Components
import NavBarClassic from 'components/NavBarClassic'
// import NavBar from 'components/NavBar'
import SEOHead from 'components/Shared/SEOHead'
import Footer from 'components/Shared/Footer'
// Context
import { ProvideSpring } from 'context/springContext'

function MyApp ({ Component, pageProps }) {
  const { navButtons, PostSEO, FooterData, Slug, slugPrefix } = pageProps
  console.log(slugPrefix, Slug)
  return (
    <>
      <SEOHead
        PostSEO={PostSEO || {}}
        Slug={`${slugPrefix}/${Slug}`}
      />
      <AppLayout>
        <ProvideSpring>
          { navButtons && <NavBarClassic navButtons={navButtons} /> }
          <Component {...pageProps} />
          { FooterData && <Footer footerData={FooterData} /> }
        </ProvideSpring>
      </AppLayout>
    </>
  )
}

export default MyApp