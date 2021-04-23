// Components
import Button from 'react-bootstrap/Button'

const PricingSelector = ({ pricingTable, value, onClick }) => {
  return (
    <>
      <div className="pricing-selector" >
        {pricingTable.map((pricingItem, index) => {
          return (
            <Button
              variant={value === index ? 'brand' : 'secondary'}
              
            >
              {pricingItem.label}
            </Button>
          )
        }}
      </div>
      <style jsx>{`
        .pricing-selector {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export default PricingSelector