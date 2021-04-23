// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
import StandardV3 from './StandardV3'
// Assets
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'

const ServersPricingSection = () => {
  return (
    <div className="pricing-item-servers" >
      <PricingSection
          icon={CloudServersIcon}
          label="Cloud Servers"
      >
        <StandardV3 />
      </PricingSection>
    </div>
  )
}

export default ServersPricingSection