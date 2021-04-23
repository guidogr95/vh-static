// Components
import RatePricingItem from 'components/Shared/PricingCalculator/PublicPricingCalculator/RatePricingItem'

const IPAddresses = () => {

  const pricingTable = [
    {
      label: 'Public IP Address',
      pricingData: {
        unit: 'IP Address',
        usdRate: 2.0832
      }
    }
  ]

  return (
    <RatePricingItem
      pricingTable={pricingTable}
      label="IP Addresses"
    />
  )
}

export default IPAddresses