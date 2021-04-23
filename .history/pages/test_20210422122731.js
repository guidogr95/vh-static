import PricingCalculator from 'components/Shared/PricingCalculator'
import { desktopMaxWidth } from 'styles/theme'

const test = () => {
  return (
    <>
      <div>
        {/* <RangeSlider /> */}
        <PricingCalculator />
      </div>
      <style jsx>{`
        div {
          margin: auto;
          max-width: 500px;
          width: 100%;
          padding: 20px;
          margin-top: 100px;
          max-width: ${newDesktopMaxWidth};
        }
      `}</style>
    </>
  )
}

export default test