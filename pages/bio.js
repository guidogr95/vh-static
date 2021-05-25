// Utils
import jsdom from 'jsdom'
import { axios, dynamic } from 'utils/imports'
// Contants
import { apiUrl, apiToken } from 'config/constants'
// Theme
import { breakpoints, colors, newDesktopMaxWidth } from 'styles/theme'
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
              {content.map((contentItem, index) => {
                const data = contentItem.Post
                return (
                  <BioPost
                    key={index}
                    title={data.Title}
                    description={data.TextContent}
                    thumbnail={data?.Image}
                    slug={data.Slug}
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
        @media screen and (max-width: ${breakpoints.mediumDesktop}) {
          div :global(main) {
            padding: 0 40px;
          }
        }
        @media screen and (max-width: ${breakpoints.smallDesktop}) {
          div :global(main) {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media screen and (max-width: ${breakpoints.ipad}) {
          div :global(main) {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps () {
  const posts = await axios.get(`${apiUrl}/bio-posts`, { headers: { Authorization: `Bearer ${apiToken}` } })
  posts.data.forEach(post => {
    const domContent = new JSDOM(`<div class="domContent" >${post.Post.Content}</div>`)
    post.Post.TextContent = `${domContent.window.document.querySelector('.domContent').textContent}`
  })
  posts.data = posts.data.sort((a, b) => a.id - b.id)
  return {
    props: {
      // Blogs,
      content: posts.data
    }
  }
}

export default bio