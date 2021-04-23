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
        <div>

        </div>
      </div>
      <style jsx>{`

      `}</style>
    </>
  )
}

export default RatePricingInput