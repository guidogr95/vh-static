import { useEffect, useState } from 'react'
// Components
import Input from 'components/Shared/Input'
// Utils
import calculatePricing from 'utils/calculatePricing'
// Theme
import { borderRadius } from 'styles/theme'
// Assets
import { FaMinus, FaPlus } from 'react-icons/fa'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'

const RatePricingInput = ({ pricingData, isMultiple, label, deleteInput, id, parentId }) => {
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
        if (isMultiple && newValue === 0) {
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

  const monthlyPricing = calculatePricing({
    pricingData,
    multiplier,
    type: 'rate',
    conditions: pricingData?.conditions,
    cycle: 'monthly'
  })

  useEffect(() => {
    setInputValue(innerMin)
  }, [innerMin])

  useEffect(() => {
    if (loaded) return
    const productIndex = pricingSummary.findIndex(product => product.id === parentId)
    if (productIndex < 0) return
    const pricingSummaryCopy = Array.from(pricingSummary)

    if (isMultiple) {
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

    if (isMultiple) {
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
      <div className={`pricing-input${isMultiple ? ' isMultiple' : ''}`} >
        <div className="pricing-input__input" >
          <button
            className="input-btn calculator-white-btn add"
            name="add"
            onClick={() => handleInputBtn('add')}
            title="Add"
          >
            <FaPlus/>
          </button>
          <button
            className="input-btn calculator-white-btn subtract"
            name="subtract"
            onClick={() => handleInputBtn('subtract')}
            title="Subtract"
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
          {`${isMultiple ? label : ''} ${pricingData?.unit}`}
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
        .pricing-input.isMultiple {
          display: grid;
          grid-template-columns: 150px auto 95px;
        }
        .pricing-input :global(.form-control) {
          box-shadow: none;
        }
        .pricing-input :global(input) {
          text-align: center;
          width: 100%;
          padding: 0 47px;
          background: none;
        }
        .pricing-input__input {
          width: 150px;
          position: relative;
          border-radius: ${borderRadius};
        }
        .pricing-input__input .input-btn {
          position: absolute;
          width: 45px;
          font-weight: bold;
          height: 100%;
          top: 0;
          font-size: 0.8em;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
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
        .pricing-input.isMultiple .monthly-pricing {
          position: relative;
          text-align: right;
        }
      `}</style>
    </>
  )
}

export default RatePricingInput