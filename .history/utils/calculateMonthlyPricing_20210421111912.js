const calculateMonthlyPricing = (options) => {
  const { pricingData, multiplier, type } = options
  const daysInMonth = 31
  let usdHourlyRate = 0

  switch (type) {
    case 'baseMultiplier':
      usdHourlyRate = pricingData?.find(item => item.baseMultiplier === multiplier).usdHourlyRate
      break
    case 'rate':
      usdHourlyRate = pricingData?.usdRate * multiplier / 24
      break
    default:
  }

  return (usdHourlyRate * 24 * daysInMonth).toFixed(2)
}

export default calculateMonthlyPricing