// Components
import PublicPricingCalculator from './PublicPricingCalculator'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'

const PricingCalculator = () => {

  const { test } = usePricingCalculator()

  return (
    <div>
      {test}
      <PublicPricingCalculator />
    </div>
  )
}

export default PricingCalculator