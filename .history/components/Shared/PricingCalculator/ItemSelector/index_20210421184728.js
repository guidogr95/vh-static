// Components
import Select from 'components/Shared/Select'

const ItemSelector = ({ pricingTable, value, onClick }) => {
  return (
    <>
      <div className="item-selector" >
        <Select key={index}>
          {pricingTable.map((PricingItem, index) => {
            console.log(PricingItem)
            return (
              <option key={1} >
                
              </option>
            )
          })}
        </Select>
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