import { useEffect, useState } from 'react'
// Components
import PricingSummaryBlock from 'components/Shared/PricingCalculator/PricingSummary/PricingSummaryBlock'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'

const PricingSummaryTotal = () => {
  const { pricingSummary } = usePricingCalculator()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let childTotal = 0
    if (pricingSummary.length > 0) {
      for (const i in pricingSummary) {
        const type = pricingSummary[i].type
        const pricingItem = pricingSummary[i]
        switch (type) {
          case 'baseMultiplier':
            if (pricingItem.monthlyPricing) childTotal += parseInt(pricingItem.monthlyPricing)
            break
          case 'ratePricing':
            if (pricingItem.multiple && pricingItem.pricingItems) {
              for (const j in pricingItem.pricingItems) {
                childTotal += parseInt(pricingItem.pricingItems[j].monthlyPricing)
              }
            } else {
              if (pricingItem.monthlyPricing) childTotal += parseInt(pricingItem.monthlyPricing)
            }
            break
          default:
        }
      }
    }
    setTotal(childTotal)
  }, [pricingSummary])

  return (
    <PricingSummaryBlock>
      <span className="block__label sm" >Total Estimate</span>
      <h2 className="block__total" >
        ${total.toFixed(2)}
      </h2>
      <span className="block__label md" >
        Monthly
      </span>
    </PricingSummaryBlock>
  )
}

export default PricingSummaryTotal