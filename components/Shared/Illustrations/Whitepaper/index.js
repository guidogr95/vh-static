// Components
import Hat from './Hat'
import Laptop from './Laptop'
import Plug from './Plug'
import LaptopShadow from './LaptopShadow'
import { StarsOne, StarsThree, StarsTwo } from './Stars'
// Utils
import { useSpringUtils } from 'context/springContext'

function Whitepaper (props) {

    const { useSprings, config, animated } = useSpringUtils()

    const animatedItems = [
        <Laptop key="animated1" />,
        <Hat key="animated2" />,
        <StarsOne key="animated3" />,
        <StarsTwo key="animated4" />,
        <StarsThree key="animated5" />
      ]

      const springs = useSprings(
        animatedItems.length,
          animatedItems.map((_, i) => {
              return {
                config: { ...config.gentle, duration: 500 },
                delay: i * 200,
                from: {
                    transform: 'translateY(-40px)',
                    opacity: 0
                },
                to: {
                    transform: 'translateY(0px)',
                    opacity: 1
                }
              }
          })
      )

      const animatedElements = springs.map((animatedStyle, index) => (
        <animated.g
          key={index}
          style={animatedStyle}
        >
          {animatedItems[index]}
        </animated.g>
      ))

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.7 360" {...props}>
      <style>
        {
          '.prefix__st5{fill:#fff}.prefix__st8{fill:#396bb3}.prefix__st9{fill:#d5ebff}.prefix__st10{fill:#0a2982}.prefix__st11{fill:#b0d1ea}.prefix__st13{fill:#c9ccd3}.prefix__st14{fill:#f7f7f7}.prefix__st15{fill:#b6d8f2}.prefix__st16{fill:#ed8406}.prefix__st17{fill:#fbc006}.prefix__st18{fill:#205ce1}.prefix__st21,.prefix__st22{fill:none;stroke:#fff;stroke-width:1.085;stroke-miterlimit:10}.prefix__st22{stroke-linecap:round;stroke-linejoin:round}'
        }
      </style>
      <g id="prefix__OBJECTS">
        <Plug />
        <LaptopShadow />
        {animatedElements}
      </g>
    </svg>
  )
}

export default Whitepaper
