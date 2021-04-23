import { createContext, useContext, useState } from 'react'
// Utils
import useLocalStorage from 'utils/useLocalStorage'

const pricingCalculatorContext = createContext()

export function ProvidePricingCalculator ({ children }) {
  const auth = useProvidePricingCalculator()
  return <pricingCalculatorContext.Provider value={auth}>{children}</pricingCalculatorContext.Provider>
}

export const usePricingCalculator = () => {
  return useContext(pricingCalculatorContext)
}

function useProvidePricingCalculator () {

  const [productSummary, setProductSummary] = useLocalStorage('productSummary', [])

  return {
    productSummary,
    setProductSummary
  }
}