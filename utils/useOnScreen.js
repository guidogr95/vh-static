import { useState, useEffect } from 'react'

function useOnScreen (ref, rootMargin = '0px', track) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
      if (!track) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting)
        },
        {
          rootMargin
        }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
      return () => {
        try {
          observer.unobserve(ref.current)
        } catch (err) {
          console.log(err)
        }
      }
    }, [track]) // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting
  }

  export default useOnScreen