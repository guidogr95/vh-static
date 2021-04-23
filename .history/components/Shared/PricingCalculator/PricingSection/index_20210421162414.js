const PricingSection = ({ icon, label, sectionPricingData }) => {
  return (
    <>
      <div className="section" >
        <div className="section__icon-label" >
          <img src={icon} alt="pricing-icon" />
          {label && <label>{label}</label>}
        </div>
        <div className="section__pricing" >
          {Object.entries(sectionPricingData).map(pricingData => {
            console.log(pricingData)
          })}
          {/* {Object.values(baseMultiplierPricingItems).map(pricingItem => {
            return (
              <BaseMultiplierPricingItem
                key={pricingItem.label}
                pricingTable={pricingItem.pricingTable}
                legendData={pricingItem.legendData}
                label={pricingItem.label}
              />
            )
          })}
          {Object.values(ratePricingItems).map(pricingItem => {
            return (
              <RatePricingItem
                key={pricingItem.label}
                pricingTable={pricingItem.pricingTable}
                label={pricingItem.label}
              />
            ) */}
          {/* })} */}
        </div>
      </div>
      <style jsx>{`
        .section {
          display: grid;
          grid-template-columns: 150px auto;
          column-gap: 30px;
        }
        .section__icon-label {
          width: 100%;
          padding: 0 15px;
          text-align: center;
        }
        .section__icon-label label {
          margin: 15px 0 0 0;
        }
        .section__icon img {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default PricingSection