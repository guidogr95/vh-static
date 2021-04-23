// Components
import BaseMultiplierPricingItem from 'components/Shared/PricingCalculator/PublicPricingCalculator/BaseMultiplierPricingItem'
// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'
import Storage from 'public/assets/media/icons/server.svg'

const StandardV3 = () => {

  const pricingTable = [
    {
      label: '',
      pricingIndex: [
        {
          baseMultiplier: 1,
          usdHourlyRate: 0.055
        },
        {
          baseMultiplier: 2,
          usdHourlyRate: 0.110
        },
        {
          baseMultiplier: 4,
          usdHourlyRate: 0.219
        },
        {
          baseMultiplier: 8,
          usdHourlyRate: 0.438
        },
        {
          baseMultiplier: 16,
          usdHourlyRate: 0.876
        },
        {
          baseMultiplier: 24,
          usdHourlyRate: 1.752
        },
        {
          baseMultiplier: 32,
          usdHourlyRate: 3.504
        },
        {
          baseMultiplier: 48,
          usdHourlyRate: 7.008
        }
      ]
    }
  ]

  const legendData = {
    features: [
      {
        icon: Cores,
        label: '2 Cores'
      },
      {
        icon: RAM,
        label: '8GB RAM'
      },
      {
        icon: Storage,
        label: '40GB Storage'
      }
    ]
  }

  return (
    <BaseMultiplierPricingItem
      pricingTable={pricingTable}
      legendData={legendData}
      label="Standard V3"
    />
  )
}

export default StandardV3