// Components
<<<<<<< HEAD
import PricingSection from 'components/Shared/PricingCalculator/PricingSection'
// Configs
import { publicPricing } from 'components/Shared/PricingCalculator/config/pricingCalculatorData'
=======
import ServersPricingItems from './ServersPricingItems'
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974

const PublicPricingCalculator = () => {

  return (
    <>
<<<<<<< HEAD
      <main className="public-calculator" >
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
      </main>
      <style jsx>{`
        .public-calculator :global(.pricing-section:not(:last-of-type)) {
          margin-bottom: 35px;
        }
=======
      <div className="public-calculator" >
        <ServersPricingItems />
      </div>
      <style jsx>{`
>>>>>>> 23fe49037215cc6e3f2890ab4a92e7b5b59a3974
      `}</style>
    </>
  )
}

export default PublicPricingCalculator