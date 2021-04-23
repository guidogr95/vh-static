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

  const legendData = []

  return (
    <div className="item__pricing-selection" >
      <BaseMultiplierPricing
        legendData={legendData}
        indexValues={indexValues}
        max={8}
        min={1}
      />
    </div>
  )
}

export default StandardV3