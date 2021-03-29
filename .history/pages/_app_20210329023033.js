import Head from 'next/head'
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
  console.log(pageProps)
  const { navButtons, PostSEO, FooterData } = pageProps
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      { PostSEO &&
        <SEOHead {...PostSEO} />
      }
      </Head>
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