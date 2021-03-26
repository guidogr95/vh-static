// Theme
import { desktopMaxWidth, colors, borderRadius } from 'styles/theme'
// Components
import Avatar from 'components/Shared/Avatar'
// Utils
import strapiDateToDateString from 'utils/strapiDateToDateString'
// Assets
import whiteLogo from 'public/assets/media/brand/std-vertical-white.svg'

const PublicationHeader = ({ Title, Author, Thumbnail, BackgroundColor, PublicationDate, TitleColor }) => {
    return (
        <>
            <section>
                <header>
                    <aside className="header-text" >
                        <h1>
                            {Title}
                        </h1>
                        { Author &&
                            <div className="blog-author" >
                                <Avatar
                                    picture={Author?.ProfilePicture?.url}
                                />
                                <div className="publicationInfo" >
                                    <span>{Author?.fullname || ''}</span>
                                    <time className="__post-time" >
                                        {PublicationDate && strapiDateToDateString(PublicationDate)}
                                    </time>
                                </div>
                            </div>
                        }
                    </aside>
                    <aside className="header-image" >
                        {Thumbnail
                            ? <img src={Thumbnail} alt={Title || 'blogPost thumbnail'}/>
                            : <div className="header-image--thumbnail" />
                        }
                    </aside>
                </header>
            </section>
            <style jsx>{`
                section {
                    background: ${BackgroundColor || `${colors.day}1f`};
                    display: flex;
                    background-size: cover;
                    background-repeat: no-repeat;
                    justify-content: center;
                    height: 450px;
                }
                .header-image .header-image--thumbnail {
                    width: 100%;
                    padding-bottom: 20em;
                    position: relative;
                    overflow: hidden;
                    border-radius: ${borderRadius};
                }
                .header-image .header-image--thumbnail:after,
                .header-image .header-image--thumbnail:before { 
                    position: absolute;
                    content: '';
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }
                .header-image .header-image--thumbnail:after {
                    z-index: 1;
                    background: url(${whiteLogo});
                    background-position: center;
                    background-size: 30%;
                    background-repeat: no-repeat;
                }
                .header-image .header-image--thumbnail:before {
                    background: ${colors.night};
                }
                header {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    align-items: center;
                }
                .header-text {
                    padding-left: 5%;
                    position: relative;
                }
                .header-text h1 {
                    font-size: 2.3em;
                    text-transform: capitalize;
                    font-weight: normal;
                    margin: 0;
                    max-width: 85%;
                    font-weight: 600;
                    color: ${TitleColor || colors.gray};
                }
                .publicationInfo {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .__post-time {
                    display: block;
                    color: ${TitleColor || colors.gray};
                    font-smoothing: auto;
                    letter-spacing: 0.04em;
                    opacity: 0.85;
                }
                .header-image {
                    flex: 0 0 100%;
                    margin: 50px auto;
                    max-width: 562px;
                    width: 100%;
                }
                .header-image img {
                    width: 100%;
                    border-radius: ${borderRadius};
                }
                .blog-author {
                    position: relative;
                    display: grid;
                    grid-template-columns: 75px 1fr;
                    align-items: center;
                    margin: 0.4rem 0 0;
                }
                .blog-author span {
                    font-weight: 500;
                    color: ${TitleColor || colors.gray};
                    text-transform: capitalize;
                }
            `}</style>
        </>
    )
}

export default PublicationHeader