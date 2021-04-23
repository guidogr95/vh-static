// Components
import BaseMultiplierPricingItem from 'components/Shared/PricingCalculator/PublicPricingCalculator/BaseMultiplierPricingItem'
// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'

const DataTransfer = () => {

  const indexValues = {
    1: 1,
    2: 2,
    3: 4,
    4: 8,
    5: 16,
    6: 24,
    7: 32,
    8: 48
  }

  const pricingTable = [
    {
      label: 'Intel x86',
      pricingIndex: [
        {
          baseMultiplier: 1,
          usdHourlyRate: 0.045
        },
        {
          baseMultiplier: 2,
          usdHourlyRate: 0.09
        },
        {
          baseMultiplier: 4,
          usdHourlyRate: 0.18
        },
        {
          baseMultiplier: 8,
          usdHourlyRate: 0.36
        },
        {
          baseMultiplier: 16,
          usdHourlyRate: 0.72
        }
      ]
    },
    {
      label: 'Arm 64-bit',
      pricingIndex: [
        {
          baseMultiplier: 1,
          usdHourlyRate: 0.03825
        },
        {
          baseMultiplier: 2,
          usdHourlyRate: 0.0765
        },
        {
          baseMultiplier: 4,
          usdHourlyRate: 0.153
        },
        {
          baseMultiplier: 8,
          usdHourlyRate: 0.306
        },
        {
          baseMultiplier: 16,
          usdHourlyRate: 0.612
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
        label: '4GB RAM'
      }
    ]
  }

  return (
    <BaseMultiplierPricingItem
      indexValues={indexValues}
      pricingTable={pricingTable}
      legendData={legendData}
      label="Standard V2"
    />
  )
}

export default DataTransfer