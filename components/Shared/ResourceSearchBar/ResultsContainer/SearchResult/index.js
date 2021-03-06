import Link from 'next/link'
// Theme
import { colors } from 'styles/theme'
// Utils
import useProgressiveImage from 'utils/useProgressiveImage'

const SearchResult = ({ Title, Slug, Thumbnail }) => {

    const loaded = Thumbnail ? useProgressiveImage(Thumbnail) : true
    return (
        <>
            <div className="result-wrapper" >
                <Link prefetch={false} href={Slug} >
                    <a className="link-cover" />
                </Link>
                <div className={`thumbnail-holder${!loaded ? ' loading' : ''}`} />
                <div className="textContent" >
                    <h5>
                        {Title}
                    </h5>
                </div>
            </div>
            <style jsx>{`
                .result-wrapper {
                    display: grid;
                    grid-template-columns: 80px auto;
                    overflow: hidden;
                    padding: 10px 0;
                    position: relative;
                    padding: .9rem 1.8rem;
                    transition: .3s ease-out all;
                    align-items: center;
                }
                .result-wrapper:hover {
                    background: ${colors.whiteGray};
                }
                .link-cover {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                }
                .result-wrapper:not(:last-of-type) {
                    border-bottom: 1px solid ${colors.day}40;
                }
                .thumbnail-holder.loading {
                    animation: loadingAnimation 1s infinite;
                }
                .thumbnail-holder {
                    background: ${Thumbnail ? `url(${Thumbnail})` : colors.lightGray};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 10px;
                    max-height: 54px;
                    height: 100%;
                }
                .textContent {
                    padding: 0 0 0 15px;
                    display: flex;
                    align-items: center;
                }
                h5 {
                    margin: 0;
                    padding: 15px 0;
                    color: ${colors.lightGray};
                    font-weight: 600;
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
            `}</style>
        </>
    )
}

export default SearchResult