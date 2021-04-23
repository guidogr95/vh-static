// Components
import Input from 'components/Shared/Input'

const RatePricingInput = ({ pricingIndex }) => {
  console.log(pricingIndex)
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