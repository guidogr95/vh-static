// Theme
import { desktopMaxWidth, breakpoints } from 'styles/theme'
// Components
import ResourceCard from './ResourceCard'

const ResourcesList = ({ ComponentProps }) => {

    const { ResourceLink } = ComponentProps

    return (
        <>
            <section className="containerSection" >
                <main>
                    <h2 className="sectionTitle" >
                        Latest Resources
                    </h2>
                    <aside>
                        { ResourceLink.map(resource => {
                            return (
                                <ResourceCard
                                    key={resource.id}
                                    resourceData={resource}
                                />
                            )
                        }) }
                    </aside>
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    padding: 40px 0;
                }
                aside {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(100px, 1fr));
                    column-gap: 40px;
                    row-gap: 40px;
                }
                @media screen and (max-width: ${breakpoints.extraSmallDesktop}) {
                    aside {
                        grid-template-columns: repeat(2, minmax(100px, 1fr));
                    }
                }
                @media screen and (max-width: ${breakpoints.ipad}) {
                    aside {
                        grid-template-columns: repeat(1, minmax(100px, 1fr));
                    }
                }
            `}</style>
        </>
    )
}

export default ResourcesList