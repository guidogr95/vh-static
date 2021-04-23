// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
// Assets
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'
// Configs
import { publicPricing } from 'components/Shared/PricingCalculator/config/pricingCalculatorData'

const PublicPricingCalculator = () => {

  return (
    <>
      <div className="public-calculator" >
        {Object.values(publicPricing).map(pricingSection => {
          return (
            <PricingSection
              key={pricingSection.label}
              label={pricingSection.label}
              icon={pricingSection.icon}
              sectionPricingData={pricingSection.pricingData}
            />
          )
        })}
      </div>
      <style jsx>{`
      `}</style>
    </>
  )
}

export default PublicPricingCalculator