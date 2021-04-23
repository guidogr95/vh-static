// Theme
import { calculatorStyles } from 'styles/theme'

const PricingItemWrapper = ({ label, description, children }) => {
  return (
    <>
      <div className="item__pricing-selection" >
        {label && <h5>{label}</h5>}
        {description && <p>{description}</p>}
        {children}
      </div>
      <style jsx>{`
        .item__pricing-selection :global(.pricing-selection__pricing-objects .pricing-input.multiple:not(:last-child)) {
          margin: ${calculatorStyles.multipleElementMargin};
        }
        p {
          margin: ${calculatorStyles.basicSubElementMargin};
          font-weight: 300;
        }
      `}</style>
    </>
  )
}

export default PricingItemWrapper