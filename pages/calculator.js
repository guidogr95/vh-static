import PricingCalculator from 'components/Shared/PricingCalculator'
import { newDesktopMaxWidth } from 'styles/theme'

const calculator = () => {
  return (
    <>
      <div>
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

export default calculator