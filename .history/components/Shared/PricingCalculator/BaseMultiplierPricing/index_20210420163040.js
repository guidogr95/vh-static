import { useState } from 'react'
// Components
import RangeSlider from 'components/Shared/RangeSlider'
import BaseLegend from './BaseLegend'

const BaseMultiplierPricing = ({ max, min, indexValues, legendData, pricingTable }) => {

  const [value, setValue] = useState(min)

  const handleSlider = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="base-multiplier" >
      <RangeSlider
        value={value}
        handleSlider={handleSlider}
        max={max}
        min={min}
        indexValues={indexValues}
        pricingTable={pricingTable}
      />
      <BaseLegend
        legendData={legendData}
        sliderValue={value}
        indexValues={indexValues}
      />
    </div>
  )
}

export default BaseMultiplierPricing