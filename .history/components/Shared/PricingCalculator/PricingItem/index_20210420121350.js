const PricingSection = ({ icon, label, children }) => {
  return (
    <>
      <div className="section" >
        <div className="section__icon-label" >
          <img src={icon} alt="pricing-icon" />
          {label && <label>{label}</label>}
        </div>
        <div className="section__pricing" >
          {children}
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