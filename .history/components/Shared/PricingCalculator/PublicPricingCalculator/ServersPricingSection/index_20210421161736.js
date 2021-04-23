// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
import BaseMultiplierPricingItem from 'components/Shared/PricingCalculator/BaseMultiplierPricingItem'
import RatePricingItem from 'components/Shared/PricingCalculator/RatePricingItem'
// Assets
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'
// Configs
import {
  baseMultiplierPricingItems,
  ratePricingItems
} from 'components/Shared/PricingCalculator/config/pricingData'

const ServersPricingSection = () => {
  return (
    <div className="pricing-item-servers" >
      <PricingSection
          icon={CloudServersIcon}
          label="Cloud Servers"
      >
        {Object.values(baseMultiplierPricingItems).map(pricingItem => {
          return (
            <BaseMultiplierPricingItem
              key={pricingItem.label}
              pricingTable={pricingItem.pricingTable}
              legendData={pricingItem.legendData}
              label={pricingItem.label}
            />
          )
        })}
        {Object.values(ratePricingItems).map(pricingItem => {
          return (
            <RatePricingItem
              key={pricingItem.label}
              pricingTable={pricingItem.pricingTable}
              label={pricingItem.label}
            />
          )
        })}
      </PricingSection>
    </div>
  )
}

export default ServersPricingSection