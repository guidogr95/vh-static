// Theme
import { borderRadius, colors, gradients } from 'styles/theme'

const PricingSummary = () => {
  return (
    <>
      <aside className="pricing-calculator__pricing-summary" >
        <span className="pricing-summary__label sm" >Total Estimate</span>
        <h2 className="pricing-summary__total" >
          $520.00
        </h2>
        <span className="pricing-summary__label md" >
          Monthly
        </span>
      </aside>
      <style jsx>{`
        .pricing-calculator__pricing-summary {
          width: 100%;
          background: ${gradients.lightDay};
          max-height: 600px;
          border-radius: ${borderRadius};
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: ${colors.whiteGray};
        }
        .pricing-calculator__pricing-summary .pricing-summary__total {
          margin: 15px 0;
        }
        .pricing-calculator__pricing-summary .pricing-summary__label {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default PricingSummary