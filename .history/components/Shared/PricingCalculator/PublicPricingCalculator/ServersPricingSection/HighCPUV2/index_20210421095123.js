// Components
import BaseMultiplierPricingItem from 'components/Shared/PricingCalculator/PublicPricingCalculator/BaseMultiplierPricingItem'
// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'

const HighCPUV2 = () => {

  const pricingTable = [
    {
      label: 'Intel x86',
      pricingIndex: [
        {
          baseMultiplier: 1,
          usdHourlyRate: 0.035
        },
        {
          baseMultiplier: 2,
          usdHourlyRate: 0.07
        },
        {
          baseMultiplier: 4,
          usdHourlyRate: 0.14
        },
        {
          baseMultiplier: 8,
          usdHourlyRate: 0.28
        },
        {
          baseMultiplier: 16,
          usdHourlyRate: 0.56
        },
        {
          baseMultiplier: 32,
          usdHourlyRate: 1.12
        },
        {
          baseMultiplier: 64,
          usdHourlyRate: 2.24
        }
      ]
    },
    {
      label: 'Arm 64-bit',
      pricingIndex: [
        {
          baseMultiplier: 1,
          usdHourlyRate: 0.02975
        },
        {
          baseMultiplier: 2,
          usdHourlyRate: 0.0595
        },
        {
          baseMultiplier: 4,
          usdHourlyRate: 0.119
        },
        {
          baseMultiplier: 8,
          usdHourlyRate: 0.238
        },
        {
          baseMultiplier: 16,
          usdHourlyRate: 0.476
        },
        {
          baseMultiplier: 32,
          usdHourlyRate: 0.952
        },
        {
          baseMultiplier: 64,
          usdHourlyRate: 1.904
        }
      ]
    }
  ]

  const legendData = {
    features: [
      {
        icon: Cores,
        label: '1 Cores'
      },
      {
        icon: RAM,
        label: '1GB RAM'
      }
    ]
  }

  return (
    <BaseMultiplierPricingItem
      pricingTable={pricingTable}
      legendData={legendData}
      label="High CPU V2"
    />
  )
}

export default HighCPUV2