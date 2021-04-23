// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'

const PricingItem = ({ indexValues, legendData, label }) => {

  return (
    <div className="item__pricing-selection" >
      <BaseMultiplierPricing
        legendData={legendData}
        indexValues={indexValues}
        max={8}
        min={1}
        label={label}
      />
    </div>
  )
}

export default PricingItem