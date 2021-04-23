// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
// Assets
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'
// Configs
import { publicPricing } from 'components/Shared/PricingCalculator/config/pricingCalculatorData'

const ServersPricingSection = () => {
  return (
    <div className="pricing-item-servers" >
      <PricingSection
          icon={CloudServersIcon}
          label="Cloud Servers"
          sectionPricingData={publicPricing}
      />
    </div>
  )
}

export default ServersPricingSection