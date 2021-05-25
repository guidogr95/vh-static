// Theme
import { colors, mediumBorderRadius } from 'styles/theme'

const BioPost = ({ date, title, description, thumbnail, slug }) => {
  const descriptionMaxLength = 163
  return (
    <>
      <article>
        <a href={slug} target="_blank" rel="noopener noreferrer" >
          <div className="thumbnail-ellipsis" />
          <div className="thumbnail-img" />
          <time>{date}</time>
          <h6>{title}</h6>
          <div className="description" >
            {description.slice(0, descriptionMaxLength)}{description.length > descriptionMaxLength && '...'}
          </div>
        </a>
      </article>
      <style jsx>{`
        article {
          border-radius: ${mediumBorderRadius};
          background: ${colors.lightWhite};
          box-shadow: 0px 21px 43px rgba(0, 0, 0, 0.12);
          height: 267px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px 24px;
          position: relative;
          overflow: hidden;
        }
        .thumbnail-img {
          content: '';
          background: url(${thumbnail});
          z-index: 2;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .thumbnail-ellipsis,
        .thumbnail-img {
          position: absolute;
          width: 148px;
          height: 148px;
          right: -20px;
          top: -18px;
          border-radius: 50%;
        }
        .thumbnail-ellipsis {
          background: ${colors.lighterPurple};
          z-index: 1;
        }
        h6 {
          margin-bottom: 16px;
          max-width: 60%;
          line-height: 1.2;
          z-index: 3;
          position: relative;
          border-radius: ${mediumBorderRadius};
        }
        time {
          letter-spacing: 0.02em;
          font-size: 12px;
          color: ${colors.blackOne};
          margin-bottom: 8px;
        }
        .description {
          letter-spacing: 0.02em;
          color: ${colors.blackTwo};
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          -webkit-line-clamp: 3;
          font-size: 0.88rem;
          line-height: 1.3rem;
          max-height: 3.7rem;
        }
      `}</style>
    </>
  )
}

export default BioPost