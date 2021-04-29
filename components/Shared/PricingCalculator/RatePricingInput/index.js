import { useEffect, useState } from 'react'
// Components
import Input from 'components/Shared/Input'
// Utils
import calculateMonthlyPricing from 'utils/calculateMonthlyPricing'
// Theme
import { colors, borderRadius, gradients, shadows } from 'styles/theme'
// Assets
import { FaMinus, FaPlus } from 'react-icons/fa'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'

const RatePricingInput = ({ pricingData, multiple, label, deleteInput, id, parentId }) => {
  const { min } = pricingData
  const { pricingSummary, setPricingSummary } = usePricingCalculator()
  const [loaded, setLoaded] = useState(false)

  const innerMin = min || 0
  const [inputValue, setInputValue] = useState(innerMin)
  const multiplier = parseInt(inputValue)

  const handleInput = (e) => {
    const value = e.target ? e.target.value : e
    if (value < innerMin || value === '') {
      setInputValue(innerMin)
    } else {
      setInputValue(`${parseInt(value)}`)
    }
  }

  const handleInputBtn = (e) => {
    switch (e) {
      case 'add':
        handleInput(parseInt(inputValue) + 1)
        break
      case 'subtract': {
        const newValue = parseInt(inputValue) - 1
        if (multiple && newValue === 0) {
          const productIndex = pricingSummary.findIndex(product => product.id === parentId)
          const pricingSummaryCopy = Array.from(pricingSummary)
          pricingSummaryCopy[productIndex].pricingItems = pricingSummaryCopy[productIndex].pricingItems.filter(subproduct => subproduct.id !== id)
          setPricingSummary(pricingSummaryCopy)
          deleteInput(id)
        } else {
          handleInput(newValue)
        }
        break
      }
      default:
        break
    }
  }

  const monthlyPricing = calculateMonthlyPricing({
    pricingData,
    multiplier,
    type: 'rate',
    conditions: pricingData?.conditions
  })

  useEffect(() => {
    setInputValue(innerMin)
  }, [innerMin])

  useEffect(() => {
    if (loaded) return
    const productIndex = pricingSummary.findIndex(product => product.id === parentId)
    if (productIndex < 0) return
    const pricingSummaryCopy = Array.from(pricingSummary)

    if (multiple) {
      pricingSummaryCopy[productIndex]?.pricingItems
      ? pricingSummaryCopy[productIndex].pricingItems = [
        ...pricingSummaryCopy[productIndex]?.pricingItems,
        {
          label,
          id,
          monthlyPricing
        }
      ]
      : pricingSummaryCopy[productIndex].pricingItems = [
        {
          label,
          id,
          monthlyPricing
        }
      ]
    } else {
      if (pricingSummaryCopy[productIndex]?.monthlyPricing === undefined) {
        const shouldAdd = productIndex === 0 ? true : pricingSummaryCopy[parseInt(productIndex) - 1]?.monthlyPricing !== undefined
        if (shouldAdd) pricingSummaryCopy[productIndex].monthlyPricing = monthlyPricing
        pricingSummaryCopy[productIndex].activePriceTableItemId = id
        pricingSummaryCopy[productIndex].multiplier = multiplier
      }
    }

    setPricingSummary(pricingSummaryCopy)
    setLoaded(true)
  }, [pricingSummary])

  useEffect(() => {
    const productIndex = pricingSummary.findIndex(product => product.id === parentId)
    if (productIndex < 0) return
    const pricingSummaryCopy = Array.from(pricingSummary)

    if (multiple) {
      const subproductIndex = pricingSummaryCopy[productIndex].pricingItems.findIndex(subproduct => subproduct.id === id)
      pricingSummaryCopy[productIndex].pricingItems[subproductIndex].monthlyPricing = monthlyPricing
    } else {
      pricingSummaryCopy[productIndex].monthlyPricing = monthlyPricing
      pricingSummaryCopy[productIndex].activePriceTableItemId = id
      pricingSummaryCopy[productIndex].multiplier = multiplier
    }

    setPricingSummary(pricingSummaryCopy)
  }, [monthlyPricing])

  return (
    <>
      <div className={`pricing-input${multiple ? ' multiple' : ''}`} >
        <div className="pricing-input__input" >
          <button
            className="input-btn add"
            name="add"
            onClick={() => handleInputBtn('add')}
          >
            <FaPlus/>
          </button>
          <button
            className="input-btn subtract"
            name="subtract"
            onClick={() => handleInputBtn('subtract')}
          >
            <FaMinus />
          </button>
          <Input
            type="number"
            size="regular"
            hideHandles={true}
            onChange={handleInput}
            value={inputValue}
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
          grid-template-columns: 105px auto 95px;
        }
        .pricing-input :global(input) {
          text-align: center;
          width: 100%;
          max-width: 105px;
          padding: 0 25px;
        }
        .pricing-input__input {
          position: relative;
          border-radius: ${borderRadius};
          overflow: hidden;
          box-shadow: ${shadows.input};
        }
        .pricing-input__input .input-btn {
          position: absolute;
          width: 25px;
          font-weight: bold;
          height: 100%;
          top: 0;
          font-size: 0.8em;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: ${gradients.lightDay};
          color: ${colors.white};
        }
        .pricing-input__input .input-btn.add {
          right: 0;
        }
        .pricing-input__input .input-btn.subtract {
          left: 0;
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