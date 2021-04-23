// Components
import BaseMultiplierPricingItem from 'components/Shared/PricingCalculator/BaseMultiplierPricingItem'
import RatePricingItem from 'components/Shared/PricingCalculator/RatePricingItem'

const PricingSection = ({ icon, label, sectionPricingData }) => {
  return (
    <>
      <div className="pricing-section" >
        <div className="pricing-section__icon-label" >
          <img src={icon} alt="pricing-icon" />
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
          grid-template-columns: 150px auto;
          column-gap: 30px;
        }
        .pricing-section__icon-label {
          width: 100%;
          padding: 0 15px;
          text-align: center;
        }
        .pricing-section__icon-label label {
          margin: 15px 0 0 0;
        }
        .pricing-section__icon img {
          width: 100%;
        }
        .pricing-section__pricing :global(.item__pricing-selection) {
          display: flex;
          position: relative;
          flex-direction: column;
          margin-bottom: 50px;
        }
        .pricing-section__pricing :global(h5) {
          margin-bottom: 25px;
        }
      `}</style>
    </>
  )
}

export default PricingSection