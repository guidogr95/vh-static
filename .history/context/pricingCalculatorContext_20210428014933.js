import { createContext, useContext, useEffect, useState } from 'react'
// Utils
import useDebounce from 'utils/useDebounce'
// Config
import { publicPricing } from 'components/Shared/PricingCalculator/config/pricingCalculatorData'

const pricingCalculatorContext = createContext()

export function ProvidePricingCalculator ({ children }) {
  const auth = useProvidePricingCalculator()
  return <pricingCalculatorContext.Provider value={auth}>{children}</pricingCalculatorContext.Provider>
}

export const usePricingCalculator = () => {
  return useContext(pricingCalculatorContext)
}

function useProvidePricingCalculator () {

  const [pricingSummary, setPricingSummary] = useState([])
  const [summaryProducts, setSummaryProducts] = useState(null)

  const extractPricingData = () => {
    const rawPricingData = []
    for (const i in publicPricing) {
      const sectionPricingData = publicPricing[i].sectionPricingData
      for (const j in publicPricing[i].sectionPricingData) {
        rawPricingData.push(sectionPricingData[j])
      }
    }
    setPricingSummary(rawPricingData)
  }

  useEffect(() => {
    const summaryProducts = {
      processor: [],
      memory: [],
      storage: []
    }
    for (const i in pricingSummary) {
      const pricingSummaryItem = pricingSummary[i]
      const addToSummary = pricingSummary[i]?.addToSummary
      const multiplier = pricingSummary[i]?.multiplier
      const multiple = pricingSummary[i]?.multiple
      const type = pricingSummary[i]?.type

      switch (addToSummary) {
        case true:

          switch (type) {
            case 'baseMultiplier':
              for (const j in pricingSummaryItem.legendData.features) {
                const currentFeature = pricingSummaryItem.legendData.features[j]
                const summaryProductItemIndex = summaryProducts[currentFeature.summaryProduct].findIndex(summaryProductItem => summaryProductItem.type === currentFeature.type)

                if (summaryProductItemIndex < 0) {
                    summaryProducts[currentFeature.summaryProduct].push({
                      type: currentFeature.type,
                      value: multiplier * currentFeature.base,
                      unit: currentFeature.unit
                    })
                  } else {
                    summaryProducts[currentFeature.summaryProduct][summaryProductItemIndex] = {
                      ...summaryProducts[currentFeature.summaryProduct][summaryProductItemIndex],
                      value: summaryProducts[currentFeature.summaryProduct][summaryProductItemIndex].value += (multiplier * currentFeature.base)
                    }
                  }
                }
              break
            case 'ratePricing':

              if (!multiple) {
                const activePriceTableItem = pricingSummaryItem.pricingTable.find(priceTableItem => priceTableItem.id === pricingSummaryItem.activePriceTableItemId)
                if (!activePriceTableItem) return

                const summaryProductItemIndex = summaryProducts[pricingSummaryItem.summaryProduct].findIndex(summaryProductItem => summaryProductItem.type === activePriceTableItem.type)

                if (summaryProductItemIndex < 0) {
                  summaryProducts[pricingSummaryItem.summaryProduct].push({
                    type: activePriceTableItem.type,
                    value: multiplier,
                    unit: activePriceTableItem.pricingData.unit
                  })
                } else {
                  summaryProducts[pricingSummaryItem.summaryProduct][summaryProductItemIndex] = {
                    ...summaryProducts[pricingSummaryItem.summaryProduct][summaryProductItemIndex],
                    value: summaryProducts[pricingSummaryItem.summaryProduct][summaryProductItemIndex].value += multiplier
                  }
                }
              }

              break
            default:
          }

          break
        default:
      }
    }
    setSummaryProducts(summaryProducts)
    console.log('summary products', summaryProducts)
  }, [pricingSummary])

  useEffect(() => {
    extractPricingData()
  }, [])

  return {
    pricingSummary,
    setPricingSummary,
    summaryProducts
  }
}