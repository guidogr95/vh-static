// Theme
import { borderRadius, breakpoints, colors, gradients } from 'styles/theme'
// Utils
import useProgressiveImage from 'utils/useProgressiveImage'
import customizeHtmlContent from 'utils/customizeHtmlContent'
import Link from 'next/link'

const ResourceBanner = (props) => {

    const {
        Resource,
        Description
    } = props

    const thumbnail = Resource?.BookCover ? Resource.BookCover.url : '/'

    const loaded = useProgressiveImage(thumbnail)

    if (!Resource) return null

    return (
        <>
            {Description && <div className="banner-content htmlContent" dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Description) }} />}
            <div className="banner-container" >
                <div className="banner-text" >
                    <h3>{Resource?.Title || ''}</h3>
                    <Link href={`https://info.vexxhost.com/${Resource.Slug}`} >
                        <a className="btn btn-light" >
                            Download Now
                        </a>
                    </Link>
                </div>
                <div className="banner-thumbnail" >
                    <div className={`thumbnail ${!loaded ? 'loading' : ''}`} />
                </div>
            </div>
            <style jsx>{`
                .banner-content {
                    margin-top: 45px;
                }
                .banner-container {
                    background: ${gradients.lightDay};
                    min-height: 300px;
                    width: 100%;
                    border-radius: ${borderRadius};
                    margin-top: 30px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    column-gap: 15px;
                }
                .btn {
                    max-width: 180px;
                }
                .banner-text {
                    padding: 30px;
                    color: ${colors.whiteGray};
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .banner-thumbnail {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .thumbnail {
                    width: 45%;
                    padding-bottom: 60%;
                    border-radius: ${borderRadius};
                    background: url(${thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    min-width: 135px;
                    box-shadow: 5px 5px 20px rgba(100, 100, 100, 0.4);
                }
                .thumbnail.loading {
                    animation: loadingAnimation 1s infinite;
                }
                h3 {
                    line-height: 1.6;
                    font-weight: 400;
                    letter-spacing: 0.02em;
                }
                @keyframes loadingAnimation {
                    0% {
                        background-color: #fff;
                    }
                    50% {
                        background-color: #ccc;
                    }
                    100% {
                        background-color: #fff;
                    }
                }
                @media screen and (max-width: ${breakpoints.smallDesktop}) {
                    .banner-container {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto 250px;
                        column-gap: 15px;
                    }
                    .thumbnail {
                        width: 30%;
                        padding-bottom: 35%;
                        min-width: 135px;
                    }
                }
                @media screen and (max-width: ${breakpoints.tabletLarge}) {
                    .banner-container {
                        background: linear-gradient(to left, #6536ff, #2a1659);
                        min-height: 300px;
                        width: 100%;
                        border-radius: ${borderRadius};
                        margin-top: 30px;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        grid-template-rows: 1fr;
                        column-gap: 15px;
                    }
                    .thumbnail {
                        width: 45%;
                        padding-bottom: 60%;
                        border-radius: ${borderRadius};
                        background: url(${thumbnail});
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        min-width: 135px;
                        box-shadow: 5px 5px 20px rgba(100, 100, 100, 0.4);
                    }
                }
                @media screen and (max-width: ${breakpoints.tabletSmall}) {
                    .banner-container {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto 250px;
                        column-gap: 15px;
                    }
                    .thumbnail {
                        width: 153px;
                        padding-bottom: 0;
                        height: 181px;
                        min-width: 135px;
                    }
                }
            `}</style>
        </>
    )
}

export default ResourceBanner