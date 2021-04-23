import { createContext, useContext, useEffect, useState } from 'react'
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

  // const [productSummary, setProductSummary] = useLocalStorage('productSummary', [])
  const productSummary = []

  const setProductSummary = (value) => {
    productSummary.push(value)
  }

  const [productSummaryState, setProductSummaryState] = useState([])

  useEffect(() => {
    setProductSummaryState(productSummary)
  }, [productSummary])

  return {
    productSummary,
    setProductSummary
  }
}