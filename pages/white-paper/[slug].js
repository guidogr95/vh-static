<<<<<<< HEAD
import dynamic from 'next/dynamic'
// Utils
import axios from 'axios'
// Contants
import { apiUrl, apiToken } from 'config/constants'
=======
// Utils
import { dynamic } from 'utils/imports/packages'
// Site Data
import { WpAndEbooks } from 'utils/imports/siteData'
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
// Components
const SimpleNav = dynamic(() => import('components/Shared/SimpleNav'))
const ResourceSignup = dynamic(() => import('components/Resources/ResourceSignup'))
const ResourceReader = dynamic(() => import('components/Resources/ResourceReader'))

const slug = ({ BookCover, Content }) => {
  return (
    <>
      <div className="body-wrapper" >
          <SimpleNav />
          <section>
              <ResourceReader
                Content={Content}
              />
              <ResourceSignup
                BookCover={BookCover?.url || ''}
              />
          </section>
      </div>
      <style jsx>{`
        .body-wrapper {
          position: relative;
<<<<<<< HEAD
          overflow: hidden;
=======
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
        }
        section {
          display: grid;
          grid-template-columns: 50% 50%;
          width: 100%;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths () {
<<<<<<< HEAD
  // Call an external API endpoint to get pages
  const res = await axios.get(`${apiUrl}/whitepapers-and-ebooks`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on pages
  const paths = pages.map(page => `/white-paper/${page.Slug.trim()}`)
=======
  // Get the paths we want to pre-render based on pages
  const paths = WpAndEbooks.map(page => `/white-paper/${page.Slug.trim()}`)
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
<<<<<<< HEAD
  const pageData = await axios.get(`${apiUrl}/whitepapers-and-ebooks?Slug=${params.slug}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  return { props: { ...pageData.data[0], Pathname: params.slug } }
=======
  const pageData = WpAndEbooks.find(item => item.Slug === params.slug)
  return { props: { ...pageData, Pathname: params.slug } }
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
}

export default slug