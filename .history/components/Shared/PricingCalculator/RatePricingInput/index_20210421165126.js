import { useState } from 'react'
// Components
import Input from 'components/Shared/Input'
// Utils
import calculateMonthlyPricing from 'utils/calculateMonthlyPricing'

const RatePricingInput = ({ pricingData }) => {
  const { min } = pricingData

  const innerMin = min || 0
  const [inputValue, setInputValue] = useState(innerMin)
  const handleInput = (e) => {
    const value = e.target.value
    if (value < innerMin || value === '') {
      setInputValue(innerMin)
    } else {
      setInputValue(`${parseInt(value)}`)
    }
  }

  const monthlyPricing = calculateMonthlyPricing({
    pricingData,
    multiplier: parseInt(inputValue),
    type: 'rate'
  })

  return (
    <>
      <div className="pricing-input" >
        <Input
          type="number"
          size="large"
          hideHandles={true}
          onChange={handleInput}
          value={inputValue}
        />
        <span className="pricing-input__units" >
          {pricingData?.unit}
        </span>
        <span className="monthly-pricing" >
          {pricingData.usdRate === 0 ? 'FREE' : `${monthlyPricing}/mo`}
        </span>
      </div>
      <style jsx>{`
        .pricing-input {
          display: flex;
          align-items: center;
        }
        .pricing-input :global(input) {
          text-align: center;
          width: 85px;
        }
        .pricing-input__units {
          margin-left: 15px;
          font-size: 1.2em;
        }
        .monthly-pricing {
          position: absolute;
          top: 0;
          right: 0;
        }
      `}</style>
    </>
  )
}

export default RatePricingInput