// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'

const StandardV3 = () => {

  const steps = (value) => {
    console.log('val', value)
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
        max={48}
        min={1}
      />
    </div>
  )
}

export default StandardV3