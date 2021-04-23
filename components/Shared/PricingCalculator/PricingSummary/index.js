// Components
import PricingSummaryProduct from './PricingSummaryProduct'
import PricingSummaryTotal from './PricingSummaryTotal'
// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
// Theme
import { borderRadius, calculatorStyles, colors, gradients } from 'styles/theme'

const PricingSummary = () => {
  return (
    <>
      <aside className="pricing-calculator__pricing-summary" >
        <PricingSummaryTotal />
        <PricingSummaryProduct
          title="Processor"
          titleIcon={Cores}
          feature="Cores"
        />
      </aside>
      <style jsx>{`
        .pricing-calculator__pricing-summary {
          width: 100%;
          background: ${gradients.lightDay};
          max-height: 600px;
          border-radius: ${borderRadius};
          padding: ${calculatorStyles.pricingSectionPadding};
          display: flex;
          flex-direction: column;
          align-items: center;
          color: ${colors.whiteGray};
        }
      `}</style>
    </>
  )
}

export default PricingSummary