import { useState, memo, useRef, useCallback, useEffect } from 'react'
// Components
import ItemPicker from 'components/Shared/PricingCalculator/ItemPicker'
import ItemSelector from 'components/Shared/PricingCalculator/ItemSelector'
import RatePricingInput from 'components/Shared/PricingCalculator/RatePricingInput'
import PricingItemWrapper from 'components/Shared/PricingCalculator/PricingItemWrapper'
import Empty from 'components/Shared/Empty'
// Assets
import AddIcon from 'public/assets/media/icons/add.svg'

const RatePricingItem = memo(({ label, pricingTable, isMultiple, placeholder, description, id, handleAccordion }) => {

  const [activeTableIndex, setActiveTableIndex] = useState(0)
  const [pricingObjects, setPricingObjects] = useState(!isMultiple ? [pricingTable[0]] : [])
  const selectRef = useRef(null)

  const handleClick = useCallback((value) => {
    if (typeof value === 'object') value && value.preventDefault()
    if (!isMultiple) {
      setActiveTableIndex(value)
      setPricingObjects([pricingTable[value]])
    } else {
      if (pricingObjects.findIndex(item => item.id === selectRef.current.value) >= 0) return
      const pricingObject = pricingTable.find(item => item.id === selectRef.current.value)
      const childPricingObjects = Array.from(pricingObjects)
      childPricingObjects.push(pricingObject)
      setPricingObjects(childPricingObjects)
    }
  }, [pricingTable, pricingObjects])

  const deleteInput = (id) => {
    setPricingObjects(pricingObjects.filter(item => item.id !== id))
  }

  useEffect(() => {
    if (isMultiple) handleAccordion({ forceResize: true })
  }, [pricingObjects])

  const optionsRenderer = () => {
    if (pricingTable.length <= 1) return null
    if (!isMultiple) {
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
        {pricingObjects.length > 0
          ? pricingObjects.map(pricingObject => {
            return (
              <RatePricingInput
                key={pricingObject.id}
                pricingData={pricingObject.pricingData}
                id={pricingObject.id}
                label={pricingObject.label}
                isMultiple={isMultiple}
                deleteInput={deleteInput}
                parentId={id}
              />
            )
          })
          : <Empty
            icon={AddIcon}
            label={`Add ${placeholder}`}
          />
        }
      </div>
    </PricingItemWrapper>
  )
})

export default RatePricingItem