const PricingItem = ({ icon }) => {
  return (
    <>
      <div className="item" >
        <div className="item__icon" >
          <img src={icon} alt="pricing-icon" />
        </div>
        <div className="item__pricing" >

        </div>
      </div>
      <style jsx>{`
        .item {
          display: grid;
          grid-template-columns: 100px auto;
          column-gap: 30px;
        }

      `}</style>
    </>
  )
}

export default PricingItem