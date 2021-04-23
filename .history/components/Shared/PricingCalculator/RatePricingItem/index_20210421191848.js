import { useState, memo, useRef, useCallback } from 'react'
// Components
import ItemPicker from 'components/Shared/PricingCalculator/ItemPicker'
import ItemSelector from 'components/Shared/PricingCalculator/ItemSelector'
import RatePricingInput from 'components/Shared/PricingCalculator/RatePricingInput'
// Utils
import { v4 } from 'uuid'

const RatePricingItem = memo(({ label, pricingTable, multiple }) => {

  const [activeTableIndex, setActiveTableIndex] = useState(0)
  const [pricingObjects, setPricingObjects] = useState(!multiple ? [pricingTable[0].pricingData] : [])
  const selectRef = useRef(null)

  const handleClick = useCallback((value) => {
    if (typeof value === 'object') value && value.preventDefault()
    if (!multiple) {
      setActiveTableIndex(value)
      setPricingObjects([pricingTable[value].pricingData])
    } else {
      setPricingObjects(pricingObjects)
    }
  }, [pricingTable])

  const optionsRenderer = () => {
    if (pricingTable.length <= 1) return null
    if (!multiple) {
      return (
        <ItemPicker
          pricingTable={pricingTable}
          value={activeTableIndex}
          onClick={handleClick}
        />
      )
    } else {
      return (
        <ItemSelector
          pricingTable={pricingTable}
          onSubmit={handleClick}
          ref={selectRef}
        />
      )
    }
  }

  return (
    <>
      <div className="item__pricing-selection" >
        {label && <h5>{label}</h5>}
        {optionsRenderer()}
        {pricingObjects.map(pricingObject => {
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