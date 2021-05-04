// Utils
import jsdom from 'jsdom'
import { axios, dynamic } from 'utils/imports'
import strapiDateToDateString from 'utils/strapiDateToDateString'
import dateTransform from 'utils/dateTransform'
// Contants
import { apiUrl, apiToken } from 'config/constants'
// Theme
import { colors, newDesktopMaxWidth } from 'styles/theme'
// Assets
import WhiteLogo from 'public/assets/media/brand/std-horizontal-white.svg'
// Components
import BioPost from 'components/Bio/BioPost'
const FallbackController = dynamic(() => import('components/Shared/FallbackController'))
const PageStyleOne = dynamic(() => import('components/Shared/PageStyleOne'))

const { JSDOM } = jsdom

const bio = (props) => {
  const {
    content
  } = props

  return (
    <>
      <div>
        <FallbackController>
          <PageStyleOne>
            <header>
              <img src={WhiteLogo} alt="vexxhost white logo" />
              <h1>Content</h1>
            </header>
            <main>
              {Object.values(content).map((contentItem, index) => {
                const transformType = 'month day, year'
                const date = contentItem?.Publication ? dateTransform({ date: strapiDateToDateString(contentItem.Publication), transformType }) : dateTransform({ date: contentItem.published_at, transformType })
                return (
                  <BioPost
                    key={index}
                    title={contentItem.Title}
                    date={date}
                    description={contentItem.TextContent}
                    thumbnail={contentItem?.Thumbnail?.formats?.small?.url}
                  />
                )
              })}
            </main>
          </PageStyleOne>
        </FallbackController>
      </div>
      <style jsx>{`
        div :global(header) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 0;
          position: relative;
          z-index: 2;
          color: ${colors.white};
        }
        div :global(header h1) {
          font-size: 2.3em;
        }
        div :global(header img) {
          height: 32px;
          margin-bottom: 40px;
        }
        div :global(main) {
          max-width: ${newDesktopMaxWidth};
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          z-index: 2;
          position: relative;
          margin: auto;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps ({ params }) {
  // const { slug } = params
  // const Slug = slug[slug.length - 1]
  // const pageData = await axios.get(`${apiUrl}/pages?Slug=${Slug}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  // const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
  // const navButtons = navRes.data.MenuItemMain

  // const footerRes = await axios.get(`${apiUrl}/footer`, { headers: { Authorization: `Bearer ${apiToken}` } })
  // const FooterData = footerRes.data

  const blogLimit = await axios.get(`${apiUrl}/blogs/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const blogPosts = await axios.post(`${apiUrl}/graphql`, {
    query: `{
      blogs(limit: ${blogLimit.data}) {
        Title,
        Content,
        Slug,
        Publication,
        published_at,
        Featured,
        Publisher {
          fullname,
          description,
          ProfilePicture {
            url
          }
        },
        Thumbnail {
          formats
        },
        ThumbnailBgColorHex,
        TitleColor
      }
    }`
  },
  { headers: { Authorization: `Bearer ${apiToken}` } }
  )
  const blogs = blogPosts.data.data.blogs.filter(blog => blog !== null).sort((a, b) => new Date(strapiDateToDateString(b.Publication)) - new Date(strapiDateToDateString(a.Publication)))
  blogs.forEach(blog => {
    const domContent = new JSDOM(`<div class="domContent" >${blog.Content}</div>`)
    blog.TextContent = `${domContent.window.document.querySelector('.domContent').textContent}`
  })

  const tutorialsLimit = await axios.get(`${apiUrl}/tutorials/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const tutorialPosts = await axios.post(`${apiUrl}/graphql`, {
    query: `{
      tutorials(limit: ${tutorialsLimit.data}) {
        Title,
        Content,
        Slug,
        published_at,
        Publisher {
          fullname,
          description,
          ProfilePicture {
            url
          }
        },
        Thumbnail {
          formats
        },
        ThumbnailBgColorHex,
        TitleColor
      }
    }`
    },
    { headers: { Authorization: `Bearer ${apiToken}` } }
  )
  const tutorials = tutorialPosts.data.data.tutorials

  tutorials.forEach(tut => {
    const domContent = new JSDOM(`<div class="domContent" >${tut.Content}</div>`)
    tut.TextContent = `${domContent.window.document.querySelector('.domContent').textContent}`
  })

  return {
    props: {
      // Blogs,
      content: {
        ...tutorials,
        ...blogs
      }
    }
  }
}

export default bio