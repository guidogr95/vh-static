import dynamic from 'next/dynamic'
// Utils
import axios from 'axios'
// Contants
import { apiUrl, apiToken } from 'config/constants'
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
  // Call an external API endpoint to get pages
  const res = await axios.get(`${apiUrl}/tutorials`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on pages
  const paths = pages.map(page => `/resources/tutorials/${page.Slug.trim()}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const pageData = await axios.get(`${apiUrl}/tutorials?Slug=${params.slug}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navButtons = navRes.data.MenuItemMain

  const footerRes = await axios.get(`${apiUrl}/footer`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const FooterData = footerRes.data

  return { props: { ...pageData.data[0], navButtons, FooterData, Pathname: params.slug } }
}

export default slug