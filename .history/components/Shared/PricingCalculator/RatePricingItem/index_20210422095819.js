import { useState, memo, useRef, useCallback } from 'react'
// Components
import ItemPicker from 'components/Shared/PricingCalculator/ItemPicker'
import ItemSelector from 'components/Shared/PricingCalculator/ItemSelector'
import RatePricingInput from 'components/Shared/PricingCalculator/RatePricingInput'
import PricingItemWrapper from 'components/Shared/PricingCalculator/PricingItemWrapper'
// Utils
import { v4 } from 'uuid'

const RatePricingItem = memo(({ label, pricingTable, multiple, placeholder, description }) => {

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

  const deleteInput = (id) => {
    setPricingObjects(pricingObjects.filter(item => item.id !== id))
  }

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
          placeholder={placeholder}
        />
      )
    }
  }

  return (
    <PricingItemWrapper
      label={label}
      description={description}
    >
      {optionsRenderer()}
      <div className="pricing-selection__pricing-objects" >
        {pricingObjects.map(pricingObject => {
          return (
            <RatePricingInput
              key={pricingObject.id || pricingObject.label}
              pricingData={pricingObject.pricingData}
              id={pricingObject.id}
              label={pricingObject.label}
              multiple={multiple}
              deleteInput={deleteInput}
            />
          )
        })}
      </div>
    </PricingItemWrapper>
  )
})

export default RatePricingItem