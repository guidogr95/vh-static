import { forwardRef, useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'

const BaseMultiplierPricing = forwardRef(({ max, min, legendData, pricingIndex }, ref) => {

  const [value, setValue] = useState(min || 1)

  const handleSlider = (e) => {
    setValue(e.target.value)
  }

  const indexValues = {}
  for (const i in pricingIndex) {
      indexValues[parseInt(i) + 1] = pricingIndex[i].baseMultiplier
  }

  const multiplier = indexValues ? indexValues[value] : value

  return (
    <div className="base-multiplier" ref={ref} >
      <RangeSlider
        value={value}
        handleSlider={handleSlider}
        max={max}
        min={min}
        indexValues={indexValues}
      />
      <BaseLegend
        legendData={legendData}
        multiplier={multiplier}
      />
    </div>
  )
})

export default BaseMultiplierPricing