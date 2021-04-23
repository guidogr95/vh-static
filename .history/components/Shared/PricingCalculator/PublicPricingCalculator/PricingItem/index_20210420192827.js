import { useState } from 'react'
// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'
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
        <BaseMultiplierPricing
          legendData={legendData}
          pricingIndex={pricingIndex}
          label={label}
        />
      </div>
      <style jsx>{`
        .item__pricing-selection {
          display: flex;
          flex-direction: column;
        }
        h5 {
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}

export default PricingItem