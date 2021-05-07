import { createContext, useContext, useEffect, useState } from 'react'
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

  const extractPricingData = ({ pricingObject }) => {
    const rawPricingData = []
    for (const i in pricingObject) {
      const sectionPricingData = pricingObject[i].sectionPricingData
      for (const j in pricingObject[i].sectionPricingData) {
        rawPricingData.push(sectionPricingData[j])
      }
    }
    return rawPricingData
  }

  const extractSummaryProducts = ({ pricingSummary }) => {
    const newSummaryProducts = {
      processor: [],
      memory: [],
      storage: []
    }
    for (const i in pricingSummary) {
      const pricingSummaryItem = pricingSummary[i]
      const addToSummary = pricingSummary[i]?.addToSummary
      let multiplier = pricingSummary[i]?.multiplier || 0
      const isMultiple = pricingSummary[i]?.isMultiple
      const type = pricingSummary[i]?.type
      switch (addToSummary) {
        case true:

          switch (type) {
            case 'baseMultiplier':
              for (const j in pricingSummaryItem.pricingItems) {
                multiplier += pricingSummaryItem.pricingItems[j].multiplier
              }
              for (const j in pricingSummaryItem.legendData.features) {
                const currentFeature = pricingSummaryItem.legendData.features[j]
                const summaryProductItemIndex = newSummaryProducts[currentFeature.summaryProduct].findIndex(summaryProductItem => summaryProductItem.type === currentFeature.type)

                if (summaryProductItemIndex < 0) {
                    newSummaryProducts[currentFeature.summaryProduct].push({
                      type: currentFeature.type,
                      value: multiplier * currentFeature.base,
                      unit: currentFeature.unit
                    })
                  } else {
                    newSummaryProducts[currentFeature.summaryProduct][summaryProductItemIndex] = {
                      ...newSummaryProducts[currentFeature.summaryProduct][summaryProductItemIndex],
                      value: newSummaryProducts[currentFeature.summaryProduct][summaryProductItemIndex].value += (multiplier * currentFeature.base)
                    }
                  }
                }
              break
            case 'ratePricing':

              if (!isMultiple) {
                const activePriceTableItem = pricingSummaryItem.pricingTable.find(priceTableItem => priceTableItem.id === pricingSummaryItem.activePriceTableItemId)
                if (!activePriceTableItem) return

                const summaryProductItemIndex = newSummaryProducts[pricingSummaryItem.summaryProduct].findIndex(summaryProductItem => summaryProductItem.type === activePriceTableItem.type)

                if (summaryProductItemIndex < 0) {
                  newSummaryProducts[pricingSummaryItem.summaryProduct].push({
                    type: activePriceTableItem.type,
                    value: multiplier,
                    unit: activePriceTableItem.pricingData.unit
                  })
                } else {
                  newSummaryProducts[pricingSummaryItem.summaryProduct][summaryProductItemIndex] = {
                    ...newSummaryProducts[pricingSummaryItem.summaryProduct][summaryProductItemIndex],
                    value: newSummaryProducts[pricingSummaryItem.summaryProduct][summaryProductItemIndex].value += multiplier
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
    return newSummaryProducts
  }

  useEffect(() => {
    const newSummaryProducts = extractSummaryProducts({ pricingSummary })
    setSummaryProducts(newSummaryProducts)
  }, [pricingSummary])

  useEffect(() => {
    const newPricingSummary = extractPricingData({ pricingObject: publicPricing })
    setPricingSummary(newPricingSummary)
  }, [])
  
  return {
    pricingSummary,
    setPricingSummary,
    summaryProducts
  }
}