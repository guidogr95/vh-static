// Components
import PricingSummaryBlock from 'components/Shared/PricingCalculator/PricingSummary/PricingSummaryBlock'
// Assets
import Cores from 'public/assets/media/icons/cpu.svg'

const ProcessorSummary = () => {
  return (
    <PricingSummaryBlock
      title="Processor"
      titleIcon={Cores}
    >
      some
    </PricingSummaryBlock>
  )
}

export default ProcessorSummary