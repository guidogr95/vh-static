// Components
import Button from 'react-bootstrap/Button'
import PricingItem from '..'

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
          display: flex;
          flex-direction: column;
        }
        .pricing-selector :global(button) {
          margin-bottom: 15px;
        }
      `}</style>
    </>
  )
}

export default PricingSelector