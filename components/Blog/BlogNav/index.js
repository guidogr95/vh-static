// components
import BlogNavItem from './BlogNavItem'
// Theme
import { breakpoints, colors, desktopMaxWidth } from 'styles/theme'

const BlogNav = ({ Pathname, ComponentProps }) => {

    const { BlogNavItem: navButtons } = ComponentProps

    return (
        <>
            <div className="blogNav-container" >
                <ul>
                    <li className="navTitle" >
                        <span>Discover</span>
                    </li>
                    {navButtons.map(button => {
                        return (
                            <BlogNavItem
                                key={button.Slug}
                                slug={button.Slug}
                                label={button.Label}
                                pathname={Pathname}
                            />
                        )
                    })}
                </ul>
            </div>
            <style jsx>{`
                .blogNav-container {
                    display: flex;
                    justify-content: center;
                    padding: 40px;
                }
                ul {
                    max-width: ${desktopMaxWidth};
                    display: grid;
                    grid-template-columns: repeat(4,minmax(100px,1fr));
                    column-gap: 80px;
                    row-gap: 40px;
                    list-style: none;
                    width: 100%;
                }
                ul :global(li) {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .navTitle {
                    font-size: 2em;
                    color: ${colors.lightGray};
                    font-weight: bold;
                    letter-spacing: 0.02em;
                }
                @media screen and (max-width: ${breakpoints.smallDesktop}) {
                    ul {
                        column-gap: 30px;
                        row-gap: 30px;
                    }
                }
                @media screen and (max-width: 850px) {
                    ul {
                        grid-template-columns: repeat(2,minmax(100px,1fr));
                    }
                    .blogNav-container {
                        padding: 30px;
                    }
                }
                @media screen and (max-width: ${breakpoints.largePhone}) {
                    ul {
                        column-gap: 15px;
                        row-gap: 15px;
                    }
                }
            `}</style>
        </>
    )
}

export default BlogNav