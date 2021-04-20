import { createContext, useContext } from 'react'

const pricingCalculatorContext = createContext()

export function ProvideSpring({ children }) {
  const auth = useProvidePricingCalculator()
  return <pricingCalculatorContext.Provider value={auth}>{children}</pricingCalculatorContext.Provider>
}

export const usePricingCalculator = () => {
  return useContext(pricingCalculatorContext)
}

function useProvidePricingCalculator () {

    return {

    }
}
