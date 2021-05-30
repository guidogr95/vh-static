<<<<<<< HEAD
import { useRef } from 'react'
// Components
import PublicPricingCalculator from './PublicPricingCalculator'
import PricingSummary from 'components/Shared/PricingCalculator/PricingSummary'
=======
// Components
import PublicPricingCalculator from './PublicPricingCalculator'
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
// Context
import { ProvidePricingCalculator } from 'context/pricingCalculatorContext'

const PricingCalculator = () => {
<<<<<<< HEAD
  const calculatorRef = useRef(null)
=======
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974

  return (
    <>
      <ProvidePricingCalculator>
<<<<<<< HEAD
        <section className="pricing-calculator" ref={calculatorRef} >
          <div className="pricing-calculator__pricing-items" >
            <PublicPricingCalculator />
          </div>
          <PricingSummary calculatorRef={calculatorRef} />
        </section>
=======
        <div className="pricing-calculator" >
          <div className="pricing-calculator__pricing-items" >
            <PublicPricingCalculator />
          </div>
          <div className="pricing-calculator__final-price" >

          </div>
        </div>
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
      </ProvidePricingCalculator>
      <style jsx>{`
        .pricing-calculator {
          display: grid;
<<<<<<< HEAD
          grid-template-columns: 700px auto;
          column-gap: 2.5rem;
=======
          grid-template-columns: 650px auto;
          column-gap: 30px;
        }
        .pricing-calculator__final-price {
          width: 100%;
          background: black;
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
        }
      `}</style>
    </>
  )
}

export default PricingCalculator