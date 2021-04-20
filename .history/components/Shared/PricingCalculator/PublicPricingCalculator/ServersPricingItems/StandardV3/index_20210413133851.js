// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'

const StandardV3 = () => {

  const steps = (value) => {
    let childSteps = 1
    if (value > 4) {
        childSteps = 4
    } else if (value > 2) {
        childSteps = 2
    } else if (value > 1) {
        childSteps = 1
    }
    return childSteps
  }

  return (
    <div className="item__pricing-selection" >
      <BaseMultiplierPricing
        steps={steps}
      />
    </div>
  )
}

export default StandardV3