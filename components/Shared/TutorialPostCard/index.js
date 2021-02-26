// Utils
import Link from 'next/link'
import randomIntFromInterval from 'utils/randomIntFromInterval'
import useProgressiveImage from 'utils/useProgressiveImage'
// Theme
import { borderRadius, colors, breakpoints } from 'styles/theme'
// Assets
import { FiChevronRight } from 'react-icons/fi'

const TutorialPostCard = ({ Title, Thumbnail, Slug, Content }) => {

    const loaded = useProgressiveImage(Thumbnail)

    const cutContent = (content) => {
        const minLength = 120
        const maxLength = 240

        return `${content.slice(0, randomIntFromInterval(minLength, maxLength))} [...]`
    }

    return (
        <>
            <article>
                <Link prefetch={false} href={`/resources/tutorials/${Slug}`}>
                    <a className="cover-link" >
                        <span>{Title}</span>
                    </a>
                </Link>
                <div className={`thumbnail ${!loaded ? 'loading' : ''}`} />
                <div className="body" >
                    <div className="_description" >
                        <span>{Title}</span>
                        <div className="content" >
                            {cutContent(Content)}
                        </div>
                    </div>
                    <div className="_footer" >
                        <Link prefetch={false} href={`/resources/tutorials/${Slug}`}>
                            <a>
                                Read More <FiChevronRight />
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
                .thumbnail {
                    width: 100%;
                    height: 210px;
                    min-height: 210px;
                    background: url(${Thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .thumbnail.loading {
                    animation: loadingAnimation 1s infinite;
                }
                ._description {
                    padding: 30px;
                    min-height: 90px;
                    display: flex;
                    flex-direction: column;
                }
                ._description span {
                    text-transform: capitalize;
                    color: ${colors.lightGray};
                    line-height: 1.4;
                    margin-bottom: 20px;
                    font-weight: 600;
                    font-size: 1.4em;
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
                    border: 1px solid transparent;
                    position: relative;
                }
                article:hover {
                    border: 1px solid ${colors.day}aa;
                    box-shadow: 0px 0px 0px rgba(70, 70, 70, 0.);
                }
                article :global(.cover-link) {
                    position: absolute;
                    top: 0;
                    bottom: 85px;
                    left: 0;
                    right: 0;
                }
                article :global(.cover-link span) {
                    visibility: hidden;
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
                        grid-template-columns: 1fr 2fr;
                    }
                    .thumbnail {
                        height: initial;
                        width: 234px;
                    }
                    article :global(.cover-link) {
                        bottom: 0;
                    }
                    .content {
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: normal;
                        -webkit-line-clamp: 2;
                        font-size: 1rem;
                        line-height: 1.6rem;
                        max-height: 3.8rem;
                    }
                    ._footer :global(a svg) {
                        transform: translateX(-1px);
                        opacity: 1;
                    }
                }
                @media screen and (max-width: ${breakpoints.extraLargePhone}) {
                    article {
                        display: flex;
                    }
                    .thumbnail {
                        padding-bottom: 50%;
                        width: 100%;
                    }
                    article :global(.cover-link) {
                        bottom: 85px;
                    }
                    .content {
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: normal;
                        -webkit-line-clamp: 2;
                        font-size: 1rem;
                        line-height: 1.6rem;
                        max-height: 3.8rem;
                    }
                }
            `}</style>
        </>
    )
}

export default TutorialPostCard