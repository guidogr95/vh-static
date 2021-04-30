import { useEffect, useMemo, useState } from 'react'
// Components
import BaseMultiplierPricingItem from './BaseMultiplierPricingItem'
import PricingItemWrapper from '../PricingItemWrapper'
// Utils
import { v4 } from 'uuid'
// Assets
import { FaPlus } from 'react-icons/fa'
// Theme
import { calculatorStyles } from 'styles/theme'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'

const BaseMultiplierPricingItems = ({ legendData, label, pricingTable, description, id, isMultiple, handleAccordion }) => {
  const { pricingSummary, setPricingSummary } = usePricingCalculator()

  const [pricingObjects, setPricingObjects] = useState([{
    id: v4()
  }])

  const pricingObjectsNumber = useMemo(() => pricingObjects.length, [pricingObjects])

  const handleObjectList = ({ operation, objectId }) => {
    let childPricingObjects = Array.from(pricingObjects)
    if (operation === 'add') {
      childPricingObjects.push({
        id: v4()
      })
    } else if (operation === 'subtract') {
      if (!objectId) return
      const parentProductIndex = pricingSummary.findIndex(product => product.id === id)
      const pricingSummaryCopy = Array.from(pricingSummary)
      pricingSummaryCopy[parentProductIndex].pricingItems = pricingSummaryCopy[parentProductIndex].pricingItems.filter(subproduct => subproduct.id !== objectId)
      setPricingSummary(pricingSummaryCopy)
      childPricingObjects = childPricingObjects.filter(pricingObject => pricingObject.id !== objectId)
    }
    setPricingObjects(childPricingObjects)
  }

  useEffect(() => {
    handleAccordion({ forceResize: true })
  }, [pricingObjects])

  const ObjectAddition = () => {
    return (
      <>
        <div>
          <button
            onClick={() => handleObjectList({ operation: 'add' })}
            className="calculator-white-btn regular"
            title="Add more products"
          >
            <FaPlus />
            <span>Add More</span>
          </button>
        </div>
        <style jsx>{`
          div {
            margin: ${calculatorStyles.largeSubElementMargin};
          }
          div button {
            display: flex;
            align-items: center;
            font-size: 1em;
            padding: 0 13px;
          }
          div button :global(svg) {
            font-size: 0.8em;
            margin-right: 10px;
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      <PricingItemWrapper
        label={label}
        description={description}
      >
        {isMultiple && <ObjectAddition/>}
        <div className="selection__pricing-objects" >
          {pricingObjects.map((pricingObject, index) => {
            return (
              <BaseMultiplierPricingItem
                key={pricingObject.id}
                index={index}
                id={pricingObject.id}
                pricingObjectsNumber={pricingObjectsNumber}
                legendData={legendData}
                pricingTable={pricingTable}
                parentId={id}
                handleObjectList={handleObjectList}
                label={label}
              />
            )
          })}
        </div>
      </PricingItemWrapper>
      <style jsx>{`
        :global(.selection__pricing-objects) {
          display: flex;
          flex-direction: column;
        }
        :global(.selection__pricing-objects .pricing-object:not(:first-of-type)) {
          margin-top: 30px;
        }
      `}</style>
    </>
  )
}

export default BaseMultiplierPricingItems