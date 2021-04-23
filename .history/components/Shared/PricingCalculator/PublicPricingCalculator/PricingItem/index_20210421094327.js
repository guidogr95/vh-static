import { useState } from 'react'
// Components
import BaseMultiplierSlider from 'components/Shared/SliderCalculator/BaseMultiplierPricing'
import PricingSelector from './PricingSelector'

const PricingItem = ({ legendData, label, pricingTable }) => {

  const [activeTableIndex, setActiveTableIndex] = useState(0)
  const pricingIndex = pricingTable[activeTableIndex].pricingIndex

  const handleClick = (value) => {
    setActiveTableIndex(value)
  }

  return (
    <>
      <div className="item__pricing-selection" >
        {label && <h5>{label}</h5>}
        { pricingTable.length > 1 &&
          <PricingSelector
            pricingTable={pricingTable}
            value={activeTableIndex}
            onClick={handleClick}
          />
        }
        <BaseMultiplierSlider
          legendData={legendData}
          pricingIndex={pricingIndex}
          label={label}
        />
      </div>
      <style jsx>{`
        .item__pricing-selection {
          display: flex;
          position: relative;
          flex-direction: column;
          margin-bottom: 60px;
        }
        h5 {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  )
}

export default PricingItem