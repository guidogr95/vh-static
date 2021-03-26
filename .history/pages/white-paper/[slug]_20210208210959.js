import dynamic from 'next/dynamic'
// Utils
import axios from 'axios'
// Contants
import { apiUrl, apiToken } from 'config/constants'
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
                BookCover={`${apiUrl}${BookCover?.url || ''}`}
              />
          </section>
      </div>
      <style jsx>{`
        .body-wrapper {
          position: relative;
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
  // Call an external API endpoint to get pages
  const res = await axios.get(`${apiUrl}/whitepapers-and-ebooks`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on pages
  const paths = pages.map(page => `/white-paper/${page.Slug.trim()}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const pageData = await axios.get(`${apiUrl}/whitepapers-and-ebooks?Slug=${params.slug}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  return { props: { ...pageData.data[0], Pathname: params.slug } }
}

export default slug