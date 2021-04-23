// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'
// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'
import Storage from 'public/assets/media/icons/server.svg'

const PricingItem = ({ indexValues, legendData }) => {

  // const indexValues = 

  // const legendData = {
  //   features: [
  //     {
  //       icon: Cores,
  //       label: '2 Cores'
  //     },
  //     {
  //       icon: RAM,
  //       label: '8GB RAM'
  //     },
  //     {
  //       icon: Storage,
  //       label: '40GB Storage'
  //     }
  //   ]
  // }

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

export default PricingItem