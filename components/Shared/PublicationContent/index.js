// Utils
import customizeHtmlContent from 'utils/customizeHtmlContent'
// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import PublicationAuthorDescription from './PublicationAuthorDescription'
import NewsLetterSignup from './NewsletterSignup'
import ResourceBanner from 'components/Shared/ResourceBanner'

const PublicationContent = ({ Content, Author, LinkToResource }) => {
    return (
        <>
            <section className="containerSection" >
                <main>
                    <aside>
                        { Author?.description && <PublicationAuthorDescription description={Author.description} /> }
                        <NewsLetterSignup />
                    </aside>
                    <div className="content-container" >
                        <article className="htmlContent" dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Content) }} />
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
                    grid-template-columns: 180px auto;
                    column-gap: 80px;
                    width: 100%;
                }
                aside {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </>
    )
}

export default PublicationContent