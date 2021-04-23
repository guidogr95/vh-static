// Components
import PricingItem from 'components/Shared/PricingCalculator/PublicPricingCalculator/PricingItem'
// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'
import Storage from 'public/assets/media/icons/server.svg'

const StandardV3 = () => {

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
    <PricingItem
      indexValues={indexValues}
      legendData={legendData}
    />
  )
}

export default StandardV3