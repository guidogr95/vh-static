// Components
import PublicPricingCalculator from './PublicPricingCalculator'
import PricingSummary from 'components/Shared/PricingCalculator/PricingSummay'
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
          <PricingSummary />
        </div>
      </ProvidePricingCalculator>
      <style jsx>{`
        .pricing-calculator {
          display: grid;
          grid-template-columns: 680px auto;
          column-gap: 30px;
        }
      `}</style>
    </>
  )
}

export default PricingCalculator