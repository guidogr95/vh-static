import { useSpringUtils } from 'context/springContext'

const Plug = () => {

    const { animated, useSpring, config } = useSpringUtils()

    const lineFill = useSpring({
        config: { ...config.gentle, duration: 700 },
        delay: 1000,
        from: {
            strokeDasharray: 1000,
            strokeDashoffset: 1000
        },
        to: {
            strokeDashoffset: 900
        }
    })

    const showPlug = useSpring({
        config: { ...config.gentle, duration: 700 },
        delay: 400,
        from: {
            transform: 'translate3d(15px, 0, 0)',
            opacity: 0
        },
        to: {
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
        }
    })

    const Line = () => (
        <animated.path
            style={lineFill}
            d="M278.7 236.1l31.5 18.6c2 1.2 4.6-.3 4.6-2.6V235"
            opacity={0.7}
            fill="none"
            stroke="#73cfff"
            strokeWidth={1.085}
            strokeMiterlimit={10}
        />
    )

    const WallPlug = () => (
        <animated.g style={showPlug} >
            <path
                id="prefix__XMLID_285_"
                opacity={0.2}
                fill="#fff"
                d="M345.6 252.1L309.3 230v-36.6l36.3 22.1v29.2z"
            />
            <path
                id="prefix__XMLID_284_"
                className="prefix__st5"
                d="M336.5 253l-36.3-22.1v-36.6l36.3 22.1v29.2z"
            />
            <path
                id="prefix__XMLID_277_"
                fill="#e15f52"
                d="M313.4 214.5l10 10.1-10 4.2z"
            />
        </animated.g>
    )

    return (
        <>
            <g id="prefix__XMLID_52_">
                <Line/>
                <WallPlug />
            </g>
        </>
    )
}

export default Plug