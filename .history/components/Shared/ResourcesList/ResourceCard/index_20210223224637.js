// Utils
import Link from 'next/link'
import useProgressiveImage from 'utils/useProgressiveImage'
// Theme
import { borderRadius, colors, breakpoints } from 'styles/theme'
// Constants
import { apiUrl } from 'config/constants'
// Assets
import { FiChevronRight } from 'react-icons/fi'

const ResourceCard = ({ resourceData }) => {
    const thumbnail = `${apiUrl}${resourceData.Resource.Thumbnail.url}`
    const { Title, Slug } = resourceData.Resource

    const loaded = useProgressiveImage(thumbnail)

    return (
        <>
            <article>
                <Link prefetch={false} href={`/white-paper/${Slug}`}>
                    <a className="cover-link" >
                    </a>
                </Link>
                <div className={`thumbnail ${!loaded ? 'loading' : ''}`} />
                <div className="body" >
                    <div className="_description" >
                        <h4>{Title}</h4>
                    </div>
                    <div className="_footer" >
                        <span>
                            FREE
                        </span>
                        <Link prefetch={false} href={`/white-paper/${Slug}`}>
                            <a>
                                DOWNLOAD <FiChevronRight />
                            </a>
                        </Link>
                    </div>
                </div>
            </article>
            <style jsx>{`
                .body {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                }
                .thumbnail.loading {
                    animation: loadingAnimation 1s infinite;
                }
                .thumbnail {
                    width: 100%;
                    height: 280px;
                    min-height: 280px;
                    background: url(${thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                ._description {
                    padding: 30px;
                    min-height: 90px;
                    display: flex;
                    align-items: center;
                }
                ._description h4 {
                    text-transform: capitalize;
                    color: ${colors.lightGray};
                    line-height: 1.4;
                    margin-bottom: 0;
                    font-weight: 600;
                }
                ._footer {
                    padding: 30px;
                    border-top: 1px solid rgba(100, 100, 100, 0.2);
                    display: flex;
                    justify-content: space-between;
                    height: 85px;
                }
                ._footer :global(a) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    iine-height: 1;
                }
                ._footer :global(a svg) {
                    font-size: 1.2em;
                    opacity: 0;
                    transform: translateX(5px);
                    transition: 0.3s ease-out;
                }
                ._footer :global(a:hover svg) {
                    transform: translateX(-1px);
                    opacity: 1;
                }
                article {
                    width: 100%;
                    border-radius: ${borderRadius};
                    position: relative;
                    transition: 0.3s ease-out;
                    box-shadow: 0px 7px 20px rgba(70, 70, 70, 0.1);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                article:hover {
                    transform: translateY(-10px);
                    box-shadow: 0px 7px 30px rgba(70, 70, 70, 0.3);
                }
                article :global(.cover-link) {
                    position: absolute;
                    top: 0;
                    bottom: 85px;
                    left: 0;
                    right: 0;
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
                        flex-direction: row;
                    }
                    article :global(.cover-link) {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                    }
                    ._footer :global(a svg) {
                        transform: translateX(-1px);
                        opacity: 1;
                    }
                }
                @media screen and (max-width: ${breakpoints.extraLargePhone}) {
                    article {
                        flex-direction: column;
                    }
                    article :global(.cover-link) {
                        position: absolute;
                        top: 0;
                        bottom: 85px;
                        left: 0;
                        right: 0;
                    }
                    ._footer :global(a svg) {
                        transform: translateX(-1px);
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    )
}

export default ResourceCard