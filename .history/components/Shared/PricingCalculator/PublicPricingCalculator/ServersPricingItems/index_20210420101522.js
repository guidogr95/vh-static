// Components
import PricingItem from 'components/Shared/PricingCalculator/PricingItem'
import StandardV3 from './StandardV3'
// Assets
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'

const ServersPricingItems = () => {
  return (
    <div className="pricing-item-servers" >
      <PricingItem
          icon={CloudServersIcon}
          label="Cloud Servers"
      >
        <StandardV3 />
      </PricingItem>
    </div>
  )
}

export default ServersPricingItems