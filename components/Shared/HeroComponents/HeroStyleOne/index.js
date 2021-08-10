import { useEffect, useRef } from 'react'
// Components
import ContactFormBasic from 'components/Shared/ContactForms/ContactFormBasic'
// Utils
import useWindowSize from 'utils/useWindowSize'
import useDebounce from 'utils/useDebounce'
// Assets
import HeroImage from 'public/assets/media/images/hero-image1.svg'
// Theme
import { breakpoints, colors, desktopMaxWidth, mediumBorderRadius } from 'styles/theme'

const HeroStyleOne = () => {
  const sectionRef = useRef(null)

  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce(windowSize, 400)

  useEffect(() => {
    const navBar = document.getElementById('navBar')
    if (!sectionRef || navBar.classList.contains('sticky')) return
    sectionRef.current.style.height = `calc(98vh - ${navBar.offsetHeight}px)`
    sectionRef.current.style.maxHeight = `calc(${1000 - 20 - navBar.offsetHeight}px)`
  }, [debouncedWindowSize])

  return (
    <>
      <section className="containerSection" ref={sectionRef} >
        <main>
          <article>
            <ContactFormBasic />
          </article>
          <article className="img-holder" >
            <img src={HeroImage} alt="Hero Image" />
          </article>
        </main>
      </section>
      <style jsx>{`
        section {
          padding: 80px 20px 80px 40px;
          min-height: 675px;
          align-items: center;
        }
        main {
          max-width: ${desktopMaxWidth};
          width: 100%;
          display: grid;
          grid-template-columns: minmax(283px,350px) minmax(400px,auto);
          padding-left: 150px;
          column-gap: 85px;
          position: relative;
          max-height: 650px;
          align-items: center;
          height: 100%;
        }
        main:after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: -100vh;
          background: ${colors.trueWhite};
          border-radius: ${mediumBorderRadius} 0 0 ${mediumBorderRadius};
          z-index: 1;
        }
        article {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
        }
        .img-holder img {
          width: 100%;
        }
        @media screen and (max-width: ${breakpoints.mediumDesktop}) {
          main {
            padding-left: 5rem;
          }
        }
        @media screen and (max-width: ${breakpoints.smallDesktop}) {
          main {
            column-gap: 35px;
          }
        }
        @media screen and (max-width: ${breakpoints.tabletLarge}) {
          main {
            padding: 40px;
            grid-template-columns: repeat(2, 1fr);
          }
          section {
            padding: 80px 40px;
          }
          main:after {
            right: 0;
            border-radius: ${mediumBorderRadius};
          }
        }
        @media screen and (max-width: ${breakpoints.ipad}) {
          section {
            padding: 60px;
          }
          main {
            display: flex;
            flex-direction: column-reverse;
          }
          article {
            width: 100%;
            text-align: center;
          }
          .img-holder img {
            width: fit-content;
            width: max-content;
            width: min-content;
            margin: auto;
          }
        }
      `}</style>
    </>
  )
}

export default HeroStyleOne