// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
// Assets
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'
// Configs
import { publicPricing } from 'components/Shared/PricingCalculator/config/pricingCalculatorData'

const PublicPricingCalculator = () => {

  return (
    <>
      <div className="public-calculator" >
        <PricingSection
          icon={CloudServersIcon}
          label="Cloud Servers"
          sectionPricingData={publicPricing}
        />
      </div>
      <style jsx>{`
      `}</style>
    </>
  )
}

export default PublicPricingCalculator