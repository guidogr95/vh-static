// Utils
import { dynamic } from 'utils/imports/packages'
// Site Data
import { WpAndEbooks } from 'utils/imports/siteData'
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
          overflow: hidden;
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
  // Get the paths we want to pre-render based on pages
  const paths = WpAndEbooks.map(page => `/${page.Slug.trim()}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const pathPrefix = 'white-paper/'
  const pageData = WpAndEbooks.find(item => item.Slug === `${pathPrefix}${params.slug}`)
  return { props: { ...pageData } }
}

export default slug