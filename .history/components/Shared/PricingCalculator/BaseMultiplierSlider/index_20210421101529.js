import { useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'

const BaseMultiplierSlider = ({ max, min, legendData, pricingData }) => {

  const [value, setValue] = useState(min || 1)

  const handleSlider = (e) => {
    setValue(e.target.value)
  }

  const indexValues = {}
  for (const i in pricingData) {
      indexValues[parseInt(i) + 1] = pricingData[i].baseMultiplier
  }

  return (
    <div className="base-multiplier" >
      <RangeSlider
        value={value}
        handleSlider={handleSlider}
        max={max}
        min={min}
        indexValues={indexValues}
      />
      <BaseLegend
        legendData={legendData}
        sliderValue={value}
        indexValues={indexValues}
        pricingData={pricingData}
      />
    </div>
  )
}

export default BaseMultiplierSlider