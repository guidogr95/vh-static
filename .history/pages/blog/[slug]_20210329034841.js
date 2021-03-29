// Utils
import { axios, dynamic } from 'utils/imports'
import cacheManager from 'cache-manager'
// Contants
import { apiUrl, apiToken } from 'config/constants'
// Components
import ArticleHead from 'components/SEO/ArticleHead'
const PublicationHeader = dynamic(() => import('components/Shared/PublicationHeader'))
const PublicationContent = dynamic(() => import('components/Shared/PublicationContent'))
const FallbackController = dynamic(() => import('components/Shared/FallbackController'))
const SocialShareWidget = dynamic(() => import('components/Shared/SocialShareWidget'))

const memoryCache = cacheManager.caching({ store: 'memory', max: 10000, ttl: 300 })

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
  // Call an external API endpoint to get pages
  const pageLimit = await axios.get(`${apiUrl}/blogs/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
  // await memoryCache.set('pageLimit', pageLimit.data)
  const res = await axios.get(`${apiUrl}/blogs?_limit=${pageLimit.data}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want tos pre-render based on pages
  const paths = pages.map(page => `/blog/${page.Slug.trim()}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // { fallback: true } means it will generate static files that were not generated at build time on demand
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {

  // const pageLimit = await axios.get(`${apiUrl}/blogs/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
  // let blogs = await memoryCache.get('blogs')
  // if (!blogs) {
  //   const blogsData = await axios.get(`${apiUrl}/blogs?_limit=${pageLimit.data}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  //   await memoryCache.set('blogs', blogsData.data)
  //   blogs = blogsData.data
  // }

  const blogData = await axios.get(`${apiUrl}/blogs?Slug=${params.slug}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const blog = blogData.data[0]

  let navButtons = await memoryCache.get('navButtons')
  if (!navButtons) {
    const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
    await memoryCache.set('navButtons', navRes.data.MenuItemMain)
    navButtons = navRes.data.MenuItemMain
  }

  const footerRes = await axios.get(`${apiUrl}/footer`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const FooterData = footerRes.data

  return {
    props: {
      ...blog,
      navButtons,
      FooterData,
      Pathname: params.slug,
      slugPrefix: '/blog'
    }
  }
}

export default slug