const BaseLegend = ({ legendData, multiplier }) => {
  return (
    <>
      <div className="base-multiplier__base-legend" >
        <span className="base-legend__multiplier" >
          {multiplier > 1 && `${multiplier}X`}
        </span>
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
        .base-multiplier__base-legend {
          align-items: center;
        }
        .base-multiplier__base-legend ul li,
        .base-multiplier__base-legend ul,
        .base-multiplier__base-legend {
          display: flex;
        }
        .base-multiplier__base-legend ul li {
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }
        .base-multiplier__base-legend ul li .base-legend__label {
          font-size: 0.9em;
        }
        .base-multiplier__base-legend ul li .base-legend__icon {
          height: 25px;
          margin-right: 10px;
        }
        .base-multiplier__base-legend ul li img {
          height: 100%;
        }
      `}</style>
    </>
  )
}

export default BaseLegend