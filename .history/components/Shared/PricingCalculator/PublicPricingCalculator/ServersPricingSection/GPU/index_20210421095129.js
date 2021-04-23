// Components
import BaseMultiplierPricingItem from 'components/Shared/PricingCalculator/PublicPricingCalculator/BaseMultiplierPricingItem'
// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'
import gpu from 'public/assets/media/icons/gpu.svg'
import disk from 'public/assets/media/icons/hard-drive.svg'

const GPU = () => {

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
    <BaseMultiplierPricingItem
      pricingTable={pricingTable}
      legendData={legendData}
      label="GPU"
    />
  )
}

export default GPU