// Theme
import { colors, mediumBorderRadius, shadows } from 'styles/theme'
// Components
import Button from 'react-bootstrap/Button'

const WESwiperCard = ({ Title, Content, Thumbnail }) => {
  const contentMaxLength = 569
  return (
    <>
      <div className="block__card" >
        <img src={Thumbnail} alt="book cover" />
        <div className="card__body" >
          <h4 className="mb-none" >
            {Title}
          </h4>
          <p className="fw-300 mt-small mb-small" >
            {Content.slice(0, contentMaxLength)}{Content.length > contentMaxLength && '...'}
          </p>
          <Button
            variant="brand"
          >
            DOWNLOAD
          </Button>
        </div>
      </div>
      <style jsx>{`
        .block__card {
          border-radius: ${mediumBorderRadius};
          box-shadow: ${shadows.cardRegular};
          padding: 30px;
          display: grid;
          grid-template-columns: 100px auto;
          column-gap: 30px;
          height: 100%;
        }
        .block__card h4 {
          color: ${colors.blueGray};
        }
        .block__card img {
          width: 100%;
        }
        .card__body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: inherit;
        }
        .card__body p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          -webkit-line-clamp: 8;
          font-size: 1rem;
          line-height: 1.6rem;
          max-height: 12.4rem;
          min-height: 12.4rem;
        }
      `}</style>
    </>
  )
}

export default WESwiperCard