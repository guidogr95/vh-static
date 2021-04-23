// Components
import PricingItem from 'components/Shared/PricingCalculator/PricingItem'
import PricingSubItem from './PricingSubItem'
// Assets
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'

const ServersPricingItems = () => {
  return (
    <div className="pricing-item-servers" >
      <PricingItem
          icon={CloudServersIcon}
          label="Cloud Servers"
      >
        <PricingSubItem
      
        />
      </PricingItem>
    </div>
  )
}

export default ServersPricingItems