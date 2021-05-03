// Theme
import { colors, largeBorderRadius } from 'styles/theme'

const PageStyleOne = ({ children }) => {
  return (
    <>
      <section>
        <div className="section-header__wrapper" >
          <div className="section-header" >
            <div className="circle-overlay" />
            <div className="circle-overlay" />
            <div className="circle-overlay" />
          </div>
        </div>
        {children}
      </section>
      <style jsx>{`
        section {
          position: relative;
          min-height: 100vh;
          width: 100%;
        }
        section .section-header__wrapper {
          position: absolute;
          margin: 20px;
          min-height: 928px;
          left: 0;
          right: 0;
          background: ${colors.purple};
          border-radius: ${largeBorderRadius};
          overflow: hidden;
          z-index: 1;
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