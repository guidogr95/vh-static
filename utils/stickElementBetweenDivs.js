// Set the target element's transform: translateY(Xpx) css property in accordance to its position relative to a top and bottom div
const stickElementBetweenDivs = (options) => {
  const {
    height,
    topEl,
    bottomEl,
    targetEl
  } = options

  if (!topEl || !bottomEl || !targetEl) return

  const { top: topElY } = topEl.getBoundingClientRect()
  const { top: bottomElY } = bottomEl.getBoundingClientRect()
  const calculatorHeight = height || topEl.scrollHeight
  if (topElY < 0) {
    if (bottomElY >= targetEl.scrollHeight) {
      targetEl.style.transform = `translateY(${parseInt(topElY * -1) + 2}px)`
    } else if (bottomElY < targetEl.scrollHeight) {
      targetEl.style.transform = `translateY(${calculatorHeight - targetEl.scrollHeight}px)`
    }
  } else if (topElY >= 0) {
    targetEl.style.transform = 'translateY(0px)'
  }
}

export default stickElementBetweenDivs