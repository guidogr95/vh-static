// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
import StandardV3 from './StandardV3'
import StandardV2 from './StandardV2'
import HighCPUV2 from './HighCPUV2'
import GPU from './GPU'
import DataTransfer from './DataTransfer'
import IPAddresses from './IPAddresses'
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
        <HighCPUV2 />
        <GPU />
        <DataTransfer />
        <IPAddresses />
      </PricingSection>
    </div>
  )
}

export default ServersPricingSection