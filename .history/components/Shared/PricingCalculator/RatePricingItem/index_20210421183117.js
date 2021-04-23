import { useState, memo } from 'react'
// Components
import PricingSelector from 'components/Shared/PricingCalculator/PricingSelector'
import RatePricingInput from 'components/Shared/PricingCalculator/RatePricingInput'
// Utils
import { v4 } from 'uuid'

const RatePricingItem = memo(({ label, pricingTable, multiple }) => {

  const [activeTableIndex, setActiveTableIndex] = useState(0)
  const [pricingObjects, setPricingObjects] = useState([pricingTable[0].pricingData])

  const handleClick = (value) => {
    setActiveTableIndex(value)
    setPricingObjects([pricingTable[value].pricingData])
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
        {pricingObjects.map(pricingObject => {
          console.log(v4())
          return (
            <RatePricingInput
              key={v4()}
              pricingData={pricingObject}
            />
          )
        })}
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
})

export default RatePricingItem