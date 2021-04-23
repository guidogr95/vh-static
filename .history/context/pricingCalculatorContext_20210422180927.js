import { createContext, useContext, useEffect, useState } from 'react'
// Utils
import useDebounce from 'utils/useDebounce'

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
  const debouncedProductSummary = useDebounce(productSummary, 400)

  const setProductSummary = (value) => {
    productSummary.push(value)
  }

  // const [productSummaryState, setProductSummaryState] = useState([])

  // useEffect(() => {
  //   setProductSummaryState(productSummary)
  // }, [debouncedProductSummary])

  return {
    productSummary,
    setProductSummary,
    productSummaryState
  }
}