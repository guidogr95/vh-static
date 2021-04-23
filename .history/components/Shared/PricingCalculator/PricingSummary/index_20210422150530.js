// Components
import PricingSummaryBlock from './PricingSummaryBlock'
import ProcessorSummary from './ProcessorSummary'
// Theme
import { borderRadius, calculatorStyles, colors, gradients } from 'styles/theme'

const PricingSummary = () => {
  return (
    <>
      <aside className="pricing-calculator__pricing-summary" >
        <PricingSummaryBlock>
          <span className="block__label sm" >Total Estimate</span>
          <h2 className="block__total" >
            $520.00
          </h2>
          <span className="block__label md" >
            Monthly
          </span>
        </PricingSummaryBlock>
        <ProcessorSummary />
      </aside>
      <style jsx>{`
        .pricing-calculator__pricing-summary {
          width: 100%;
          background: ${gradients.lightDay};
          max-height: 600px;
          border-radius: ${borderRadius};
          padding: ${calculatorStyles.pricingSectionPadding};
          display: flex;
          flex-direction: column;
          align-items: center;
          color: ${colors.whiteGray};
        }
      `}</style>
    </>
  )
}

export default PricingSummary