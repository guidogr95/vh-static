// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'

const PricingItem = ({ indexValues, legendData, label }) => {

  return (
    <>
      <div className="item__pricing-selection" >
        {label && <h6>{label}</h6>}
        <BaseMultiplierPricing
          legendData={legendData}
          indexValues={indexValues}
          max={8}
          min={1}
          label={label}
        />
      </div>
      <style jsx>{`
        .item__pricing-selection {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export default PricingItem