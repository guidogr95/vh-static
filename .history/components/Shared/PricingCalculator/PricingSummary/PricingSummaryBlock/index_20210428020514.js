// Theme
import { colors } from 'styles/theme'

const PricingSummaryBlock = ({ children, title, titleIcon }) => {
  return (
    <>
      <div className="pricing-summary__block" >
        { (titleIcon || title) &&
          <div className="block__title" >
            {titleIcon && <img src={titleIcon} alt={title} />}
            {title && <span>{title}</span>}
          </div>
        }
        {children}
      </div>
      <style jsx>{`
        .pricing-summary__block {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-bottom: 35px;
        }
        .pricing-summary__block .block__title {
          display: flex;
          align-items: center;
          position: relative;
          padding: 5px 0;
          width: 100%;
          padding-bottom: 35px;
        }
        .pricing-summary__block .block__title:after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          background: ${colors.dayLight}50;
        }
        .pricing-summary__block .block__title img {
          margin-right: 10px;
          max-width: 25px;
        }
        .pricing-summary__block :global(.block__total) {
          margin: 5px 0;
          font-size: 3.3em;
        }
        .pricing-summary__block :global(.block__label) {
          margin: 0;
          font-weight: 300;
        }
        .pricing-summary__block :global(.block__label.md) {
          font-weight: 500;
          font-size: 1.5em;
          letter-spacing: 0.04em;
          font-stretch: condensed;
        }
      `}</style>
    </>
  )
}

export default PricingSummaryBlock