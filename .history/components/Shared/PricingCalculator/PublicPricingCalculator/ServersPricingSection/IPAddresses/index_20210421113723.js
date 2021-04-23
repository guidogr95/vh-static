// Components
import RatePricingItem from 'components/Shared/PricingCalculator/PublicPricingCalculator/RatePricingItem'

const IPAddresses = () => {

  const pricingTable = [
    {
      label: 'Public IP Address',
      pricingData: {
        unit: 'IP Address',
        usdRate: 2.00
      }
    }
  ]

  return (
    <RatePricingItem
      pricingTable={pricingTable}
      label="Data Transfer"
    />
  )
}

export default IPAddresses