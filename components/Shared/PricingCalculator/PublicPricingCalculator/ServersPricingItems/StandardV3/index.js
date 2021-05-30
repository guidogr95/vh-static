// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'

const StandardV3 = () => {

  return (
    <div className="item__pricing-selection" >
      <BaseMultiplierPricing
        // steps={steps}
        max={8}
        min={1}
      />
    </div>
  )
}

export default StandardV3