// Components
import PricingItem from 'components/Shared/PricingCalculator/PublicPricingCalculator/PricingItem'
// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'
import gpu from 'public/assets/media/icons/gpu.svg'
import disk from 'public/assets/media/icons/hard-drive.svg'

const GPU = () => {

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
      label: '',
      pricingIndex: [
        {
          baseMultiplier: 1,
          usdHourlyRate: 0.80
        },
        {
          baseMultiplier: 2,
          usdHourlyRate: 1.60
        },
        {
          baseMultiplier: 4,
          usdHourlyRate: 3.20
        },
        {
          baseMultiplier: 8,
          usdHourlyRate: 6.40
        }
      ]
    }
  ]

  const legendData = {
    features: [
      {
        icon: gpu,
        label: 'K80'
      },
      {
        icon: Cores,
        label: '6 Cores'
      },
      {
        icon: RAM,
        label: '60GB RAM'
      },
      {
        icon: disk,
        label: '255GB'
      }
    ]
  }

  return (
    <PricingItem
      indexValues={indexValues}
      pricingTable={pricingTable}
      legendData={legendData}
      label="GPU"
    />
  )
}

export default GPU