// Components
import Avatar from 'components/Shared/Avatar'
// Theme
import { colors, mediumBorderRadius, shadows } from 'styles/theme'

const TestimonialBoxStyleOne = () => {
  return (
    <>
      <div className="testimonial-wrapper" >
        <span className="text" >
          At VEXXHOST, we offer cost-conscious, complete, and widely flexible infrastructure and cloud solutions.
        </span>
        <div className="client" >
            <Avatar
              hideHalfCircle={true}
              picture="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-creador-de-avatar-masculino.jpg"
            />
            <div className="client__details" >
              <span className="client__name" >
                Kate Cloud
              </span>
              <span className="client__company" >
                Google Company
              </span>
            </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-wrapper {
          display: flex;
          flex-direction: column;
          padding: 32px;
          border-radius: ${mediumBorderRadius};
          box-shadow: ${shadows.cardRegular};
          min-height: 200px;
        }
        .text {
          font-weight: 300;
        }
        .client {
          display: flex;
          align-items: center;
          margin-top: 20px;
        }
        .client__details {
          display: flex;
          flex-direction: column;
        }
        .client__name {
          color: ${colors.blackOne};
          font-weight: 700;
        }
        .client__company {
          color: ${colors.day};
          font-weight: 300;
        }
        .client :global(.avatar-link img) {
          margin: 0 10px 0 0;
        }
      `}</style>
    </>
  )
}

export default TestimonialBoxStyleOne