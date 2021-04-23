// Components
import RatePricingItem from 'components/Shared/PricingCalculator/PublicPricingCalculator/RatePricingItem'

const DataTransfer = () => {

  const pricingTable = [
    {
      label: 'Public Network',
      pricingData: {
        unit: 'GB',
        usdRate: 0.10
      }
    },
    {
      label: 'Private Network',
      pricingData: {
        unit: 'GB',
        usdRate: 0
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

export default DataTransfer