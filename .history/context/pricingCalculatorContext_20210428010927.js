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
    // const summaryItems = pricingSummary.filter(pricingItem => pricingItem.addToSummary)
    const summaryProducts = {
      processor: [],
      memory: [],
      storage: []
    }
    // console.log('summary items', summaryItems)
    for (const i in pricingSummary) {
      const pricingSummaryItem = pricingSummary[i]
      const addToSummary = pricingSummary[i]?.addToSummary
      const multiplier = pricingSummary[i]?.multiplier
      const type = pricingSummary[i]?.type

      switch (addToSummary) {
        case true:

          switch (type) {
            case 'baseMultiplier':
              for (const j in pricingSummaryItem.legendData.features) {
                const currentFeature = pricingSummaryItem.legendData.features[j]
                const summaryProductItemIndex = summaryProducts[currentFeature.summaryProduct].findIndex(summaryProductItem => summaryProductItem.type === currentFeature.type)

                if (summaryProductItemIndex < 0) {
                    console.log('new', pricingSummaryItem.label, multiplier, multiplier * currentFeature.base)
                    summaryProducts[currentFeature.summaryProduct][summaryProductItemIndex] = {
                      type: currentFeature.type,
                      value: multiplier * currentFeature.base,
                      unit: currentFeature.unit
                    }
                  } else {
                    summaryProducts[currentFeature.summaryProduct][summaryProductItemIndex] = {
                      ...summaryProducts[currentFeature.summaryProduct][summaryProductItemIndex],
                      value: multiplier * currentFeature.base
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
    console.log('summary products', summaryProducts)
  }, [pricingSummary])

  useEffect(() => {
    extractPricingData()
  }, [])

  return {
    pricingSummary,
    setPricingSummary
  }
}