// Utils
import Carousel from 'react-bootstrap/Carousel'
// Constants
import { apiUrl } from 'config/constants'
// Theme
import { borderRadius, colors, desktopMaxWidth, breakpoints } from 'styles/theme'

const ArticleSlider = ({ ComponentProps, Blogs }) => {

    const MaxPosts = ComponentProps?.MaxPosts

    const data = Blogs.filter(blog => blog.Featured).slice(0, MaxPosts || 1)

    if (data.length === 0) return null

    return (
        <>
            <section className="carousel" aria-label="Gallery">
                <Carousel className="carousel-wrapper" >
                    { data.map((slide, index) => {
                        const thumbnail = `${apiUrl}${slide.Thumbnail.formats.small.url}`
                        return (
                            <Carousel.Item key={index} style={{ background: `${slide.ThumbnailBgColorHex || colors.day}` }} >
                                    <div className="slide-content" >
                                        <div className="slide-text" >
                                            <span>Featured Article</span>
                                            <h1 style={{ color: `${slide?.TitleColor || colors.gray}` }} >{slide.Title}</h1>
                                        </div>
                                        <div className="slide-image" style={{ background: `url(${thumbnail})` }} />
                                    </div>
                            </Carousel.Item>
                        )
                    }) }
                </Carousel>
            </section>
            <style jsx>{`
                .carousel {
                    min-height: 483px;
                }
                .slide-content {
                    max-width: ${desktopMaxWidth};
                    height: 100%;
                    margin: auto;
                    display: flex;
                    align-items: center;
                }
                .slide-content .slide-text {
                    padding-left: 5%;
                    max-width: 62%;
                    position: relative;
                    width: 100%;
                }
                .slide-content .slide-text span {
                    margin: 10px 0;
                    display: block;
                    color: white;
                    font-smoothing: auto;
                    letter-spacing: 0.04em;
                    opacity: 0.75;
                    position: absolute;
                    top: -36px;
                    font-weight: 300;
                }
                .slide-content .slide-text h1 {
                    font-size: 3em;
                    text-transform: capitalize;
                    font-weight: normal;
                    margin: 0;
                    font-weight: 500;
                }
                .slide-content .slide-image {
                    flex: 0 0 100%;
                    margin: 50px auto;
                    max-width: 562px;
                    width: 100%;
                    padding-bottom: 25%;
                    background-size: cover !important;
                    background-position: center !important;
                    background-repeat: no-repeat !important;
                    border-radius: ${borderRadius};
                }
                .slide-content .slide-image img {
                    width: 100%;
                    border-radius: ${borderRadius};
                }
                .carousel :global(.carousel-item) {
                    height: 450px;
                }
                .carousel :global(.carousel-control-prev),
                .carousel :global(.carousel-control-next) {
                    width: 10%;
                }
                .carousel :global(.carousel-indicators),
                .carousel :global(.carousel-control-prev),
                .carousel :global(.carousel-control-next) {
                    display: ${data.length <= 1 ? 'none' : 'flex'};
                }
                @media screen and (max-width: 1170px) {
                    .slide-content {
                        padding: 0 20px;
                    }
                }
                @media screen and (max-width: ${breakpoints.smallDesktop}) {
                    .carousel :global(.carousel-control-prev),
                    .carousel :global(.carousel-control-next) {
                        filter: brightness(0.1);
                    }
                    .carousel :global(.carousel-item) {
                        height: initial;
                        min-height: 580px;
                        background: ${colors.whiteGray} !important;
                    }
                    .slide-content {
                        max-width: 100%;
                        flex-direction: column-reverse;
                        justify-content: center;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                    }
                    .slide-content .slide-image {
                        flex: none;
                        max-width: 650px;
                        width: 65vw;
                        padding-bottom: 35%;
                        margin: 0 auto 0 auto;
                    }
                    .slide-content .slide-text h1 {
                        font-size: 2.3em;
                        color: ${colors.gray} !important;
                    }
                    .slide-content .slide-text span {
                        color: ${colors.lightGray} !important;
                    }
                    .slide-content .slide-text {
                        padding-left: 0;
                        margin-top: 60px;
                    }
                }
                @media screen and (max-width: ${breakpoints.ipad}) {
                    .slide-content .slide-image {
                        max-width: 100%;
                        width: 75vw;
                    }
                }
                @media screen and (max-width: 620px) {
                    .slide-content .slide-image {
                        width: 98vw;
                        padding-bottom: 55%;
                    }
                    .carousel :global(.carousel-item) {
                        min-height: 630px;
                        padding: 30px 10px;
                    }
                    .slide-content .slide-text h1 {
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: normal;
                        -webkit-line-clamp: 2;
                        font-weight: 500;
                        font-size: 1.6rem;
                        font-weight: 500;
                        line-height: 2.2rem;
                        max-height: 4.4rem;
                    }
                    .slide-content .slide-text {
                        max-width: 100%;
                    }
                    .carousel :global(.carousel-indicators) {
                        display: none;
                    }
                    .carousel :global(.carousel-control-prev),
                    .carousel :global(.carousel-control-next) {
                        width: 50%;
                        height: 70px;
                        top: unset;
                    }
                    .carousel :global(.carousel-control-prev-icon),
                    .carousel :global(.carousel-control-next-icon) {
                        background-size: 85% !important;
                    }
                    .slide-content {
                        padding-bottom: 45px;
                    }
                }
                @media screen and (max-width: ${breakpoints.largePhone}) {
                    .carousel :global(.carousel-item) {
                        padding: 30px 10px;
                    }
                    .carousel :global(.carousel-control-prev),
                    .carousel :global(.carousel-control-next) {
                        width: 50%;
                        height: 70px;
                        top: unset;
                    }
                }
                @media screen and (max-width: ${breakpoints.mediumPhone}) {
                    .carousel :global(.carousel-item) {
                        min-height: 70vh;
                    }
                }
            `}</style>
        </>
    )
}

export default ArticleSlider