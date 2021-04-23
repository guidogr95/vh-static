// Components
import Button from 'react-bootstrap/Button'

const ItemPicker = ({ pricingTable, value, onClick }) => {
  return (
    <>
      <div className="pricing-selector" >
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
        .pricing-selector {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 25px 0;
        }
      `}</style>
    </>
  )
}

export default ItemPicker