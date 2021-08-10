import { useCallback, useEffect, useState } from 'react'
// Utils
import { useSpringUtils } from 'context/springContext'
import getBgColors from 'utils/getBgColors'
import { throttle } from 'utils/imports/packages'
// Hooks
import useStateWithPromise from 'utils/useStateWithPromise'
// Components
import CardItem from './CardItem'
// Assets
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
// Theme
import { cardStackStyles } from 'styles/theme'

const CardStack = () => {
  const { containerHeight } = cardStackStyles
  const { useTransition, config } = useSpringUtils()
  const [itemsLength, setItemsLength] = useState(0)
  const [items, setItems] = useStateWithPromise([
    {
      Title: 'Virtual Machines',
      delay: 200,
      id: 1
    },
    {
      Title: 'Bare Metal',
      delay: 400,
      id: 2
    },
    {
      Title: 'Kubernetes',
      delay: 600,
      id: 3
    }
  ])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
    setItemsLength(items.length)
  }, [])

  const promiseSetItems = (items) => {
    return setItems(items)
  }
  const throttledAction = useCallback(
    throttle(async (action, items) => {
      const cloneArray = Array.from(items)
      if (action === 'next') {
      const splicedItem = cloneArray.splice(0, 1)[0]
      await Promise.all([promiseSetItems(cloneArray)]).then(() => {
        cloneArray.push(splicedItem)
        setItems(cloneArray)
      })
    } else if (action === 'prev') {
      const splicedItem = cloneArray.splice(-1, 1)[0]
      await Promise.all([promiseSetItems(cloneArray)]).then(() => {
        cloneArray.unshift(splicedItem)
        setItems(cloneArray)
      })
    }
    }, 1200), []
  )
  const handleStack = async (action) => {
    throttledAction(action, items)
  }

  const transitions = useTransition(items, {
    from: { y: -30, opacity: 0 },
    enter: item => (next) => (
      next({ y: 0, opacity: 1, delay: !loaded ? item.delay : 0 })
    ),
    leave: { y: -30, z: 40, transform: 'scale(0.97) perspective(40px)', opacity: 0 },
    config: config.wobbly
  })

  const zIndexOrder = Array.from({ length: items.length }, (_, i) => i + 1).reverse()
  const bgColors = getBgColors(items.length, [123, 111, 212])
  return (
    <>
      <section className="cardStack-container section-pd-md centeredBlock" >
        <ul>
          {transitions((style, item, spring) => {
            const index = items.findIndex(it => it.id === item.id)
            const springPhase = spring.phase
            return (
              item &&
                <CardItem
                  index={index}
                  title={springPhase !== 'leave' ? item.Title : ''}
                  bgColor={bgColors[index]}
                  zIndex={zIndexOrder[index]}
                  style={style}
                  springPhase={spring.phase}
                />
            )
          }
          )}
        </ul>
        <div className="nav" >
          <button className="nav-btn-base--1 next" onClick={() => handleStack('next')}>
            <FiChevronRight/>
          </button>
          <button className="nav-btn-base--1 prev" onClick={() => handleStack('prev')}>
            <FiChevronLeft/>
          </button>
        </div>
      </section>
      <style jsx>{`
        .nav {
          display: grid;
          row-gap: 20px;
          grid-template-rows: repeat(2, 1fr);
        }
        .nav .next {
          transform: rotate(-90deg);
        }
        .nav .prev {
          transform: rotate(-90deg);
        }
        .cardStack-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        ul :global(li) {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        ul :global(li .content) {
          opacity: 0;
          transition: .6s ease-out all;
        }
        ul :global(li:first-of-type .content) {
          opacity: 1;
        }
        ul :global(li:first-of-type) {
          z-index: ${items.length + 2};
        }
        ul :global(li:last-of-type) {
          z-index: 0;
        }
        ul {
          list-style: none;
          position: relative;
          width: 100%;
          height: ${(containerHeight * itemsLength) + 200}px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default CardStack