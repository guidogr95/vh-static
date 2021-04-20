import { useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'

const BaseMultiplierPricing = ({ legendComponent, steps, max, min }) => {

  const [value, setValue] = useState(min)

  const handleSlider = (e) => {
    setValue(e.target.value)
  }

  const indexValues = [1, 2, 4, 8, 16, 24, 32, 48]

  return (
    <div className="base-multiplier" >
      <RangeSlider
        steps={steps}
        value={value}
        handleSlider={handleSlider}
        max={max}
        min={min}
        indexValues={indexValues}
      />
      <BaseLegend
        legendComponent={legendComponent}
        multiplier={value}
      />
    </div>
  )
}

export default BaseMultiplierPricing