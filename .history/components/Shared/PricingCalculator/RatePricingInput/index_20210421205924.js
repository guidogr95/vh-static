import { useEffect, useState } from 'react'
// Components
import Input from 'components/Shared/Input'
// Utils
import calculateMonthlyPricing from 'utils/calculateMonthlyPricing'

const RatePricingInput = ({ pricingData, multiple, label }) => {
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

  useEffect(() => {
    setInputValue(innerMin)
  }, [innerMin])

  return (
    <>
      <div className={`pricing-input${multiple ? ' multiple' : ''}`} >
        <Input
          type="number"
          size="large"
          hideHandles={true}
          onChange={handleInput}
          value={inputValue}
        />
        <span className="pricing-input__units" >
          {`${multiple ? label : ''} ${pricingData?.unit}`}
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
        .pricing-input .monthly-pricing {
          position: absolute;
          top: 0;
          right: 0;
        }
        .pricing-input.multiple .monthly-pricing {
          position: relative;
        }
      `}</style>
    </>
  )
}

export default RatePricingInput