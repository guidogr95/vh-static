// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'

const StandardV3 = () => {

  const steps = (value) => {
    let childSteps = 1
    const intValue = parseInt(value)
    console.log('val', intValue)

    if (intValue >= 4) {
        childSteps = 4
    } else if (intValue > 2) {
        childSteps = 2
    } else if (intValue >= 1) {
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