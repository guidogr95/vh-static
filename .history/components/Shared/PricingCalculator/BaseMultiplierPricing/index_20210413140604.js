import { useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'

const BaseMultiplierPricing = ({ legendComponent, steps, max, min }) => {

  const [value, setValue] = useState(1)

  const handleSlider = (e) => {
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