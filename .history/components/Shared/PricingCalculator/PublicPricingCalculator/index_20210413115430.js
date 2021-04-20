// Components
import PricingItem from 'components/Shared/PricingCalculator/PricingItem'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'
// Assets
import CloudServers from 'public/assets/media/images/down-chevron.svg'

const PublicPricingCalculator = () => {

  return (
    <div>
      <PricingItem icon={CloudServers} />
    </div>
  )
}

export default PublicPricingCalculator