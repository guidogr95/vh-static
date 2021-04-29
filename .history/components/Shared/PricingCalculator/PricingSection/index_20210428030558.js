import { useRef } from 'react'
// Components
import BaseMultiplierPricingItem from 'components/Shared/PricingCalculator/BaseMultiplierPricingItem'
import RatePricingItem from 'components/Shared/PricingCalculator/RatePricingItem'
// Theme
import { borderRadius, calculatorStyles, colors, shadows, gradients } from 'styles/theme'

const PricingSection = ({ icon, label, sectionPricingData }) => {
  const bodyRef = useRef(null)

  const handleAccordion = () => {
    bodyRef.current.classList.toggle('active')
    if (bodyRef.current.classList.contains('active')) {
        bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`
    } else {
        bodyRef.current.style.maxHeight = '0px'
    }
  }
  return (
    <>
      <div className="pricing-section" >
        <div className="pricing-section__icon-label" onClick={handleAccordion} >
          <img src={icon} className="pricing-icon" alt={label}/>
          {label && <h5>{label}</h5>}
        </div>
        <article className="pricing-section__pricing" ref={bodyRef} >
          <div className="pricing-section__pricing-wrapper" >
            {Object.values(sectionPricingData).map(pricingItem => {
              switch (pricingItem.type) {
                case 'baseMultiplier':
                  return (
                    <BaseMultiplierPricingItem
                      key={pricingItem.label}
                      pricingTable={pricingItem.pricingTable}
                      legendData={pricingItem.legendData}
                      description={pricingItem.description}
                      label={pricingItem.label}
                      id={pricingItem.id}
                    />
                  )
                case 'ratePricing':
                  return (
                    <RatePricingItem
                      key={pricingItem.label}
                      pricingTable={pricingItem.pricingTable}
                      label={pricingItem.label}
                      multiple={pricingItem.multiple}
                      description={pricingItem.description}
                      placeholder={pricingItem.placeholderLabel}
                      id={pricingItem.id}
                    />
                  )
                default:
                  return null
              }
            })}
          </div>
        </article>
      </div>
      <style jsx>{`
        .pricing-section {
          display: flex;
          flex-direction: column;
          /* margin: ${calculatorStyles.pricingSectionMargin}; */
          box-shadow: ${shadows.white};
          /* padding: ${calculatorStyles.pricingSectionPadding}; */
          border-radius: ${borderRadius};
          overflow: hidden;
        }
        .pricing-section__icon-label {
          width: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          height: 130px;
          padding: ${calculatorStyles.pricingSectionHeaderPadding};
          /* background: ${gradients.lightDay}; */
          cursor: pointer;
        }
        .pricing-section__icon-label h5 {
          margin: 0 0 0 15px;
          font-weight: 300;
          letter-spacing: 0.02em;
          color: ${colors.white};
        }
        .pricing-section__icon-label img {
          height: 100%;
          background: white;
          border-radius: 50%;
          box-shadow: ${shadows.day};
        }
        .pricing-section__pricing {
          max-height: 0;
          transition: 1000ms ease max-height;
        }
        .pricing-section__pricing-wrapper {
          padding: ${calculatorStyles.pricingSectionPadding};
        }
        .pricing-section__pricing :global(.item__pricing-selection) {
          display: flex;
          position: relative;
          flex-direction: column;
        }
        .pricing-section__pricing :global(.item__pricing-selection:not(:first-of-type)) {
          margin: ${calculatorStyles.pricingItemMargin};
        }
        .pricing-section__pricing :global(h5) {
          margin: ${calculatorStyles.basicSubElementMargin};
        }
        .pricing-section__pricing :global(.item__pricing-selection:not(:last-of-type):after) {
          content: '';
          height: 2px;
          width: 100%;
          background: ${colors.lightGray}25;
          position: absolute;
          bottom: -35px;
          right: 0;
          border-radius: 6px;
        }
      `}</style>
    </>
  )
}

export default PricingSection