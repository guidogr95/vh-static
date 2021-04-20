const PricingItem = ({ icon }) => {
  return (
    <>
      <div className="item" >
        <div className="item__icon" >
        </div>
        <div className="item__pricing" >

        </div>
      </div>
      <style jsx>{`
        .item {
          display: grid;
          grid-template-columns: 200px auto;
          column-gap: 30px;
        }
        .item__icon {
          background-image: url(${icon});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          width: 100%;
          padding-bottom: 20%;
        }
      `}</style>
    </>
  )
}

export default PricingItem