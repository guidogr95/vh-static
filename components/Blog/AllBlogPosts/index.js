import { useEffect, useState } from 'react'
// Theme
import { desktopMaxWidth, breakpoints } from 'styles/theme'
// Components
import BlogPostCard from 'components/Shared/BlogPostCard'
// Constants
import { apiUrl } from 'config/constants'
// Utils
import Pagination from '@bit/nexxtway.react-rainbow.pagination'
import useWindowSize from 'utils/useWindowSize'
import useDebounce from 'utils/useDebounce'

const AllBlogPosts = ({ Blogs }) => {

    const windowSize = useWindowSize()
    const debouncedWindowSize = useDebounce(windowSize, 1000)

    const [activePage, setActivePage] = useState(1)

    const [itemsPerPage, setItemsPerPage] = useState(9)
    const pages = Math.ceil(Blogs.length / itemsPerPage)

    const firstItem = 0 + (itemsPerPage * (activePage - 1))
    const lastItem = itemsPerPage * activePage

    useEffect(() => {

        if (debouncedWindowSize.width <= 600) {
            itemsPerPage !== 5 && setItemsPerPage(5)
        } else if (debouncedWindowSize.width <= parseInt(breakpoints.extraSmallDesktop)) {
            itemsPerPage !== 8 && setItemsPerPage(8)
        } else {
            itemsPerPage !== 9 && setItemsPerPage(9)
        }
    }, [debouncedWindowSize])

    const handlePagination = (event, page) => {
        setActivePage(page)
    }

    return (
        <>
            <section className="containerSection" >
                <main>
                    <h2 className="sectionTitle" >Latest Articles</h2>
                    <aside>
                        {Blogs.slice(firstItem, lastItem).map((blog, index) => {
                            return (
                                <BlogPostCard
                                    key={`${blog.published_at}${index}`}
                                    Title={blog.Title}
                                    PublicationDate={blog.published_at}
                                    Author={blog.Publisher}
                                    Thumbnail={`${apiUrl}${blog.Thumbnail.formats.small.url}`}
                                    Slug={blog.Slug}
                                    ThumbnailBgColorHex={blog.ThumbnailBgColorHex}
                                />
                            )
                        })}
                    </aside>
                    <Pagination
                        className="rainbow-m_auto"
                        pages={pages}
                        activePage={activePage}
                        onChange={handlePagination}
                    />
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
                    grid-template-rows: repeat(3, 1fr);
                    column-gap: 40px;
                    row-gap: 40px;
                    margin-bottom: 50px;
                }
                @media screen and (max-width: ${breakpoints.extraSmallDesktop}) {
                    aside {
                        grid-template-columns: repeat(2, minmax(100px, 1fr));
                        grid-template-rows: repeat(4, 1fr);
                    }   
                }
                @media screen and (max-width: ${breakpoints.ipad}) {
                    aside {
                        grid-template-columns: repeat(1, minmax(100px, 1fr));
                        grid-template-rows: repeat(8, 1fr);
                    }   
                }
                @media screen and (max-width: 600px) {
                    aside {
                        grid-template-columns: repeat(1, minmax(100px, 1fr));
                        grid-template-rows: repeat(5, 1fr);
                    }   
                }
            `}</style>
        </>
    )
}

export default AllBlogPosts