const calculateMonthlyPricing = (options) => {
  const { pricingData, multiplier, type, conditions } = options
  const daysInMonth = 31
  let usdHourlyRate = 0
  const sortedConditions = conditions ? conditions.map(condition => condition.maxValue).sort((a, b) => b - a) : null
  console.log(sortedConditions)

  switch (type) {
    case 'baseMultiplier':
      usdHourlyRate = pricingData?.find(item => item.baseMultiplier === multiplier).usdHourlyRate
      break
    case 'rate':
      usdHourlyRate = pricingData?.usdRate * multiplier / (24 * daysInMonth)
      break
    default:
  }

  return (usdHourlyRate * 24 * daysInMonth).toFixed(2)
}

export default calculateMonthlyPricing