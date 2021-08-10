import { useRef } from 'react'
// Theme
import { colors, largeBorderRadius } from 'styles/theme'

const PageStyleOne = ({ children, displayBg }) => {

  const bodyRef = useRef(null)

  return (
    <>
      <div className="header-container" >
        <div className="section-header__wrapper" >
          <div className={`section-header${!displayBg ? ' hide-bg' : ' show-bg'}`} >
            <div className="circle-overlay" />
            <div className="circle-overlay" />
            <div className="circle-overlay" />
          </div>
        </div>
        <div className="body-wrapper" ref={bodyRef} >
          {children}
        </div>
      </div>
      <style jsx>{`
        .body-wrapper {
          overflow: hidden;
        }
        .header-container {
          position: relative;
          width: 100%;
        }
        .header-container .section-header__wrapper {
          position: absolute;
          padding: 20px;
          min-height: 840px;
          max-height: 1000px;
          height: 100vh;
          left: 0;
          right: 0;
          z-index: -1;
        }
        .section-header {
          overflow: hidden;
          background: ${colors.purple};
          border-radius: ${largeBorderRadius};
          position: relative;
          height: 100%;
          width: 100%;
        }
        .section-header.hide-bg {
          background: none;
        }
        .section-header.hide-bg .circle-overlay {
          display: none;
        }
        .section-header .circle-overlay {
          background: ${colors.lightPurple};
          border-radius: 50%;
          position: absolute;
        }
        .section-header .circle-overlay:nth-of-type(1) {
          width: 304px;
          height: 304px;
          left: -139px;
          top: -41px;
        }
        .section-header .circle-overlay:nth-of-type(2) {
          width: 534px;
          height: 534px;
          left: 1240px;
          top: -103px;
        }
        .section-header .circle-overlay:nth-of-type(3) {
          width: 534px;
          height: 534px;
          left: -56px;
          top: 301px;
        }
      `}</style>
    </>
  )
}

export default PageStyleOne