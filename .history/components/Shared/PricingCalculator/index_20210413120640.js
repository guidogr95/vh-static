// Components
import PublicPricingCalculator from './PublicPricingCalculator'
// Context
import { ProvidePricingCalculator } from 'context/pricingCalculatorContext'

const PricingCalculator = () => {

  return (
    <>
      <ProvidePricingCalculator>
        <div className="pricing-calculator" >
          <div className="pricing-calculator__pricing-items" >
            <PublicPricingCalculator />
          </div>
          <div className="pricing-calculator__final-price" >

          </div>
        </div>
      </ProvidePricingCalculator>
      <style jsx>{`
        .pricing-calculator {
          display: grid;
          grid-template-columns: 900px auto;
        }
        .pricing-calculator__final-price {
          width: 100%;
          background: black;
        }
      `}</style>
    </>
  )
}

export default PricingCalculator