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

  const extractPricingData = () => {
    for (const i in publicPricing) {
      const sectionPricingData = publicPricing[i].sectionPricingData
      for (const j in publicPricing[i].sectionPricingData) {
        console.log(sectionPricingData[j])
      }
    }
  }

  useEffect(() => {
    extractPricingData()
  }, [])

  return {
  }
}