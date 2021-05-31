// Components
import CircleBackgroundSection from 'components/Shared/BackgroundSections/CircleBackgroundSection'
// Theme
import { mediumBorderRadius, shadows } from 'styles/theme'
// Assets
import OpenStack from 'public/assets/media/icons/openstack.svg'
import Kubernetes from 'public/assets/media/icons/kubernetes.svg'

const TwoColumnToutStyleTwo = () => {
  return (
    <>
      <section className="two-column-tout--s2" >
        <CircleBackgroundSection >
          <div className="tout__container centeredBlock" >
            <div className="tout__column-one" >
              <h2 className="gradientFont-day mb-small">
                Managed open source infrastructure you can rely on
              </h2>
              <p className="fw-300 mb-none" >
                VEXXHOST has eight years of experience contributing to and using open source technologies like OpenStack and Kubernetes as the backbone of its infrastructure. Our mission is to offer you the benefits of a high-performance, community-driven, license-free solution without the hassle of managing it yourself.
              </p>
            </div>
            <div className="tout__column-two" >
              <div className="column-two__item" >
                <img alt="icon" src={OpenStack} />
                <h5 className="mb-small mt-small" >
                  Powered by OpenStack
                </h5>
                <p className="fw-300 mb-none" >
                  Our solutions contain tested OpenStack software to provide API compatibility for OpenStack core services.
                </p>
              </div>
              <div className="column-two__item" >
                <img alt="icon" src={Kubernetes} />
                <h5 className="mb-small mt-small" >
                  Certified Kubernetes
                </h5>
                <p className="fw-300 mb-none" >
                  The Managed Kubernetes offered through our cloud solutions are certified by the CNCF to ensure conformance and support of required APIs.
                </p>
              </div>
            </div>
          </div>
        </CircleBackgroundSection>
      </section>
      <style jsx>{`
      .two-column-tout--s2 :global(article) {
          padding: 80px 0;
        }
        .two-column-tout--s2 :global(.tout__container) {
          border-radius: ${mediumBorderRadius};
          height: 400px;
          background: white;
          z-index: 2;
          position: relative;
          box-shadow: ${shadows.cardRegular};
          padding: 50px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        .two-column-tout--s2 :global(.tout__column-one) {
          padding-right: 40px;
        }
        .two-column-tout--s2 :global(.tout__column-two) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 20px;
          padding-top: 10%;
        }
        .two-column-tout--s2 :global(.tout__column-two .column-two__item) {
          display: flex;
          flex-direction: column;
        }
        .two-column-tout--s2 :global(.tout__column-two .column-two__item img) {
          width: 55px;
        }
      `}</style>
    </>
  )
}

export default TwoColumnToutStyleTwo