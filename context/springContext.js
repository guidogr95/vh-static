import { createContext, useContext } from 'react'
import { useSprings, useSpring, config, animated } from 'react-spring'
import { Transition } from 'react-spring/renderprops.cjs'

const springContext = createContext()

export function ProvideSpring({ children }) {
  const auth = useProvideSpring()
  return <springContext.Provider value={auth}>{children}</springContext.Provider>
}

export const useSpringUtils = () => {
  return useContext(springContext)
}

function useProvideSpring () {

    const enterRight = useSpring({
        config: { ...config.wobbly, duration: 400 },
        from: {
            transform: 'translateX(-60px)',
            opacity: 0
        },
        to: {
            transform: 'translateX(0px)',
            opacity: 1
        }
    })

    const enterTop = useSpring({
        config: { ...config.wobbly, duration: 600 },
        from: {
            transform: 'translateY(40px)',
            opacity: 0
        },
        to: {
            transform: 'translateY(0px)',
            opacity: 1
        }
    })

    const animations = {
        enterRight,
        enterTop
    }

    return {
        useSpring,
        useSprings,
        animated,
        config,
        Transition,
        animations
    }
}
