const BaseLegend = ({ legendData }) => {
  return (
    <div className="base-multiplier__base-legend" >
      {legendData?.features && legendData.features.map(feature => {
        return (
          <p key={feature.label} >{feature.label}</p>
        )
      })}
    </div>
  )
}

export default BaseLegend