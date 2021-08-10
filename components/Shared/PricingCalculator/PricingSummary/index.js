import { useEffect, useRef } from 'react'
// Components
import PricingSummaryProduct from './PricingSummaryProduct'
import PricingSummaryTotal from './PricingSummaryTotal'
// Assets
import Processor from 'public/assets/media/icons/cpu-white.svg'
import Memory from 'public/assets/media/icons/ram-white.svg'
import Disk from 'public/assets/media/icons/hard-drive-white.svg'
// Theme
import { borderRadius, calculatorStyles, colors, gradients } from 'styles/theme'
// Utils
import { throttle } from 'utils/imports/packages'
import stickElementBetweenDivs from 'utils/stickElementBetweenDivs'
// Context
import { useSpringUtils } from 'context/springContext'
import { usePricingCalculator } from 'context/pricingCalculatorContext'

const PricingSummary = ({ calculatorRef }) => {
  const { pricingSummary, summaryProducts } = usePricingCalculator()
  const { useSpring, animated } = useSpringUtils()
  const summaryRef = useRef(null)
  const floorRef = useRef(null)
  const [styles, set] = useSpring(() => ({ transform: 'translateY(0px)' }))

  const scrollHandler = ({ height }) => {
    if (!summaryRef?.current || !floorRef?.current || !calculatorRef?.current) return
    stickElementBetweenDivs({
      height,
      topEl: calculatorRef.current,
      bottomEl: floorRef.current,
      targetEl: summaryRef.current,
      springApi: set
    })
  }

  useEffect(() => {
    if (!set) return
    const throttledScrollHandler = throttle(scrollHandler, 800)
    const calculatorObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        throttledScrollHandler({ height: entry.contentRect.height })
      })
    })
    window.addEventListener('scroll', throttledScrollHandler)
    calculatorObserver.observe(calculatorRef.current)
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
      calculatorObserver.unobserve(calculatorRef.current)
    }
  }, [set])

  return (
    <>
      <animated.aside
        className="pricing-calculator__pricing-summary"
        ref={summaryRef}
        style={styles}
      >
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
      </animated.aside>
      <div ref={floorRef} />
      <style jsx>{`
        :global(.pricing-calculator__pricing-summary) {
          width: 100%;
          background: ${gradients.lightDay};
          height: fit-content;
          height: max-content;
          height: -webkit-fill-available;
          border-radius: ${borderRadius};
          display: flex;
          padding: ${calculatorStyles.pricingSectionPadding};
          flex-direction: column;
          align-items: center;
          color: ${colors.whiteGray};
          transition: .5s ease-out all;
        }
        :global(.pricing-calculator__pricing-summary .pricing-summary__block:last-of-type) {
          margin-bottom: 0px;
        }
      `}</style>
    </>
  )
}

export default PricingSummary