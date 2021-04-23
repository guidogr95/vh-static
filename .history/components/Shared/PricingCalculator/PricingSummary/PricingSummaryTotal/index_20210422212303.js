// Components
import PricingSummaryBlock from 'components/Shared/PricingCalculator/PricingSummary/PricingSummaryBlock'
// Context

const PricingSummaryTotal = () => {
  return (
    <PricingSummaryBlock>
      <span className="block__label sm" >Total Estimate</span>
      <h2 className="block__total" >
        $520.00
      </h2>
      <span className="block__label md" >
        Monthly
      </span>
    </PricingSummaryBlock>
  )
}

export default PricingSummaryTotal