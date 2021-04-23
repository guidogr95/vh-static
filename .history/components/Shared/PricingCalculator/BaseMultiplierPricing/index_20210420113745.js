import { useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'

const BaseMultiplierPricing = ({ steps, max, min, indexValues, legendData }) => {

  const [value, setValue] = useState(min)

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
        indexValues={indexValues}
      />
      <BaseLegend
        legendData={legendData}
        multiplier={value}
      />
    </div>
  )
}

export default BaseMultiplierPricing