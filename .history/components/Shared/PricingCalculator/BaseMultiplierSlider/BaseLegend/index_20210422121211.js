// Utils
import calculateMonthlyPricing from 'utils/calculateMonthlyPricing'

const BaseLegend = ({ legendData, sliderValue, indexValues, pricingData }) => {

  const multiplier = indexValues ? indexValues[sliderValue] : sliderValue

  const monthlyPricing = calculateMonthlyPricing({
    pricingData,
    multiplier,
    type: 'baseMultiplier'
  })

  return (
    <>
      <div className="base-multiplier__base-legend" >
        <span className="monthly-pricing" >${monthlyPricing}/mo</span>
        <div className="base-legend__multiplier" >
          <span>{multiplier}</span>
          <span className="multiplier-symbol" >X</span>
        </div>
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
        .base-legend__multiplier {
          font-size: 1.4em;
          min-width: 58px;
          min-height: 30px;
        }
        .monthly-pricing {
          position: absolute;
          top: 0;
          right: 0;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        .multiplier-symbol {
          margin: 0 10px;
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