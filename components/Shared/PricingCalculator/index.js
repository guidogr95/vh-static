import { useRef } from 'react'
// Components
import PublicPricingCalculator from './PublicPricingCalculator'
import PricingSummary from 'components/Shared/PricingCalculator/PricingSummary'
// Context
import { ProvidePricingCalculator } from 'context/pricingCalculatorContext'

const PricingCalculator = () => {
  const calculatorRef = useRef(null)

  return (
    <>
      <ProvidePricingCalculator>
        <section className="pricing-calculator" ref={calculatorRef} >
          <div className="pricing-calculator__pricing-items" >
            <PublicPricingCalculator />
          </div>
          <PricingSummary calculatorRef={calculatorRef} />
        </section>
      </ProvidePricingCalculator>
      <style jsx>{`
        .pricing-calculator {
          display: grid;
          grid-template-columns: 700px auto;
          column-gap: 2.5rem;
        }
      `}</style>
    </>
  )
}

export default PricingCalculator