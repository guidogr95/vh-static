import { useEffect, useRef } from 'react'
// Components
import ContactFormBasic from 'components/Shared/ContactForms/ContactFormBasic'
// Utils
import useWindowSize from 'utils/useWindowSize'
import useDebounce from 'utils/useDebounce'
// Assets
import HeroImage from 'public/assets/media/images/hero-image1.svg'
// Theme
import { colors, desktopMaxWidth, mediumBorderRadius } from 'styles/theme'

const HeroStyleOne = () => {
  const sectionRef = useRef(null)

  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce(windowSize, 400)

  useEffect(() => {
    const navBar = document.getElementById('navBar')
    if (!sectionRef) return
    sectionRef.current.style.height = `calc(100vh - ${navBar.offsetHeight}px)`
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
          padding: 80px 0 80px 0;
        }
        main {
          max-width: ${desktopMaxWidth};
          width: 100%;
          display: grid;
          grid-template-columns: minmax(100px, 350px) auto;
          padding-left: 150px;
          column-gap: 85px;
          position: relative;
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
      `}</style>
    </>
  )
}

export default HeroStyleOne