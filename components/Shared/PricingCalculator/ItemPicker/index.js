// Components
import Button from 'react-bootstrap/Button'
// Theme
import { calculatorStyles } from 'styles/theme'

const ItemPicker = ({ pricingTable, value, onClick }) => {
  return (
    <>
      <div className="item-picker" >
        {pricingTable.map((PricingItem, index) => {
          return (
            <Button
              key={PricingItem.label}
              variant={value === index ? 'brand' : 'light'}
              onClick={() => onClick(index)}
            >
              {PricingItem.label}
            </Button>
          )
        })}
      </div>
      <style jsx>{`
        .item-picker {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: ${calculatorStyles.basicSubElementMargin};
        }
      `}</style>
    </>
  )
}

export default ItemPicker