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
              variant={value === index ? 'brand' : 'secondary'}
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
      `}</style>
    </>
  )
}

export default PricingSelector