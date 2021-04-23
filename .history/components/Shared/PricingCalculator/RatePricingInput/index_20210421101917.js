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
        }
      `}</style>
    </>
  )
}

export default RatePricingInput