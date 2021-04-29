// Components
import PricingSummaryBlock from 'components/Shared/PricingCalculator/PricingSummary/PricingSummaryBlock'

const PricingSummaryProduct = ({ title, titleIcon, summaryProductItems }) => {
  console.log(summaryProductItems)
  return (
    <>
      <PricingSummaryBlock
        title={title}
        titleIcon={titleIcon}
      >
        {summaryProductItems.map(summaryProductItem => {
          return (
            <div
              key={summaryProductItem.type}
              className="summary-block__body"
            >
              <span>{summaryProductItem.type}</span>
              <span>{summaryProductItem.value}{summaryProductItem.unit}</span>
            </div>
          )
        })}
      </PricingSummaryBlock>
      <style jsx>{`
        :global(.summary-block__body) {
          width: 100%;
          display: grid;
          grid-template-columns: 75% 25%;
          align-items: center;
        }
        :global(.summary-block__body span:first-of-type) {
          text-align: left;
        }
        :global(.summary-block__body span:last-of-type) {
          text-align: right;
        }
      `}</style>
    </>
  )
}

export default PricingSummaryProduct