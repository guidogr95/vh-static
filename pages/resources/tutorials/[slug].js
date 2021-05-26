// Utils
import { dynamic } from 'utils/imports/packages'
// Site Data
import { Tutorials, NavButtons, FooterData } from 'utils/imports/siteData'
// Components
import ArticleHead from 'components/SEO/ArticleHead'
const PublicationHeader = dynamic(() => import('components/Shared/PublicationHeader'))
const PublicationContent = dynamic(() => import('components/Shared/PublicationContent'))
const SocialShareWidget = dynamic(() => import('components/Shared/SocialShareWidget'))
const FallbackController = dynamic(() => import('components/Shared/FallbackController'))

const slug = ({ Pathname, Title, Publisher, created_at, Content, Thumbnail, ThumbnailBgColorHex, TitleColor, LinkToResource }) => {
  return (
    <>
      <ArticleHead />
      <div>
        <FallbackController>
          <SocialShareWidget />
          <PublicationHeader
            Title={Title}
            Author={Publisher}
            Thumbnail={Thumbnail?.formats?.medium?.url}
            BackgroundColor={ThumbnailBgColorHex}
            // PublicationDate={created_at}
            TitleColor={TitleColor}
          />
          { Content &&
            <PublicationContent
              Content={Content}
              Author={Publisher}
              Title={Title}
              LinkToResource={LinkToResource}
            />
          }
        </FallbackController>
      </div>
    </>
  )
}

export async function getStaticPaths () {
  // Get the paths we want to pre-render based on pages
  const paths = Tutorials.map(page => `/resources/tutorials/${page.Slug.trim()}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const tutorial = Tutorials.find(tutorial => tutorial.Slug === params.slug)
  return { props: { ...tutorial, NavButtons, FooterData, Pathname: params.slug } }
}

export default slug