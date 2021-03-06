// Components
import PricingSummaryBlock from 'components/Shared/PricingCalculator/PricingSummary/PricingSummaryBlock'

const PricingSummaryProduct = ({ title, titleIcon, summaryProductItems }) => {
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
          grid-template-columns: 80% 20%;
          align-items: center;
        }
        :global(.summary-block__body span) {
          margin: 5px 0;
          font-weight: 300;
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