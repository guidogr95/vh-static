// Components
import BaseMultiplierPricing from 'components/Shared/PricingCalculator/BaseMultiplierPricing'

const PricingItem = ({ legendData, label, pricingTable }) => {

  return (
    <>
      <div className="item__pricing-selection" >
        {label && <h5>{label}</h5>}
        <BaseMultiplierPricing
          legendData={legendData}
          pciringTable={pricingTable}
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
        h5 {
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}

export default PricingItem