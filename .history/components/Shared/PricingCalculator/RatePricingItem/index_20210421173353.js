import { useState } from 'react'
// Components
import PricingSelector from 'components/Shared/PricingCalculator/PricingSelector'
import RatePricingInput from 'components/Shared/PricingCalculator/RatePricingInput'

const RatePricingItem = ({ label, pricingTable, multiple }) => {

  const [activeTableIndex, setActiveTableIndex] = useState(0)
  const pricingData = pricingTable[activeTableIndex].pricingData

  const handleClick = (value) => {
    setActiveTableIndex(value)
  }

  console.log(pricingTable)

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
        <RatePricingInput
          pricingData={pricingData}
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

export default RatePricingItem