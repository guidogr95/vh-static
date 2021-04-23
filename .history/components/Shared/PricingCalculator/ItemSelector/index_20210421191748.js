import { forwardRef, useState } from 'react'
// Components
import Select from 'components/Shared/Select'
import Button from 'react-bootstrap/Button'

const ItemSelector = forwardRef(({ pricingTable, onSubmit }, ref) => {
  const [selectValue, setSelectValue] = useState('none')

  const handleSelect = (e) => {
    setSelectValue(e.target.value)
  }

  return (
    <>
      <form className="item-selector" onSubmit={onSubmit} >
        <Select
          size="large"
          value={selectValue}
          ref={ref}
          onChange={handleSelect}
        >
          <option value='none' >
            Select Software License
          </option>
          {pricingTable.map((PricingItem, index) => {
            return (
              <option
                key={PricingItem.label}
                value={PricingItem.label}
              >
                {PricingItem.label}
              </option>
            )
          })}
        </Select>
        <Button
          type="submit"
        >
          go
        </Button>
      </form>
      <style jsx>{`
        .item-selector {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 25px 0;
        }
      `}</style>
    </>
  )
})

export default ItemSelector