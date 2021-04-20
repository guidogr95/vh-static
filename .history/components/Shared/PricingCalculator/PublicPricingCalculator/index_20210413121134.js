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
        <PricingItem
          icon={CloudServers}
          label="Cloud Servers"
        />
      </div>
      <style jsx>{`
      `}</style>
    </>
  )
}

export default PublicPricingCalculator