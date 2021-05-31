// Theme
import { colors } from 'styles/theme'

const CircleBackgroundSection = (props) => {
  const { children } = props
  return (
    <>
      <article {...props} >
        <div className="bg-wrapper" >
          <div>
            <span />
          </div>
        </div>
        {children}
      </article>
      <style jsx>{`
        article {
          position: relative;
        }
        .bg-wrapper {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
        }
        .bg-wrapper div {
          position: relative;
          width: 100%;
          height: 100%;
          background: ${colors.purple};
          overflow: hidden;
        }
        .bg-wrapper div:after,
        .bg-wrapper div:before,
        .bg-wrapper div span {
          background: ${colors.lightPurple};
          content: '';
          border-radius: 50%;
          position: absolute;
        }
        .bg-wrapper div:after {
          width: 304px;
          height: 304px;
          top: -250px;
          left: 20px;
        }
        .bg-wrapper div:before {
          width: 534px;
          height: 534px;
          top: -350px;
          right: 145px;
        }
        .bg-wrapper div span {
          width: 181px;
          height: 181px;
          right: -117px;
          bottom: 30px;
        }
      `}</style>
    </>
  )
}

export default CircleBackgroundSection