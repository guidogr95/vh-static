// Components
import PublicPricingCalculator from './PublicPricingCalculator'
// Context
import { ProvidePricingCalculator } from 'context/pricingCalculatorContext'

const PricingCalculator = () => {

  return (
    <div>
      <ProvidePricingCalculator>
        <PublicPricingCalculator />
      </ProvidePricingCalculator>
    </div>
  )
}

export default PricingCalculator