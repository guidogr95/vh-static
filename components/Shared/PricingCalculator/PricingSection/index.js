import { useRef } from 'react'
// Components
import BaseMultiplierPricingItems from 'components/Shared/PricingCalculator/BaseMultiplierPricingItems'
import RatePricingItem from 'components/Shared/PricingCalculator/RatePricingItem'
// Theme
import { borderRadius, calculatorStyles, colors, shadows } from 'styles/theme'
// Assets
import { FaMinus, FaPlus } from 'react-icons/fa'

const PricingSection = ({ icon, label, sectionPricingData }) => {
  const bodyRef = useRef(null)
  const headerRef = useRef(null)

  const handleAccordion = ({ forceResize }) => {
    if (!forceResize) {
      bodyRef.current.classList.toggle('active')
      headerRef.current.classList.toggle('active')
      if (bodyRef.current.classList.contains('active')) {
          bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`
      } else {
          bodyRef.current.style.maxHeight = '0px'
      }
    } else {
      if (!bodyRef.current.classList.contains('active')) return
      bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`
    }
  }
  return (
    <>
      <div className="pricing-section" >
        <div className="pricing-section__icon-label" ref={headerRef} onClick={handleAccordion} >
          <div className="accordion-label__label" >
            <img src={icon} className="pricing-icon" alt={label}/>
            {label && <h5>{label}</h5>}
          </div>

          <div className="accordion-label__btn" >
            <div className="btn-wrapper" >
              <FaMinus className="opened" />
              <FaPlus className="closed" />
            </div>
          </div>
        </div>
        <article className="pricing-section__pricing" ref={bodyRef} >
          <div className="pricing-section__pricing-wrapper" >
            {Object.values(sectionPricingData).map(pricingItem => {
              switch (pricingItem.type) {
                case 'baseMultiplier':
                  return (
                    <BaseMultiplierPricingItems
                      key={pricingItem.label}
                      pricingTable={pricingItem.pricingTable}
                      legendData={pricingItem.legendData}
                      description={pricingItem.description}
                      label={pricingItem.label}
                      id={pricingItem.id}
                      isMultiple={pricingItem.isMultiple}
                      handleAccordion={handleAccordion}
                    />
                  )
                case 'ratePricing':
                  return (
                    <RatePricingItem
                      key={pricingItem.label}
                      pricingTable={pricingItem.pricingTable}
                      label={pricingItem.label}
                      isMultiple={pricingItem.isMultiple}
                      description={pricingItem.description}
                      placeholder={pricingItem.placeholderLabel}
                      id={pricingItem.id}
                      handleAccordion={handleAccordion}
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
          box-shadow: ${shadows.white};
          border-radius: ${borderRadius};
          overflow: hidden;
        }
        .pricing-section__icon-label {
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 130px;
          padding: ${calculatorStyles.pricingSectionHeaderPadding};
          background: ${colors.lightWhite};
          cursor: pointer;
        }
        .accordion-label__btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .accordion-label__btn .btn-wrapper {
          height: 20px;
          width: 20px;
        }
        .accordion-label__btn :global(svg) {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          color: ${colors.day};
          transition: .3s ease-out all;
        }
        .accordion-label__label {
          display: flex;
          height: 100%;
          align-items: center;
        }
        .pricing-section__icon-label .accordion-label__btn :global(.opened) {
          transform: rotate(-90deg);
          opacity: 0;
        }
        .pricing-section__icon-label.active .accordion-label__btn :global(.opened) {
          transform: rotate(0deg);
          opacity: 1;
        }
        .pricing-section__icon-label.active .accordion-label__btn :global(.closed) {
          transform: rotate(90deg) scale(0.5);
          opacity: 0;
        }
        .pricing-section__icon-label h5 {
          margin: 0 0 0 15px;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        .pricing-section__icon-label img {
          height: 100%;
          background: white;
          border-radius: 50%;
        }
        .pricing-section__pricing {
          max-height: 0;
          transition: 1000ms ease max-height;
          background: ${colors.dayLight}15;
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