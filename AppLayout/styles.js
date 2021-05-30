import css from 'styled-jsx/css'
// theme
<<<<<<< HEAD
import { colors, fonts, breakpoints, gradients, borderRadius, shadows, mediumBorderRadius } from 'styles/theme'
=======
import { colors, fonts, breakpoints } from 'styles/theme'
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974

export const globalStyles = css.global`
    html,
    body {
        font-family: ${fonts.base} !important;
        position: relative;
        padding: 0;
        margin: 0;
        font-size: 1em;
    }
    * {
        box-sizing: border-box;
    }
    textarea,
    input,
    button {
        font-family: ${fonts.base} !important;
    }
<<<<<<< HEAD
    h3 {
        font-size: 1.3rem;
    }
    .app-layout {
        position: relative;
    }
    .textarea-no-resize {
        resize: none;
    }
=======
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
    a {
        color: inherit;
        text-decoration: none;
        letter-spacing: 0.02em;
    }
    a:hover {
        text-decoration: none;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    .containerSection {
        display: flex;
        justify-content: center;
    }
    .sectionTitle {
        margin-bottom: 45px;
        text-transform: capitalize;
        font-weight: 300;
    }
    .btn {
        min-width: 140px;
<<<<<<< HEAD
        text-transform: uppercase;
        border-radius: ${borderRadius};
        line-height: 2;
    }
    .btn-brand {
        background: ${gradients.lightDay};
        box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
        color: ${colors.whiteGray};
        box-shadow: 5px 5px 20px rgba(160, 160, 160, 0.2);
    }
    .form-control {
        border-radius: ${borderRadius};
        box-shadow: ${shadows.input};
        border: 1px solid transparent;
    }
    .btn-light:hover {
        background: ${colors.white};
=======
    }
    .btn-brand {
        background: linear-gradient(to right, #8e2de2, #4a00e0);
        box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
        color: ${colors.whiteGray};
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
    }
    .btn-brand:hover {
        color: ${colors.whiteGray};
    }
<<<<<<< HEAD
    .btn-light,
    select {
        background: ${colors.trueWhite};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
    }
    .htmlContent :global(figure img) {
        width: 100%;
=======
    .htmlContent :global(figure img) {
                    width: 100%;
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
    }
    .htmlContent :global(p),
    .htmlContent :global(figure),
    .htmlContent :global(h1),
    .htmlContent :global(h2),
    .htmlContent :global(h3),
    .htmlContent :global(h4),
    .htmlContent :global(h5),
    .htmlContent :global(h6) {
        margin-top: 0.46em;
        margin-bottom: 0.46em;
    }
    .htmlContent :global(figure.image) {
        margin-left: auto;
        margin-right: auto;
    }
    .htmlContent :global(p) {
        font-size: 18px;
        line-height: 1.58;
        letter-spacing: -.003em;
        color: ${colors.textGray};
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        display: inline-block;
    }
    .htmlContent :global(h1),
    .htmlContent :global(h2),
    .htmlContent :global(h3),
    .htmlContent :global(h4),
    .htmlContent :global(h5),
    .htmlContent :global(h6) {
        line-height: 1.3;
        font-weight: 600;
    }
    .htmlContent :global(h1) {
        font-size: 50px;
    }
    .htmlContent :global(h2) {
        font-size: 30px;
    }
    .htmlContent :global(h3) {
        font-size: 25px;
    }
    .htmlContent :global(h4) {
        font-size: 22px;
    }
    .htmlContent :global(h5) {
        font-size: 18px;
    }
    .htmlContent :global(h6) {
        font-size: 15px;
    }
    .htmlContent :global(a) {
        color: -webkit-link;
    }
    .htmlContent :global(a):hover {
        text-decoration: underline;
    }
    .htmlContent :global(blockquote) {
        background: whitesmoke;
        border-radius: 2px;
        padding: 5px 10px;
    }
    .htmlContent :global(blockquote p) {
        display: block;
    }
    .screen-reader-text {
        border: 0;
        clip: rect(1px,1px,1px,1px);
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute!important;
        width: 1px;
        word-wrap: normal!important;
    }
    .gradientFont-day {
        color: ${colors.day};
        background: ${gradients.lightDay};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    ul {
        list-style-position: inside;
    }
    pre {
        background: whitesmoke;
        padding: 5px 0;
    }
    code {
        font-size: 1.2em;
    }
    button.regular {
        min-height: 45px;
        min-width: 45px;
    }
    .calculator-white-btn {
        box-shadow: ${shadows.input};
        border-radius: ${borderRadius};
        background: ${colors.lightWhite};
        color: ${colors.day};
        border: none;
        font-size: 0.8em;
        font-weight: bold;
        transition: .5s ease-out all;
    }
    .calculator-white-btn:hover,
    .calculator-white-btn:active {
        background: ${gradients.lightDay};
        color: ${colors.white};
        box-shadow: ${shadows.inputDarker};
    }
    .centeredBlock {
        margin-left: 25vh;
        margin-right: 25vh;
    }
    .mt-small {
        margin-top: 16px;
    }
    .mb-none {
        margin-bottom: 0;
    }
    .mb-small {
        margin-bottom: 16px;
    }
    .mb-regular {
        margin-bottom: 24px;
    }
    .mb-lg {
        margin-bottom: 40px;
    }
    .singleCircle-bg {
        position: relative;
        background: ${colors.purple};
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    .singleCircle-bg:after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background: ${colors.lightPurple};
        width: 304px;
        height: 304px;
        top: 26px;
        right: -170px;
    }
    .borderRadius-md {
        border-top-right-radius: ${mediumBorderRadius};
        border-bottom-right-radius: ${mediumBorderRadius};
        border-top-left-radius: ${mediumBorderRadius};
        border-bottom-left-radius: ${mediumBorderRadius};
    }
    .fw-300 {
        font-weight: 300;
    }
    @media screen and (max-width: ${breakpoints.mediumDesktop}) {
        .containerSection {
            padding: 0 40px;
        }   
    }
    @media screen and (max-width: ${breakpoints.tabletLarge}) {
        .containerSection {
            padding: 0 30px;
        }   
    }
`
