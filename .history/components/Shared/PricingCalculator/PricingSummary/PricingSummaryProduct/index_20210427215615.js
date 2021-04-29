// Components
import PricingSummaryBlock from 'components/Shared/PricingCalculator/PricingSummary/PricingSummaryBlock'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'

const PricingSummaryProduct = ({ title, titleIcon, feature }) => {
  const { pricingSummary, setPricingSummary } = usePricingCalculator()
  console.log(pricingSummary)
  return (
    <PricingSummaryBlock
      title={title}
      titleIcon={titleIcon}
    >
      
    </PricingSummaryBlock>
  )
}

export default PricingSummaryProduct