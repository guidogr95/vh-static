import { useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'

const BaseMultiplierPricing = ({ legendComponent, steps }) => {

  const [value, setValue] = useState(1)

  const handleSlider = (e) => {
    setValue(e.target.value)
  }

  const steps = () => {
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
    <div className="base-multiplier" >
      <RangeSlider
        steps={innerSteps}
        value={value}
        handleSlider={handleSlider}
      />
      <BaseLegend
        legendComponent={legendComponent}
        multiplier={value}
      />
    </div>
  )
}

export default BaseMultiplierPricing