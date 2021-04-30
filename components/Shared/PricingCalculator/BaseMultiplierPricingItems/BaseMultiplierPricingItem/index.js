import { memo, useState } from 'react'
// Components
import BaseMultiplierSlider from 'components/Shared/PricingCalculator/BaseMultiplierSlider'
import ItemPicker from 'components/Shared/PricingCalculator/ItemPicker'
// Assets
import { FaRegTrashAlt } from 'react-icons/fa'
// Theme
import { colors, shadows } from 'styles/theme'

const BaseMultiplierPricingItem = memo(({ legendData, pricingTable, parentId, id, index, label, pricingObjectsNumber, handleObjectList }) => {

  const [activeTableIndex, setActiveTableIndex] = useState(0)
  const pricingData = pricingTable[activeTableIndex].pricingData

  const handleClick = (value) => {
    setActiveTableIndex(value)
  }

  return (
    <>
      <div className={`pricing-object${pricingObjectsNumber > 1 ? ' multiple' : ''}`} >
        {pricingObjectsNumber > 1 &&
          <div className="pricing-object__header" >
            <h6>{label} - {index + 1}</h6>
            <div className="divider-dot" />
            <button
              className="calculator-white-btn regular"
              onClick={() => handleObjectList({ operation: 'subtract', objectId: id })}
              title="Delete product"
            >
              <FaRegTrashAlt />
            </button>
          </div>
        }
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
          parentId={parentId}
          id={id}
        />
      </div>
      <style jsx>{`
        h6 {
          color: ${colors.day};
          margin-bottom: 0;
        }
        .divider-dot {
          height: 4px;
          width: 4px;
          border-radius: 50%;
          background: ${colors.day};
          margin: 0 15px;
        }
        .pricing-object.multiple {
          position: relative;
        }
        .pricing-object__header {
          margin-bottom: 30px;
          display: flex;
          align-items: center;
        }
        .pricing-object__header button {
          font-size: 1em;
          box-shadow: ${shadows.input};
        }
      `}</style>
    </>
  )
})

export default BaseMultiplierPricingItem