// Utils
import customizeHtmlContent from 'utils/customizeHtmlContent'
// Theme
import { breakpoints, desktopMaxWidth } from 'styles/theme'
// Components
import PublicationAuthorDescription from './PublicationAuthorDescription'
import NewsLetterSignup from './NewsletterSignup'
import ResourceBanner from 'components/Shared/ResourceBanner'

const PublicationContent = ({ Content, Author, LinkToResource, Title }) => {
    return (
        <>
            <section className="containerSection" >
                <main>
                    <aside>
                        { Author?.description && <PublicationAuthorDescription description={Author.description} /> }
                        <NewsLetterSignup />
                    </aside>
                    <div className="content-container" >
                        <article className="htmlContent" dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Content, Title) }} />
                        {
                            LinkToResource &&
                            <ResourceBanner
                                {...LinkToResource}
                            />
                        }
                    </div>
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    padding: 40px;
                    display: grid;
                    grid-template-columns: 210px auto;
                    column-gap: 80px;
                    width: 100%;
                }
                aside {
                    display: flex;
                    flex-direction: column;
                }
                @media screen and (max-width: ${breakpoints.tabletLarge}) {
                    main {
                        padding: 40px;
                        display: flex;
                        flex-direction: column-reverse;
                    }
                    main :global(.image) {
                        max-width: 700px;
                        margin: 20px auto;
                    }
                }
            `}</style>
        </>
    )
}

export default PublicationContent