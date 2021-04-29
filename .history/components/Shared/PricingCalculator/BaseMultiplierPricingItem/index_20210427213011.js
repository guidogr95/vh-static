import { useState } from 'react'
// Components
import BaseMultiplierSlider from 'components/Shared/PricingCalculator/BaseMultiplierSlider'
import ItemPicker from 'components/Shared/PricingCalculator/ItemPicker'
import PricingItemWrapper from '../PricingItemWrapper'

const BaseMultiplierPricingItem = ({ legendData, label, pricingTable, description, id }) => {

  const [activeTableIndex, setActiveTableIndex] = useState(0)
  const pricingData = pricingTable[activeTableIndex].pricingData

  const handleClick = (value) => {
    setActiveTableIndex(value)
  }

  return (
    <PricingItemWrapper
      label={label}
      description={description}
    >
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
    </PricingItemWrapper>
  )
}

export default BaseMultiplierPricingItem