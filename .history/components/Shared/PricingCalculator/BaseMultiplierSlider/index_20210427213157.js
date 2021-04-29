import { useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'
// Theme
import { gradients } from 'styles/theme'

const BaseMultiplierSlider = ({ max, min, legendData, pricingData, label, id }) => {

  const [value, setValue] = useState(min || 1)

  const handleSlider = (e) => {
    setValue(e.target.value)
  }

  const indexValues = {}
  for (const i in pricingData) {
      indexValues[parseInt(i) + 1] = pricingData[i].baseMultiplier
  }

  const sliderTheme = {
    themeBackground: gradients.lightDay
  }

  return (
    <div className="base-multiplier" >
      <RangeSlider
        value={value}
        handleSlider={handleSlider}
        max={max}
        min={min}
        indexValues={indexValues}
        theme={sliderTheme}
      />
      <BaseLegend
        legendData={legendData}
        sliderValue={value}
        indexValues={indexValues}
        pricingData={pricingData}
        id={id}
      />
    </div>
  )
}

export default BaseMultiplierSlider