import { useState } from 'react'
// Components
import Select from 'components/Shared/Select'

const ItemSelector = ({ pricingTable, onSubmit }) => {
  const [selectValue, setSelectValue] = useState('none')

  return (
    <>
      <form className="item-selector" onSubmit={onSubmit} >
        <Select
          size="large"
          value={selectValue}
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
}

export default ItemSelector