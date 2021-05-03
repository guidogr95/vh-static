const getRateFromConditions = (options) => {
  const { sortedConditionsToLowest, conditions, multiplier } = options
  const matchedValueIndex = sortedConditionsToLowest.findIndex(condition => multiplier <= condition.maxValue)
  return conditions[matchedValueIndex >= 0 ? matchedValueIndex : sortedConditionsToLowest.length - 1].usdRate
}

const calculatePricing = ({ pricingData, multiplier, type, conditions, daysInMonth = 31, outRateTime = 'hourly' }) => {
  let baseHourlyRate = 0
  let pricingRate = 0
  const sortedConditionsToLowest = conditions ? conditions.sort((a, b) => a.maxValue + b.maxValue) : null
  switch (type) {
    case 'baseMultiplier':
      // get usdRateTime here and down to use for normalization
      pricingRate = pricingData?.find(item => item.baseMultiplier === multiplier).usdRate
      break
    case 'rate':
      pricingRate = sortedConditionsToLowest ? getRateFromConditions({ sortedConditionsToLowest, multiplier }) : pricingData?.usdRate
      pricingRate = pricingRate * multiplier
      break
    default:
  }
  // normalize entry rate to hourly before conversion
  
  // if ()

  return (baseRate * 24 * daysInMonth).toFixed(2)
}

export default calculatePricing