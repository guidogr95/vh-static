// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'

const StandardV3 = () => {

  const indexValues = {
    1: 1,
    2: 2,
    3: 4,
    4: 8,
    5: 16,
    6: 24,
    7: 32,
    8: 48
  }

  return (
    <div className="item__pricing-selection" >
      <BaseMultiplierPricing
        indexValues={indexValues}
        max={20}
        min={1}
      />
    </div>
  )
}

export default StandardV3