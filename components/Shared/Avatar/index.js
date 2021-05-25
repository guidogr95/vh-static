// Theme
import { colors } from 'styles/theme'
// Assets
import Placeholder from 'public/assets/media/images/user.svg'

const Avatar = ({ hideHalfCircle, halfCircleColor, picture, showCircle }) => {
    return (
        <>
            <div className={`${!showCircle ? 'hideCircle' : ''}`} >
                <a className="avatar-link" href="#" >
                    <img alt="profile picture" src={picture || Placeholder} />
                </a>
                <svg className="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
                </svg>
                <svg className="half-circle top" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
                </svg>
            </div>
            <style jsx>{`
                .hideCircle svg {
                    display: none;
                }
                .avatar-link {
                    position: relative;
                    display: block;
                    z-index: 2;
                }
                .avatar-link img {
                    display: block;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin: 16px 10px;
                }
                .half-circle {
                    position: absolute;
                    bottom: 0;
                    display: ${!hideHalfCircle ? 'initial' : 'none'};
                    left: 0;
                    width: 60px;
                    height: 48px;
                    fill: none;
                    stroke: ${halfCircleColor || colors.day};
                    stroke-width: 8;
                    stroke-linecap: round;
                    z-index: 1;
                }
                div:hover .half-cirlce.top {
                    transform: rotate(90deg);
                }
            `}</style>
        </>
    )
}

export default Avatar