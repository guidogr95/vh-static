const getBgColors = (lapse, rgbNumbers) => {
  try {
    let backgroundColor = []
    const bgFormula = (rgbn, i) => parseInt((rgbn + 94 / lapse * (lapse - 1 * i * 2)))
    for (let i = 0; i < lapse; i++) {
        const bgColor = `rgb(${bgFormula(rgbNumbers[0], i)}, ${bgFormula(rgbNumbers[1], i)}, ${bgFormula(rgbNumbers[2], i)})`
        backgroundColor = [...backgroundColor, bgColor]
    }
    return backgroundColor
  } catch (err) {
    const defaultBgColors = Array.from(Array(lapse))
    return defaultBgColors('white', 0, lapse)
  }
}

export default getBgColors