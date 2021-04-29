// Components
import PricingSummaryProduct from './PricingSummaryProduct'
import PricingSummaryTotal from './PricingSummaryTotal'
// Assets
import Processor from 'public/assets/media/icons/cpu-white.svg'
import Memory from 'public/assets/media/icons/ram-white.svg'
import Disk from 'public/assets/media/icons/hard-drive-white.svg'
// Theme
import { borderRadius, calculatorStyles, colors, gradients } from 'styles/theme'
// Context
import { usePricingCalculator } from 'context/pricingCalculatorContext'

const PricingSummary = () => {

  const { pricingSummary, summaryProducts } = usePricingCalculator()

  return (
    <>
      <aside className="pricing-calculator__pricing-summary" >
        <PricingSummaryTotal
          pricingSummary={pricingSummary}
        />
        { summaryProducts &&
          <>
            <PricingSummaryProduct
              title="Processor"
              titleIcon={Processor}
              summaryProductItems={summaryProducts.processor}
            />
            <PricingSummaryProduct
              title="Memory"
              titleIcon={Memory}
              summaryProductItems={summaryProducts.memory}
            />
            <PricingSummaryProduct
              title="Storage"
              titleIcon={Disk}
              summaryProductItems={summaryProducts.storage}
            />
          </>
        }
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