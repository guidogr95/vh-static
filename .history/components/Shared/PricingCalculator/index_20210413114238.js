// Components
import PublicPricingCalculator from './PublicPricingCalculator'
// Context
import { ProvidePricingCalculator } from 'context/pricingCalculatorContext'

const PricingCalculator = () => {

  return (
    <ProvidePricingCalculator>
      <div>
        <PublicPricingCalculator />
      </div>
    </ProvidePricingCalculator>
  )
}

export default PricingCalculator