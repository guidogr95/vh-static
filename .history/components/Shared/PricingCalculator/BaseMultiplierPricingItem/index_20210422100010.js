import { useState } from 'react'
// Components
import BaseMultiplierSlider from 'components/Shared/PricingCalculator/BaseMultiplierSlider'
import ItemPicker from 'components/Shared/PricingCalculator/ItemPicker'

const BaseMultiplierPricingItem = ({ legendData, label, pricingTable, description }) => {

  const [activeTableIndex, setActiveTableIndex] = useState(0)
  const pricingData = pricingTable[activeTableIndex].pricingData

  const handleClick = (value) => {
    setActiveTableIndex(value)
  }

  return (
    <div className="item__pricing-selection" >
      {label && <h5>{label}</h5>}
      { pricingTable.length > 1 &&
        <ItemPicker
          pricingTable={pricingTable}
          value={activeTableIndex}
          onClick={handleClick}
        />
      }
      <BaseMultiplierSlider
        legendData={legendData}
        pricingData={pricingData}
        label={label}
      />
    </div>
  )
}

export default BaseMultiplierPricingItem