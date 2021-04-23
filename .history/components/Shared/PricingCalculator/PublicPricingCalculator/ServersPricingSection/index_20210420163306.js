// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
import StandardV3 from './StandardV3'
import StandardV2 from './StandardV2'
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
        <StandardV2 />
      </PricingSection>
    </div>
  )
}

export default ServersPricingSection