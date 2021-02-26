import Link from 'next/link'
// Theme
import { colors } from 'styles/theme'
// Constants
import { apiUrl } from 'config/constants'

const TutorialSearchResult = ({ Title, Slug, Thumbnail }) => {
    return (
        <>
            <div className="result-wrapper" >
                <Link prefetch={false} href={Slug} >
                    <a className="link-cover" />
                </Link>
                <div className="thumbnail-holder" />
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
                .thumbnail-holder {
                    background: ${Thumbnail ? `url(${apiUrl}${Thumbnail})` : colors.lightGray};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 10px;
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
            `}</style>
        </>
    )
}

export default TutorialSearchResult