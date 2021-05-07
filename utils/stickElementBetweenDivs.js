// Set the target element's transform: translateY(Xpx) css property in accordance to its position relative to a top and bottom div
const stickElementBetweenDivs = (options) => {
  const {
    height,
    topEl,
    bottomEl,
    targetEl,
    springApi
  } = options

  if (!topEl || !bottomEl || !targetEl || !springApi) return

  const { top: topElY } = topEl.getBoundingClientRect()
  const { top: bottomElY } = bottomEl.getBoundingClientRect()
  const calculatorHeight = height || topEl.scrollHeight
  if (topElY < 0) {
    if (bottomElY >= targetEl.scrollHeight) {
      springApi({ transform: `translateY(${parseInt(topElY * -1) + 2}px)` })
      // targetEl.style.transform = `translateY(${parseInt(topElY * -1) + 2}px)`
    } else if (bottomElY < targetEl.scrollHeight) {
      springApi({ transform: `translateY(${calculatorHeight - targetEl.scrollHeight}px)` })
      // targetEl.style.transform = `translateY(${calculatorHeight - targetEl.scrollHeight}px)`
    }
  } else if (topElY >= 0) {
    springApi({ transform: 'translateY(0px)' })
    // targetEl.style.transform = 'translateY(0px)'
  }
}

export default stickElementBetweenDivs