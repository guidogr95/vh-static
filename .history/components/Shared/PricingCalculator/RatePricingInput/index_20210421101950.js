// Components
import Input from 'components/Shared/Input'

const RatePricingInput = ({ pricingData }) => {
  console.log(pricingData)
  return (
    <>
      <div className="pricing-input" >
        <Input
          type="number"
          size="large"
        />
        <span className="pricing-input__units" >
          {pricingData?.unit}
        </span>
      </div>
      <style jsx>{`
        .pricing-input {
          display: flex;
          align-items: center;
        }
        .pricing-input__units {
          margin-left: 15px;
          font-size: 1.2em;
        }
      `}</style>
    </>
  )
}

export default RatePricingInput