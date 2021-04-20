// Components
import PricingItem from 'components/Shared/PricingCalculator/PricingItem'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'
// Assets
import CloudServers from 'public/assets/media/icons/cloudservers.png'

const PublicPricingCalculator = () => {

  return (
    <>
      <div className="public-calculator" >
        <div className="public-calculator__pricing-items" >
          <PricingItem icon={CloudServers} />
        </div>
        <div className="public-calculator__final-price" >

        </div>
      </div>
      <style jsx>{`
        .public-calculator {
          display: grid;
          grid-template-columns: 900px auto;
        }
      `}</style>
    </>
  )
}

export default PublicPricingCalculator