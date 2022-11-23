import { useState, useEffect, useCallback } from 'react'
import throttle from 'lodash'

/**
 *
 * @param {function} onScrollEnd - function to execute when scroll is end
 * @returns isEnd
 */
const useInfiniteScroll = ({ onScrollEnd }) => {
  const [isEnd, setIsEnd] = useState(false)

  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = 'auto'
  }, [])

  const handleScroll = throttle(async () => {
    const { scrollHeight } = document.documentElement
    const { scrollTop } = document.documentElement
    const { clientHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsEnd(true)
      lockScroll()
      if (onScrollEnd) {
        await onScrollEnd()
      }
      await unlockScroll()
      await setIsEnd(false)
    }
  }, 300)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isEnd }
}

export default useInfiniteScroll
