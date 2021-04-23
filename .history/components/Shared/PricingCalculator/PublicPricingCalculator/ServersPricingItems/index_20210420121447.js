// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
import PricingItem from './PricingItem'
// Assets
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'

const ServersPricingSection = () => {
  return (
    <div className="pricing-item-servers" >
      <PricingSection
          icon={CloudServersIcon}
          label="Cloud Servers"
      >
        <PricingItem

        />
      </PricingSection>
    </div>
  )
}

export default ServersPricingSection