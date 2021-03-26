import Link from 'next/link'
// Theme
import { borderRadius, breakpoints, colors } from 'styles/theme'
// Components
import Avatar from 'components/Shared/Avatar'
// Constants
import { apiUrl } from 'config/constants'
// Utils
import useProgressiveImage from 'utils/useProgressiveImage'

const BlogPostCard = ({ Title, PublicationDate, Author, Thumbnail, Slug, ThumbnailBgColorHex }) => {

    const loaded = useProgressiveImage(Thumbnail)

    return (
        <>
            <article>
                <Link prefetch={false} href={`blog/${Slug}`}>
                    <a className={`_thumbnail ${!loaded ? 'loading' : ''}`}>
                    </a>
                </Link>
                <div className="_body" >
                    <header>
                        <time className="__post-time" >
                            {new Date(PublicationDate).toDateString()}
                        </time>
                        <Link prefetch={false} href={`blog/${Slug}`}>
                            <a>
                                <h5>{Title}</h5>
                            </a>
                        </Link>
                    </header>
                    <div className="__card-author" >
                        <Avatar
                            picture={`${apiUrl}${Author.ProfilePicture.url}`}
                        />
                        <span>{Author.fullname}</span>
                    </div>
                </div>
            </article>
            <style jsx>{`
                article {
                    display: flex;
                    flex-direction: column;
                    min-width: 250px;
                    border-radius: ${borderRadius};
                    box-shadow:  15px -15px 30px #f5f5f5, -15px 15px 30px #ffffff;
                    overflow: hidden;
                    transition: .3s ease-out all;
                }
                article ._thumbnail {
                    padding-bottom: 55%;
                    background: url(${Thumbnail}), ${ThumbnailBgColorHex};
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: top center;
                    transition: .3s ease-out all;
                }
                article ._thumbnail.loading {
                    animation: loadingAnimation 1s infinite;
                }
                article:hover {
                    transform: scale(1.04);
                    box-shadow:  20px 20px 40px rgba(100, 100, 100, 0.1);
                }
                article:hover ._thumbnail {
                    background-size: 105%;
                }
                article ._body {
                    padding: 1.5rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                article time {
                    color: ${colors.lightGray};
                    font-size: 0.9em;
                }
                article h5 {
                    text-transform: capitalize;
                    color: ${colors.gray};
                    margin: 10px 0 0;
                    line-height: 1.5;
                    font-weight: 600;
                }
                article h5:hover {
                    text-decoration: underline;
                }
                article ._thumbnail img {
                    width: 100%;
                }
                article .__card-author {
                    position: relative;
                    display: grid;
                    grid-template-columns: 75px 1fr;
                    align-items: center;
                    margin: 3rem 0 0;
                }
                article .__card-author span {
                    font-weight: 500;
                    color: ${colors.gray};
                    text-transform: capitalize;
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
                @media screen and (max-width: ${breakpoints.ipad}) {
                    article {
                        display: grid;
                        grid-template-columns: repeat(2, 50%);
                        box-shadow: none;
                    }
                    article ._thumbnail {
                        background-position: center center;
                    }
                }
                @media screen and (max-width: 600px) {
                    article {
                        display: flex;
                        box-shadow: 15px -15px 30px #f5f5f5, -15px 15px 30px #ffffff;
                    }
                }
            `}</style>
        </>
    )
}

export default BlogPostCard