// Theme
import { calculatorStyles, colors } from 'styles/theme'

const PricingItemWrapper = ({ label, description, children }) => {
  return (
    <>
      <div className="item__pricing-selection" >
        {label && <h5>{label}</h5>}
        {description && <p>{description}</p>}
        {children}
      </div>
      <style jsx>{`
        .item__pricing-selection :global(.pricing-selection__pricing-objects .pricing-input.isMultiple:not(:last-child)) {
          margin: ${calculatorStyles.isMultipleElementMargin};
        }
        p {
          margin: ${calculatorStyles.basicSubElementMargin};
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        h5 {
          color: ${colors.textGray};
        }
      `}</style>
    </>
  )
}

export default PricingItemWrapper