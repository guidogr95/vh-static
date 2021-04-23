const BaseLegend = ({ legendData }) => {
  return (
    <>
      <div className="base-multiplier__base-legend" >
        {legendData?.features &&
          <ul>
            {legendData.features.map(feature => {
              return (
                <li key={feature.label} >
                  <span className="base-legend__icon" >
                    <img alt={feature.label} src={feature.icon} />
                  </span>
                  <span className="base-legend__label" >
                    {feature.label}
                  </span>
                </li>
              )
            })}
          </ul>
        }
      </div>
      <style jsx>{`
        .base-multiplier__base-legend ul {
          list-style: none;
        }
        .base-multiplier__base-legend ul li,
        .base-multiplier__base-legend ul {
          display: flex;
        }
        .base-multiplier__base-legend ul li {
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default BaseLegend