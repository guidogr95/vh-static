// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
import PricingSubItem from './PricingSubItem'
// Assets
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'

const ServersPricingSection = () => {
  return (
    <div className="pricing-item-servers" >
      <PricingSection
          icon={CloudServersIcon}
          label="Cloud Servers"
      >
        <PricingSubItem

        />
      </PricingSection>
    </div>
  )
}

export default ServersPricingSection