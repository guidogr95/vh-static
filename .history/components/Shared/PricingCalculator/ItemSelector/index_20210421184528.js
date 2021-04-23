// Components
import Select from 'components/Shared/Select'

const ItemSelector = ({ pricingTable, value, onClick }) => {
  return (
    <>
      <div className="item-selector" >
        {pricingTable.map((PricingItem, index) => {
          return (
            <Select key={index}/>
          )
        })}
      </div>
      <style jsx>{`
        .item-selector {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 25px 0;
        }
      `}</style>
    </>
  )
}

export default ItemSelector