const getItemFromConditions = (options) => {
  const { sortedConditionsToLowest, multiplier } = options
  const matchedValueIndex = sortedConditionsToLowest.findIndex(condition => multiplier <= condition.maxValue)
  return sortedConditionsToLowest[matchedValueIndex >= 0 ? matchedValueIndex : sortedConditionsToLowest.length - 1]
}

const calculatePricing = ({ pricingData, multiplier, type, conditions, daysInMonth = 31, outRateTime = 'hourly' }) => {
  let baseHourlyRate = 0
  let pricingRate = 0
  let usdRateTime = 'monthly'
  let baseHourlyRateMultiplier = 1

  const sortedConditionsToLowest = conditions ? conditions.sort((a, b) => a.maxValue + b.maxValue) : null
  switch (type) {
    case 'baseMultiplier':
      // get usdRateTime here and down to use for normalization
      if (pricingData) {
        const itemFromPricingData = pricingData?.find(item => item.baseMultiplier === multiplier)
        usdRateTime = itemFromPricingData.usdRateTime
        pricingRate = itemFromPricingData.usdRate
      }
      break
    case 'rate':
      if (pricingData) {
        const itemFromConditions = sortedConditionsToLowest ? getItemFromConditions({ sortedConditionsToLowest, multiplier }) : null
        usdRateTime = itemFromConditions ? itemFromConditions.usdRateTime : pricingData.usdRateTime
        pricingRate = itemFromConditions ? itemFromConditions.usdRate : pricingData.usdRate
      }
      break
    default:
  }
  // normalize entry rate to hourly before conversion
  switch (usdRateTime) {
    case 'daily':
      baseHourlyRate = pricingRate / 24
      break
    case 'weekly':
      baseHourlyRate = pricingRate / (7 * 24)
      break
    case 'monthly':
      baseHourlyRate = pricingRate / (daysInMonth * 24)
      break
    default:
      baseHourlyRate = pricingRate
  }
  if (outRateTime === 'daily') {
    baseHourlyRateMultiplier = 24
  } else if (outRateTime === 'weekly') {
    baseHourlyRateMultiplier = 24 * 7
  } else if (outRateTime === 'monthly') {
    baseHourlyRateMultiplier = 24 * daysInMonth
  }
  if (type === 'rate') {
    baseHourlyRateMultiplier = baseHourlyRateMultiplier * multiplier
  }
  const totalPrice = baseHourlyRate * baseHourlyRateMultiplier
  const decimals = totalPrice > 0 && outRateTime === 'hourly' && baseHourlyRate <= 1
    ? totalPrice < 0.001
      ? 4
      : totalPrice < 0.01
        ? 3
        : 2
    : 2
  return totalPrice.toFixed(decimals)
}

export default calculatePricing