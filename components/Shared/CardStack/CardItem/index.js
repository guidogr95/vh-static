// Theme
import { shadows, cardStackStyles } from 'styles/theme'
// Utils
import { useSpringUtils } from 'context/springContext'

const CardItem = ({ index, zIndex, style, bgColor, title }) => {
  const { animated } = useSpringUtils()
  return (
    <>
      <animated.li style={{ zIndex, ...style }} >
        <div className="content gradientFont-day" >
          {title}
        </div>
        <div className="card" >
        </div>
      </animated.li>
      <style jsx>{`
        .card {
          transform: translate(0%, 0px) rotate(40deg) skew(-20deg, -10deg) scale(4.5);
          width: 75px;
          height: 75px;
          background: ${index === 0 ? 'white' : bgColor};
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          box-shadow: ${shadows.cardSoft};
          z-index: 1;
          border-radius: ${cardStackStyles.borderRadius}px;
          border: none;
          transition: .9s ease-in-out all;
        }
        .content {
          z-index: 2;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 3em;
          font-weight: 700;
          line-height: 1.2;
        }
      `}</style>
    </>
  )
}

export default CardItem