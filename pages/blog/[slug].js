// Utils
import { dynamic } from 'utils/imports/packages'
// Site Data
import { Blogs, NavButtons, FooterData } from 'utils/imports/siteData'
// Components
import ArticleHead from 'components/SEO/ArticleHead'
const PublicationHeader = dynamic(() => import('components/Shared/PublicationHeader'))
const PublicationContent = dynamic(() => import('components/Shared/PublicationContent'))
const FallbackController = dynamic(() => import('components/Shared/FallbackController'))
const SocialShareWidget = dynamic(() => import('components/Shared/SocialShareWidget'))

const slug = (props) => {

  const {
    Title,
    Publisher,
    Publication,
    Content,
    Thumbnail,
    ThumbnailBgColorHex,
    TitleColor,
    LinkToResource,
    categories,
    Tags
  } = props

  return (
    <>
      <ArticleHead
        categories={categories}
        Tags={Tags}
      />
      <div>
        <FallbackController>
          <SocialShareWidget />
          <PublicationHeader
            Title={Title}
            Author={Publisher}
            Thumbnail={Thumbnail?.formats?.small?.url}
            BackgroundColor={ThumbnailBgColorHex}
            PublicationDate={Publication}
            TitleColor={TitleColor}
          />
          { Content &&
            <PublicationContent
              Content={Content}
              Author={Publisher}
              LinkToResource={LinkToResource}
              Title={Title}
            />
          }
        </FallbackController>
      </div>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths () {
  // Get the paths we want tos pre-render based on pages
  const paths = Blogs.map(page => `/blog/${page.Slug.trim()}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // { fallback: true } means it will generate static files that were not generated at build time on demand
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const blog = Blogs.find(blog => blog.Slug === params.slug)
  return {
    props: {
      ...blog,
      NavButtons,
      FooterData,
      Pathname: params.slug,
      slugPrefix: '/blog'
    }
  }
}

export default slug