import { useEffect, useState, useRef } from 'react'
// Components
import Input from 'components/Shared/Input'
// Utils
import calculateMonthlyPricing from 'utils/calculateMonthlyPricing'

const RatePricingInput = ({ pricingData, multiple, label }) => {
  const { min } = pricingData
  const inputRef = useRef(null)

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

  const handleInputBtn = (e) => {
    console.log(e.target.name, inputRef.current)
    switch (e.target.name) {
      case 'add':
        handleInput(inputValue + 1)
        break
      case 'subtract': {
        handleInput(inputValue - 1)
        break
      }
      default:
        break
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
        <div className="pricing-input__input" >
          <button
            className="input-btn add"
            name="add"
            onClick={handleInputBtn}
          >
            +
          </button>
          <button
            className="input-btn subtract"
            name="subtract"
            onClick={handleInputBtn}
          >
            -
          </button>
          <Input
            type="number"
            size="regular"
            hideHandles={true}
            onChange={handleInput}
            value={inputValue}
            ref={inputRef}
          />
        </div>
        <span className="pricing-input__units" >
          {`${multiple ? label : ''} ${pricingData?.unit}`}
        </span>
        <span className="monthly-pricing" >
          {pricingData.usdRate === 0 ? 'FREE' : `$${monthlyPricing}/mo`}
        </span>
      </div>
      <style jsx>{`
        .pricing-input {
          display: flex;
          align-items: center;
        }
        .pricing-input.multiple {
          display: grid;
          grid-template-columns: 85px auto 95px;
        }
        .pricing-input :global(input) {
          text-align: center;
          width: 85px;
        }
        .pricing-input__units {
          margin-left: 15px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          -webkit-line-clamp: 2;
          line-height: 1.8em;
          max-height: 3.4em;
        }
        .pricing-input .monthly-pricing {
          position: absolute;
          top: 0;
          right: 0;
        }
        .pricing-input.multiple .monthly-pricing {
          position: relative;
          text-align: right;
        }
      `}</style>
    </>
  )
}

export default RatePricingInput