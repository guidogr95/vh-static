// Theme
import { borderRadius, gradients } from 'styles/theme'

const PricingSummary = () => {
  return (
    <>
      <aside className="pricing-calculator__pricing-summary" >
        
      </aside>
      <style jsx>{`
        .pricing-calculator__pricing-summary {
          width: 100%;
          background: ${gradients.lightDay};
          max-height: 600px;
          border-radius: ${borderRadius};
        }
      `}</style>
    </>
  )
}

export default PricingSummary