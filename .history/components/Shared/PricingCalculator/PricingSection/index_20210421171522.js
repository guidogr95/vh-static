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
          {Object.entries(sectionPricingData).map(pricingData => {
            console.log(pricingData)
            // switch (pricingData[0]) {
            //   case 'baseMultiplierPricingItems':
            //     return (
            //       <BaseMultiplierPricingItem
            //         key={pricingItem.label}
            //         pricingTable={pricingItem.pricingTable}
            //         legendData={pricingItem.legendData}
            //         label={pricingItem.label}
            //       />
            //     )
            //   case 'ratePricingItems':
            //     return (
            //       <RatePricingItem
            //         key={pricingItem.label}
            //         pricingTable={pricingItem.pricingTable}
            //         label={pricingItem.label}
            //       />
            //     )
            //   default:
            //     return null
            // }
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
      `}</style>
    </>
  )
}

export default PricingSection