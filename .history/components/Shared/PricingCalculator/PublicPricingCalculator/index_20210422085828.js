// Components
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
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
              sectionPricingData={pricingSection.sectionPricingData}
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