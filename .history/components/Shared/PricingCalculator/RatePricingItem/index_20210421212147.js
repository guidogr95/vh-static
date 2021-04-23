import { useState, memo, useRef, useCallback } from 'react'
// Components
import ItemPicker from 'components/Shared/PricingCalculator/ItemPicker'
import ItemSelector from 'components/Shared/PricingCalculator/ItemSelector'
import RatePricingInput from 'components/Shared/PricingCalculator/RatePricingInput'
// Utils
import { v4 } from 'uuid'

const RatePricingItem = memo(({ label, pricingTable, multiple }) => {

  const [activeTableIndex, setActiveTableIndex] = useState(0)
  const [pricingObjects, setPricingObjects] = useState(!multiple ? [pricingTable[0]] : [])
  const selectRef = useRef(null)

  const handleClick = useCallback((value) => {
    if (typeof value === 'object') value && value.preventDefault()
    if (!multiple) {
      setActiveTableIndex(value)
      setPricingObjects([pricingTable[value]])
    } else {
      if (pricingObjects.findIndex(item => item.label === selectRef.current.value) >= 0) return
      const pricingObject = pricingTable.find(item => item.label === selectRef.current.value)
      const childPricingObjects = Array.from(pricingObjects)
      childPricingObjects.push({
        ...pricingObject,
        id: v4()
      })
      setPricingObjects(childPricingObjects)
    }
  }, [pricingTable, pricingObjects])

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
        <div className="pricing-selection__pricing-objects" >
          {pricingObjects.map(pricingObject => {
            return (
              <RatePricingInput
                key={pricingObject.id || pricingObject.label}
                pricingData={pricingObject.pricingData}
                label={pricingObject.label}
                multiple={multiple}
              />
            )
          })}
        </div>
      </div>
      <style jsx>{`
        .item__pricing-selection .pricing-selection__pricing-objects :global(.pricing-input.multiple:not(:last-child)) {
          margin-bottom: 15px;
        }
      `}</style>
    </>
  )
})

export default RatePricingItem