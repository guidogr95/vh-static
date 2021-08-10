// Assets
import Infrastructure from 'public/assets/media/icons/infrastructure.svg'
// Assets
import { shadows, mediumBorderRadius } from 'styles/theme'

const TwoColumnToutStyleOne = () => {
  return (
    <>
      <section className="containerSection" >
        <div className="two-column-tout--s1 centeredBlock" >
          <div className="tout__text" >
           <h2 className="gradientFont-day mb-small mw-md">What we do</h2>
           <p className="fw-300 mb-none" >At VEXXHOST, we offer cost-conscious, complete, and widely flexible infrastructure and cloud solutions, allowing users to take advantage of:</p>
          </div>
          <div className="tout__column-two-items" >
            <div className="tout__column-two-item" >
              <div className="column-two-item__icon mb-small" >
                <img alt="icon" src={Infrastructure} />
              </div>
              <p className="column-two-item__text" >
                Fully managed infrastructure
              </p>
            </div>
            <div className="tout__column-two-item" >
              <div className="column-two-item__icon mb-small" >
                <img alt="icon" src={Infrastructure} />
              </div>
              <p className="column-two-item__text" >
                Fully managed infrastructure
              </p>
            </div>
            <div className="tout__column-two-item" >
              <div className="column-two-item__icon mb-small" >
                <img alt="icon" src={Infrastructure} />
              </div>
              <p className="column-two-item__text" >
                Fully managed infrastructure
              </p>
            </div>
            <div className="tout__column-two-item" >
              <div className="column-two-item__icon mb-small" >
                <img alt="icon" src={Infrastructure} />
              </div>
              <p className="column-two-item__text" >
                Fully managed infrastructure
              </p>
            </div>
            <div className="tout__column-two-item" >
              <div className="column-two-item__icon mb-small" >
                <img alt="icon" src={Infrastructure} />
              </div>
              <p className="column-two-item__text" >
                Fully managed infrastructure
              </p>
            </div>
            <div className="tout__column-two-item" >
              <div className="column-two-item__icon mb-small" >
                <img alt="icon" src={Infrastructure} />
              </div>
              <p className="column-two-item__text" >
                Fully managed infrastructure
              </p>
            </div>
            <div className="tout__column-two-item" >
              <div className="column-two-item__icon mb-small" >
                <img alt="icon" src={Infrastructure} />
              </div>
              <p className="column-two-item__text" >
                Fully managed infrastructure
              </p>
            </div>
            <div className="tout__column-two-item" >
              <div className="column-two-item__icon mb-small" >
                <img alt="icon" src={Infrastructure} />
              </div>
              <p>
                Fully managed infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          padding: 150px 0;
        }
        .tout__column-two-items {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(min-content, max-content);
          row-gap: 32px;
          position: relative;
        }
        .tout__column-two-item {
          position: relative;
          z-index: 2;
        }
        .tout__column-two-items:after {
          content: '';
          position: absolute;
          border-radius: ${mediumBorderRadius};
          top: 0;
          bottom: 0;
          left: 0;
          right: -50vw;
          box-shadow: ${shadows.cardRegular};
          z-index: 1;
        }
        .column-two-item__icon {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #D8D4F3;
          padding: 10px;
        }
        .column-two-item__icon img {
          width: 100%;
        }
        .tout__column-two-item p {
          font-weight: 300;
        }
      `}</style>
    </>
  )
}

export default TwoColumnToutStyleOne