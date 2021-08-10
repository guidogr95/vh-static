import Link from 'next/link'
// Utils
import strapiDateToDateString from 'utils/strapiDateToDateString'
import dateTransform from 'utils/dateTransform'
// Assets
import SquareArrow from 'public/assets/media/icons/squarearrow.svg'
// Theme
import { mediumBorderRadius, colors, shadows, breakpoints } from 'styles/theme'

const BlogSwiperCard = (props) => {
  const { Title, TextContent, Thumbnail, Publication, Slug } = props
  const contentMaxLength = 200
  return (
    <>
      <div className="block__card" >
        <Link prefetch={false} href={Slug}>
            <a></a>
        </Link>
        <div className="card__thumbnail"/>
        <div className="card__body" >
          <div className="card__body-header">
            <div className="header__text" >
              {Publication &&
                <time className="fw-400 mb-xsmall" >
                  {dateTransform({ date: strapiDateToDateString(Publication), transformType: 'month day, year' })}
                </time>
              }
              {Title &&
                <p className="mb-none" >{Title}</p>
              }
            </div>
            <div className="header__arrow" >
              <img src={SquareArrow} alt="link arrow" />
            </div>
          </div>
          <p className="card__description fw-300 mb-none mt-small" >
            {TextContent.slice(0, contentMaxLength)}{TextContent.length > contentMaxLength && '...'}
          </p>
        </div>
      </div>
      <style jsx>{`
        .block__card {
          display: flex;
          flex-direction: column;
          border-radius: ${mediumBorderRadius};
          overflow: hidden;
          box-shadow: ${shadows.cardRegular};
          position: relative;
          transition: all .3s ease-in-out;
          height: 100%;
        }
        .block__card:hover {
          box-shadow: ${shadows.cardRegularLift};
          transform: translate3d(0px, -1px, 0px);
        }
        .block__card .header__arrow img {
          width: 100%;
          opacity: 0.2;
          transition: all .3s ease-out;
        }
        .block__card:hover .header__arrow img {
          width: 100%;
          opacity: 1;
        }
        .block__card a {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
        }
        .card__thumbnail {
          padding-bottom: 55%;
          width: 100%;
          background: url(${Thumbnail?.url});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .card__body {
          padding: 40px;
          display: flex;
          flex-direction: column;
          height: inherit;
          height: -webkit-fill-available;
          justify-content: space-between;
        }
        .card__body-header {
          display: grid;
          grid-template-columns: auto 40px;
          column-gap: 40px;
        }
        .header__text {
          display: flex;
          flex-direction: column;
        }
        .header__text p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          -webkit-line-clamp: 3;
          font-size: 1rem;
          line-height: 1.4rem;
          max-height: 4rem;
          min-height: 2.8rem;
          font-weight: bold;
          color: ${colors.blackOne};
        }
        time {
          color: ${colors.purple};
          letter-spacing: 0.02em;
          font-size: 0.9em;
        }
        .card__description {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          -webkit-line-clamp: 3;
          font-size: 1rem;
          line-height: 1.6rem;
          max-height: 4.8rem;
          min-height: 4.8rem;
          color: ${colors.blackTwo};
        }
        @media screen and (max-width: ${breakpoints.largeDesktop}) {
          .card__body-header {
            column-gap: 20px;
          }
        }
        @media screen and (max-width: ${breakpoints.largeDesktop}) {
          .card__body {
            padding: 20px;
          }
        }
      `}</style>
    </>
  )
}

export default BlogSwiperCard