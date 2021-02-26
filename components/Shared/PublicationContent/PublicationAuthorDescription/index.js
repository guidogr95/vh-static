// Theme
import { colors, fonts } from 'styles/theme'

const PublicationAuthorDescription = ({ description }) => {
    return (
        <>
            <div>
                <h5>about<br/> the author</h5>
                <span>{description}</span>
            </div>
            <style jsx>{`
                div {
                    border-left: 2px solid ${colors.day};
                    padding: 0 0 0 15px;
                    border-radius: 2px 0 0 2px;
                    margin-bottom: 60px;
                }
                h5 {
                    text-transform: uppercase;
                    color: ${colors.textGray};
                    letter-spacing: 0.04em;
                    line-height: 1.3;
                    margin-top: 0;
                    font-family: ${fonts.secondary} !important;
                }
            `}</style>
        </>
    )
}

export default PublicationAuthorDescription