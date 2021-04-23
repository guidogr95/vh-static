// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'
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
        label: 'Cores'
      },
      {
        icon: RAM,
        label: 'RAM'
      },
      {
        icon: Storage,
        label: 'GB'
      }
    ]
  }

  return (
    <div className="item__pricing-selection" >
      <BaseMultiplierPricing
        legendData={legendData}
        indexValues={indexValues}
        max={8}
        min={1}
      />
    </div>
  )
}

export default StandardV3