// Theme
import { borderRadius, colors, gradients } from 'styles/theme'

const PricingSummary = () => {
  return (
    <>
      <aside className="pricing-calculator__pricing-summary" >
        <div className="pricing-summary__block" >
          <span className="block__label sm" >Total Estimate</span>
          <h2 className="block__total" >
            $520.00
          </h2>
          <span className="block__label md" >
            Monthly
          </span>
        </div>
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
        .pricing-summary__block {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pricing-summary__block .block__total {
          margin: 5px 0;
          font-size: 3.3em;
        }
        .pricing-summary__block .block__label {
          margin: 0;
          font-weight: 300;
        }
        .pricing-summary__block .block__label.md {
          font-weight: 500;
          font-size: 1.5em;
          letter-spacing: 0.04em;
          font-stretch: condensed;
        }
      `}</style>
    </>
  )
}

export default PricingSummary