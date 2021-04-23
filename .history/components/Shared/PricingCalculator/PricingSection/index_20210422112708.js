// Components
import BaseMultiplierPricingItem from 'components/Shared/PricingCalculator/BaseMultiplierPricingItem'
import RatePricingItem from 'components/Shared/PricingCalculator/RatePricingItem'
// Theme
import { borderRadius, calculatorStyles, colors, shadows } from 'styles/theme'

const PricingSection = ({ icon, label, sectionPricingData }) => {
  return (
    <>
      <div className="pricing-section" >
        <div className="pricing-section__icon-label" >
          <img src={icon} className="pricing-icon" alt={label} />
          {label && <label>{label}</label>}
        </div>
        <div className="pricing-section__pricing" >
          {Object.values(sectionPricingData).map(pricingItem => {
            switch (pricingItem.type) {
              case 'baseMultiplier':
                return (
                  <BaseMultiplierPricingItem
                    key={pricingItem.label}
                    pricingTable={pricingItem.pricingTable}
                    legendData={pricingItem.legendData}
                    description={pricingItem.description}
                    label={pricingItem.label}
                  />
                )
              case 'ratePricing':
                return (
                  <RatePricingItem
                    key={pricingItem.label}
                    pricingTable={pricingItem.pricingTable}
                    label={pricingItem.label}
                    multiple={pricingItem.multiple}
                    description={pricingItem.description}
                    placeholder={pricingItem.placeholder}
                  />
                )
              default:
                return null
            }
          })}
        </div>
      </div>
      <style jsx>{`
        .pricing-section {
          display: grid;
          grid-template-columns: 110px auto;
          column-gap: 40px;
          margin: ${calculatorStyles.pricingSectionMargin};
          box-shadow: ${shadows.input};
          padding: ${calculatorStyles.pricingSectionPadding};
          border-radius: ${borderRadius};
        }
        .pricing-section__icon-label {
          width: 100%;
          text-align: center;
        }
        .pricing-section__icon-label label {
          margin: 15px 0 0 0;
        }
        .pricing-section__icon-label img {
          width: 100%;
        }
        .pricing-section__pricing :global(.item__pricing-selection) {
          display: flex;
          position: relative;
          flex-direction: column;
        }
        .pricing-section__pricing :global(.item__pricing-selection:not(:first-of-type)) {
          margin: ${calculatorStyles.pricingItemMargin};
        }
        .pricing-section__pricing :global(h5) {
          margin: ${calculatorStyles.basicSubElementMargin};
        }
        .pricing-section__pricing :global(.item__pricing-selection:not(:last-of-type):after) {
          content: '';
          height: 2px;
          width: 100%;
          background: ${colors.lightGray}25;
          position: absolute;
          bottom: -25px;
          right: 0;
          border-radius: 6px;
        }
      `}</style>
    </>
  )
}

export default PricingSection