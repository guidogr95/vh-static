import { useState } from 'react'
// Components
import Input from 'components/Shared/Input'
// Utils
import calculateMonthlyPricing from 'utils/calculateMonthlyPricing'

const RatePricingInput = ({ pricingData }) => {
  const [inputValue, setInputValue] = useState(1)

  const handleInput = (e) => {
    const value = e.target.value
    if (value < 0 || value === '') {
      setInputValue(0)
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
          max-width: 125px;
        }
        .pricing-input :global(input) {
          text-align: center;
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