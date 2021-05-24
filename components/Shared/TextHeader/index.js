// Theme
import { colors, desktopMaxWidth, breakpoints } from 'styles/theme'

const TextHeader = ({ ComponentProps }) => {

    const {
        Title,
        Subtitle,
        Background,
        HeaderSize,
        CTA,
        TitleColor,
        SubtitleColor
    } = ComponentProps

    return (
        <>
            <section>
                <header>
                    {Subtitle && <h2>{Subtitle}</h2>}
                    <h1>{Title}</h1>
                </header>
            </section>
            <style jsx>{`
                section {
                    display: flex;
                    justify-content: center;
                    height: ${HeaderSize === 'small' ? '250' : HeaderSize === 'medium' ? '350' : '450'}px;
                    background: ${Background || 'linear-gradient(to right, #8e2de2, #4a00e0)'};
                }
                header {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    align-items: center;
                    color: ${colors.whiteGray};
                }
                h1 {
                    margin-bottom: 0;
                    letter-spacing: 0.07em;
                    opacity: 0.3;
                    font-weight: 900;
                    text-align: right;
                    font-size: 5.4em;
                    color: ${TitleColor || colors.whiteGray};
                }
                h2 {
                    color: ${SubtitleColor || colors.whiteGray};
                    font-weight: 300;
                }
                @media screen and (max-width: ${breakpoints.mediumDesktop}) {
                    section {
                        padding: 0 20px;
                    }
                }
                @media screen and (max-width: ${breakpoints.ipad}) {
                    header {
                        display: flex;
                        flex-direction: column-reverse;
                        align-items: flex-start;
                        justify-content: center;
                    }
                    h1 {
                        font-size: 1.6em;
                        text-transform: uppercase;
                        letter-spacing: 0.02em;
                        margin-bottom: 10px;
                    }
                    h2 {
                        margin-bottom: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default TextHeader