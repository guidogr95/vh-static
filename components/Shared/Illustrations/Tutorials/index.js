// Components
import Cloud from './Cloud'
import { BookThree, BookTwo, BookOne } from './Books'
import Laptop from './Laptop'
import Human from './Human'
// Utils
import { useSpringUtils } from 'context/springContext'

function Tutorials (props) {

    const { useSprings, config, animated } = useSpringUtils()

    const animatedItems = [
        <Cloud key="animated1" />,
        <Human key="animated4" />,
        <BookOne key="animated2" />,
        <BookTwo key="animated3" />,
        <Laptop key="animated5" />,
        <BookThree key="animated6" />
    ]

    const springs = useSprings(
        animatedItems.length,
            animatedItems.map((_, i) => {
                return {
                config: { ...config.gentle, duration: 500 },
                delay: i * 100,
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
        <svg
            id="prefix__Tutorial"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x={0}
            y={0}
            viewBox="0 0 366.7 360"
            xmlSpace="preserve"
            {...props}
        >
            <style>
            {
                '.prefix__st3{enable-background:new}.prefix__st5{fill:#c8d3e5}.prefix__st8{fill:#dee5f1}.prefix__st13{fill:#f0f3f9}.prefix__st17{fill:#e8edf5}.prefix__st19{fill:#171716}.prefix__st22{fill:#e5bd99}.prefix__st23{fill:#2744ac}.prefix__st25{fill:#d1dce6}.prefix__st27{fill:#0c2f4b}.prefix__st31{fill:#b3b3b3}.prefix__st32{fill:#e1e4ea}.prefix__st35{fill:#ffc300}.prefix__st36{fill:#f9408f}.prefix__st38{fill:#dcdcdc}.prefix__st40{fill:#be2165}.prefix__st41{fill:#df2f7b}.prefix__st42{fill:#90164b}.prefix__st43{fill:#f9f9f9}.prefix__st45{fill:#8034d2}.prefix__st47{fill:#6525aa}.prefix__st48{fill:#4d1b83}'
            }
            </style>
            {animatedElements}
            <path
                fill="#6536ff"
                d="M247.4 325.2l41-23.8-170.5-98.5-41.1 23.8z"
                opacity={0.2}
            />
        </svg>
    )
}

export default Tutorials
