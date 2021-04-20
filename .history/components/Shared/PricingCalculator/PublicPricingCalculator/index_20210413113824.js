// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'

const PublicPricingCalculator = () => {

  const { test } = usePricingCalculator()

  return (
    <div>
      {test}
    </div>
  )
}

export default PublicPricingCalculator