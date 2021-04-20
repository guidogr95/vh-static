import { useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'

const BaseMultiplierPricing = ({ legendComponent, steps, max, min }) => {

  const [value, setValue] = useState(min)

  const handleSlider = (e) => {
    const { value } = e.target
    let newValue = 1
    console.log(value)

    if (intValue > 4) {
        childSteps = 4
    } else if (intValue >= 2) {
        childSteps = 2
    } else if (intValue >= 1) {
        childSteps = 1
    }
    console.log(childSteps)
    return childSteps

    setValue(e.target.value)
  }

  return (
    <div className="base-multiplier" >
      <RangeSlider
        steps={steps}
        value={value}
        handleSlider={handleSlider}
        max={max}
        min={min}
      />
      <BaseLegend
        legendComponent={legendComponent}
        multiplier={value}
      />
    </div>
  )
}

export default BaseMultiplierPricing