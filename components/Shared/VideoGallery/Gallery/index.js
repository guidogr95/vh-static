// Components
import { breakpoints, desktopMaxWidth } from 'styles/theme'
import VideoCard from './VideoCard'

const Gallery = ({ Videos }) => {
    return (
        <>
            <main>
                <h2 className="sectionTitle" >
                    Latest Videos
                </h2>
                <aside>
                {Videos.length > 0
                    ? Videos.map((video, index) => {
                        return (
                            <VideoCard
                                key={index}
                                videoData={video}
                            />
                        )
                    })
                    : <p>No videos</p>
                }
                </aside>
            </main>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    padding: 45px 0;
                }
                aside {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    column-gap: 45px;
                    row-gap: 45px;
                }
                @media screen and (max-width: ${breakpoints.mediumDesktop}) {
                    main {
                        padding: 45px 10px;
                    }
                }
                @media screen and (max-width: ${breakpoints.extraSmallDesktop}) {
                    main {
                        padding: 45px 30px;
                    }
                    aside {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media screen and (max-width: ${breakpoints.extraLargePhone}) {
                    aside {
                        grid-template-columns: repeat(1, 1fr);
                    }
                }
            `}</style>
        </>
    )
}

export default Gallery