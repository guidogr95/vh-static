const PricingItem = ({ icon, label }) => {
  return (
    <>
      <div className="item" >
        <div className="item__icon-label" >
          <img src={icon} alt="pricing-icon" />
          {label && <label>{label}</label>}
        </div>
        <div className="item__pricing" >

        </div>
      </div>
      <style jsx>{`
        .item {
          display: grid;
          grid-template-columns: 150px auto;
          column-gap: 30px;
        }
        .item__icon-label {
          width: 100%;
          padding: 0 15px;
          text-align: center;
        }
        .item__icon-label label {
          margin: 15px 0 0 0;
        }
        .item__icon img {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default PricingItem