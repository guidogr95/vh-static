// Components
import PublicPricingCalculator from './PublicPricingCalculator'
import PricingSummary from 'components/Shared/PricingCalculator/PricingSummay'
// Context
import { ProvidePricingCalculator } from 'context/pricingCalculatorContext'

const PricingCalculator = () => {

  return (
    <>
      <ProvidePricingCalculator>
        <section className="pricing-calculator" >
          <div className="pricing-calculator__pricing-items" >
            <PublicPricingCalculator />
          </div>
          <PricingSummary />
        </section>
      </ProvidePricingCalculator>
      <style jsx>{`
        .pricing-calculator {
          display: grid;
          grid-template-columns: 700px auto;
          column-gap: 30px;
        }
      `}</style>
    </>
  )
}

export default PricingCalculator