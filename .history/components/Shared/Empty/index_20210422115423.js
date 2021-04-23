import { colors } from 'styles/theme'

const Empty = ({ label, icon }) => {
  return (
    <>
      <figure>
        <img alt="label" src={icon}/>
        <span>
          {label}
        </span>
      </figure>
      <style jsx>{`
        figure {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0.5;
        }
        img {
          max-width: 100px;
        }
        span {
          font-weight: 700;
          letter-spacing: 0.02em;
          color: ${colors.whiteGray};
        }
      `}</style>
    </>
  )
}

export default Empty