// Components
import PricingItem from 'components/Shared/PricingCalculator/PricingItem'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'
// Assets
import CloudServers from 'public/assets/media/images/book1.png'

const PublicPricingCalculator = () => {

  return (
    <div>
      <PricingItem icon='public/assets/media/images/cloudservers.png' />
    </div>
  )
}

export default PublicPricingCalculator