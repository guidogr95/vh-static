import { useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'

const BaseMultiplierPricing = ({ legendComponent, steps, max, min }) => {

  const [value, setValue] = useState(min)

  const handleSlider = (e) => {
    setValue(e.target.value)
  }

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
    <div className="base-multiplier" >
      <RangeSlider
        steps={steps}
        value={value}
        handleSlider={handleSlider}
        max={max}
        min={min}
        // indexValues={indexValues}
      />
      <BaseLegend
        legendComponent={legendComponent}
        multiplier={value}
      />
    </div>
  )
}

export default BaseMultiplierPricing