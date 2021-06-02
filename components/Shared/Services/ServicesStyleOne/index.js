// Theme
import { colors, shadows } from 'styles/theme'
// Assets
import PrivateCloud from 'public/assets/media/icons/privatecloud.svg'

const ServicesStyleOne = () => {
  return (
    <>
      <section className="containerSection" >
        <div className="services-wrapper two-column-tout--s1 centeredBlock" >
          <div className="tout__text mb-xlg" >
           <h2 className="gradientFont-day mb-small mw-md">Services</h2>
           <p className="fw-300" >Infrastructure solutions built to meet your needs</p>
          </div>
          <div className="services_bg" >
            <div className="bg-container" >
              <div className="singleCircle-bg borderRadius-md" />
            </div>
          </div>
          <ul className="services__items" >
            <li className="service__item borderRadius-md" >
              <div className="service__item-icon-btn" >
                <img alt="private cloud" src={PrivateCloud} />
              </div>
              <h3 className="mb-small mt-small" >Private Cloud</h3>
              <p className="fw-300 mb-none" >Hosted or on-premise and customizable</p>
            </li>
            <li className="service__item borderRadius-md" >
              <div className="service__item-icon-btn" >
                <img alt="private cloud" src={PrivateCloud} />
              </div>
              <h3 className="mb-small mt-small" >Private Cloud</h3>
              <p className="fw-300 mb-none" >Hosted or on-premise and customizable</p>
            </li>
            <li className="service__item borderRadius-md" >
              <div className="service__item-icon-btn" >
                <img alt="private cloud" src={PrivateCloud} />
              </div>
              <h3 className="mb-small mt-small" >Private Cloud</h3>
              <p className="fw-300 mb-none" >Hosted or on-premise and customizable</p>
            </li>
          </ul>
        </div>
      </section>
      <style jsx>{`
        section {
          height: 550px;
        }
        .centeredBlock {
          margin-right: 0;
          width: 100%;
        }
        .services-wrapper {
          grid-auto-rows: minmax(min-content, max-content);
        }
        .bg-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 450px;
        }
        .singleCircle-bg {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .services_bg {
          position: relative;
          z-index: 1;
        }
        .services__items {
          grid-column-start: 1;
          grid-column-end: 3;
          display: flex;
          list-style: none;
          z-index: 2;
        }
        .service__item {
          box-shadow: ${shadows.cardSoft};
          padding: 60px;
          background: ${colors.trueWhite};
          height: fit-content;
          height: max-content;
          height: min-content;
          height: -webkit-fill-available;
        }
        .service__item:not(:last-of-type) {
          margin-right: 30px;
        }
        .service__item h3 {
          color: ${colors.blackTwo};
        }
        .service__item-icon-btn {
          position: relative;
          height: 24px;
          width: 24px;
          transition: .3s ease-out all;
          transition-delay: .3s;
        }
        .service__item-icon-btn img {
          transition: .3s ease-out all;
          transition-delay: .3s;
          height: 100%;
          opacity: 0;
          transform: translateX(-20px);
        }
        .service__item-icon-btn:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background: purple;
          transition: .3s ease-out all;
          transition-delay: .6s;
        }
        .service__item:hover .service__item-icon-btn:after {
          transition-delay: .0s;
          opacity: 0;
          transform: scale(0);
          transform: translateX(-20px);
        }
        .service__item:hover .service__item-icon-btn img {
          opacity: 1;
          transform: translateX(0);
        }
        .service__item:hover .service__item-icon-btn {
          height: 120px;
        }
      `}</style>
    </>
  )
}

export default ServicesStyleOne