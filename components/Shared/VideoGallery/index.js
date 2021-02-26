// Components
import Gallery from './Gallery'
import FeaturedVideo from './FeaturedVideo'
// Theme
import { breakpoints } from 'styles/theme'

const VideoGallery = ({ ComponentProps }) => {

    const featured = ComponentProps.Video.filter(video => video.Featured)

    return (
        <>
            <section className="containerSection" >
                <FeaturedVideo
                    featured={featured}
                />
                <Gallery
                    Videos={ComponentProps?.Video || []}
                />
            </section>
            <style jsx>{`
                section {
                    flex-direction: column;
                    align-items: center;
                }
                @media screen and (max-width: ${breakpoints.mediumDesktop}) {
                    section {
                        padding: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default VideoGallery