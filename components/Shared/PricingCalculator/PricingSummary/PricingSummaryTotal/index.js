import { useEffect, useState } from 'react'
// Components
import PricingSummaryBlock from 'components/Shared/PricingCalculator/PricingSummary/PricingSummaryBlock'
// Utils
import numberFormat from 'utils/numberFormat'

const PricingSummaryTotal = ({ pricingSummary }) => {
  const [total, setTotal] = useState('$0.00')

  useEffect(() => {
    let childTotal = 0
    if (pricingSummary.length > 0) {
      for (const i in pricingSummary) {
        const type = pricingSummary[i].type
        const pricingItem = pricingSummary[i]
        switch (type) {
          case 'baseMultiplier':
            for (const j in pricingItem.pricingItems) {
              const monthlyPricing = pricingItem?.pricingItems[j]?.monthlyPricing
              if (monthlyPricing) childTotal += parseFloat(monthlyPricing)
            }
            break
          case 'ratePricing':
            if (pricingItem.isMultiple && pricingItem.pricingItems) {
              for (const j in pricingItem.pricingItems) {
                childTotal += parseFloat(pricingItem.pricingItems[j].monthlyPricing)
              }
            } else {
              if (pricingItem.monthlyPricing) childTotal += parseFloat(pricingItem.monthlyPricing)
            }
            break
          default:
        }
      }
    }
    const formattedTotal = numberFormat({
      value: childTotal,
      style: 'currency'
    })
    setTotal(formattedTotal)
  }, [pricingSummary])

  return (
    <>
      <PricingSummaryBlock>
        <span className="block__label sm" >Total Estimate</span>
        <h2 className="block__total" >
          {total}
        </h2>
        <span className="block__label md" >
          Monthly
        </span>
      </PricingSummaryBlock>
      <style jsx>{`
        :global(.block__total) {
          transform: scale(${total.length > 10 ? 1 - (1 * (total.length * 2 / 100)) : 1});
        }
      `}</style>
    </>
  )
}

export default PricingSummaryTotal