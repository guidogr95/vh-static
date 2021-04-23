// Components
import Button from 'react-bootstrap/Button'

const PricingSelector = ({ pricingTable, value, onClick }) => {
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
          grid-template-columns: repeat(1fr, 2);
          gap: 20px;
          margin-top: 25px;
        }
      `}</style>
    </>
  )
}

export default PricingSelector