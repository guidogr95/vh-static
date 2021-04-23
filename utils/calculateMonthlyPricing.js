const getRateFromConditions = (options) => {
  const { sortedConditions, conditions, multiplier } = options
  const matchedValueIndex = sortedConditions.findIndex(value => multiplier <= value)
  return conditions[matchedValueIndex >= 0 ? matchedValueIndex : conditions.length - 1].usdRate
}

const calculateMonthlyPricing = (options) => {
  const { pricingData, multiplier, type, conditions } = options
  const daysInMonth = 31
  let baseRate = 0
  let pricingRate = 0
  const sortedConditions = conditions ? conditions.map(condition => condition.maxValue).sort((a, b) => a + b) : null

  switch (type) {
    case 'baseMultiplier':
      baseRate = pricingData?.find(item => item.baseMultiplier === multiplier).usdHourlyRate
      break
    case 'rate':
      pricingRate = sortedConditions ? getRateFromConditions({ sortedConditions, conditions, multiplier }) : pricingData?.usdRate
      baseRate = pricingRate * multiplier / (24 * daysInMonth)
      break
    default:
  }

  return (baseRate * 24 * daysInMonth).toFixed(2)
}

export default calculateMonthlyPricing