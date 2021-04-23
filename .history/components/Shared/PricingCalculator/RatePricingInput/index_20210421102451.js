import { useState } from 'react'
// Components
import Input from 'components/Shared/Input'

const RatePricingInput = ({ pricingData }) => {
  console.log(pricingData)

  const [inputValue, setInputValue] = useState(1)

  const handleInput = (e) => {
    const value = e.target.value

    if (value < 0) {
      setInputValue(0)
    } else {
      setInputValue(value)
    }
  }

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
      `}</style>
    </>
  )
}

export default RatePricingInput