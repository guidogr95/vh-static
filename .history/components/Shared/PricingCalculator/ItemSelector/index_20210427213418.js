import { forwardRef, useState } from 'react'
// Components
import Select from 'components/Shared/Select'
import Button from 'react-bootstrap/Button'
// Theme
import { calculatorStyles, colors, gradients, shadows } from 'styles/theme'
// Assets
import { FaPlus } from 'react-icons/fa'

const ItemSelector = forwardRef(({ pricingTable, onSubmit, placeholder, id }, ref) => {
  const [selectValue, setSelectValue] = useState('none')

  const handleSelect = (e) => {
    setSelectValue(e.target.value)
  }

  return (
    <>
      <form className="item-selector" onSubmit={onSubmit} >
        <Select
          size="regular"
          value={selectValue}
          ref={ref}
          onChange={handleSelect}
        >
          <option value='none' >
            Select {placeholder}
          </option>
          {pricingTable.map(PricingItem => {
            return (
              <option
                key={PricingItem.id}
                value={PricingItem.id}
              >
                {PricingItem.label}
              </option>
            )
          })}
        </Select>
        <Button
          type="submit"
          disabled={selectValue === 'none'}
        >
          <FaPlus />
        </Button>
      </form>
      <style jsx>{`
        .item-selector {
          display: grid;
          grid-template-columns: 8.5fr 1.5fr;
          gap: 20px;
          margin: ${calculatorStyles.basicSubElementMargin};
        }
        .item-selector :global(.btn) {
          min-width: 0;
          background: ${gradients.lightDay};
          color: ${colors.white};
          font-weight: bold;
          box-shadow: ${shadows.input};
        }
      `}</style>
    </>
  )
})

export default ItemSelector