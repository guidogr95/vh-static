// Utils
import getPaths from 'utils/getPaths'
// Styles
import AppLayout from 'AppLayout'
import 'styles/custom.scss'
// Components
import NavBarClassic from 'components/NavBarClassic'
import PageStyleOne from 'components/Shared/PageStyleOne'
// import NavBar from 'components/NavBar'
import SEOHead from 'components/Shared/SEOHead'
import Footer from 'components/Shared/Footer'
// Context
import { ProvideSpring } from 'context/springContext'

function MyApp ({ Component, pageProps }) {
  const { NavButtons, PostSEO, FooterData, Slug, slugPrefix, Parent } = pageProps
  const fullSlug = Parent ? getPaths(pageProps, true) : `/${Slug}`
  return (
    <>
      <SEOHead
        PostSEO={PostSEO || {}}
        Slug={`${slugPrefix || ''}${fullSlug}`}
      />
      <AppLayout>
        <ProvideSpring>
          { NavButtons && <NavBarClassic navButtons={NavButtons} /> }
          <PageStyleOne>
            <Component {...pageProps} />
            { FooterData && <Footer footerData={FooterData} /> }
          </PageStyleOne>
        </ProvideSpring>
      </AppLayout>
    </>
  )
}

export default MyApp