// Utils
import Carousel from 'react-bootstrap/Carousel'
// Theme
import { borderRadius, colors, desktopMaxWidth, breakpoints } from 'styles/theme'

const ArticleSlider = ({ ComponentProps, Blogs }) => {

    const MaxPosts = ComponentProps?.MaxPosts

    const data = Blogs.filter(blog => blog.Featured).slice(0, MaxPosts || 1)

    if (data.length === 0) return null

    return (
        <>
            <section className={`carousel${data.length === 1 ? ' single' : ''}`} aria-label="Gallery">
                <Carousel className="carousel-wrapper" >
                    { data.map((slide, _) => {
                        const thumbnail = slide.Thumbnail.formats.small.url
                        return (
                            <Carousel.Item key={slide.Slug} style={{ background: `${slide.ThumbnailBgColorHex || `${colors.day}1f`}` }} >
                                    <div className="slide-content" >
                                        <div className="slide-text" >
                                            <span style={{ color: `${slide?.TitleColor || colors.gray}` }} >Featured Article</span>
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
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    align-items: center;
                    padding: 0 0;
                }
                .carousel :global(.carousel-control-prev-icon),
                .carousel :global(.carousel-control-next-icon) {
                    border-radius: 50%;
                    overflow: hidden;
                    background-color: ${colors.blueGray}aa;
                    padding: 20px;
                    background-size: 50%;
                }
                .carousel :global(.carousel-control-prev-icon) {
                    background-position-x: 40%;
                }
                .carousel :global(.carousel-control-next-icon) {
                    background-position-x: 60%;
                }
                .slide-content .slide-text {
                    padding-right: 5%;
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
                    margin: 50px auto;
                    width: 100%;
                    padding-bottom: 57%;
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
                    height: 475px;
                    padding-bottom: 20px;
                }
                .carousel :global(.carousel-control-prev),
                .carousel :global(.carousel-control-next) {
                    width: 7%;
                }
                .carousel :global(.carousel-indicators),
                .carousel :global(.carousel-control-prev),
                .carousel :global(.carousel-control-next) {
                    display: ${data.length <= 1 ? 'none' : 'flex'};
                }
                @media screen and (max-width: ${breakpoints.mediumDesktop}) {
                    .slide-content {
                        padding: 0 80px;
                    }
                }
                @media screen and (max-width: ${breakpoints.smallDesktop}) {
                    .carousel :global(.carousel-item) {
                        height: initial;
                        min-height: 580px;
                        background: ${colors.day}1f !important;
                    }
                    .slide-content {
                        max-width: 100%;
                        flex-direction: column-reverse;
                        justify-content: center;
                        position: absolute;
                        top: 0;
                        display: flex;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        padding: 0 60px;
                    }
                    .slide-content .slide-image {
                        flex: none;
                        margin: 0 auto 0 auto;
                        padding-bottom: 23em;
                    }
                    .slide-content .slide-text h1 {
                        font-size: 2.3em;
                        color: ${colors.gray} !important;
                    }
                    .slide-content .slide-text span {
                        color: ${colors.lightGray} !important;
                    }
                    .slide-content .slide-text,
                    .slide-content .slide-image {
                        max-width: 650px;
                    }
                    .slide-content .slide-text {
                        padding-left: 0;
                        margin-top: 60px;
                    }
                }
                @media screen and (max-width: ${breakpoints.extraSmallDesktop}) {
                    .slide-content {
                        padding: 0 60px;
                    }
                }
                @media screen and (max-width: ${breakpoints.ipad}) {
                    .slide-content .slide-image {
                        padding-bottom: 57%;
                    }
                }
                @media screen and (max-width: ${breakpoints.tabletSmall}) {
                    .carousel :global(.carousel-item) {
                        min-height: 630px;
                        padding: 30px 10px;
                    }
                    .carousel.single :global(.carousel-item) {
                        min-height: 500px;
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
                        width: 80px;
                        height: 70px;
                        top: unset;
                        background: ${colors.day}aa;
                        left: 30px;
                        bottom: 10px;
                        border-radius: ${borderRadius};
                    }
                    .carousel :global(.carousel-control-next) {
                        left: 100px;
                        border-left: 1px solid ${colors.whiteGray};
                    }
                    .carousel :global(.carousel-control-prev-icon),
                    .carousel :global(.carousel-control-next-icon) {
                        background-color: transparent;
                    }
                    .slide-content {
                        padding: 0 30px 45px 30px;
                    }
                    .single .slide-content {
                        padding: 45px 30px;
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