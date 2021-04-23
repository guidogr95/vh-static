const calculatePricing = (options) => {
  const { pricingIndex, multiplier } = options
  const daysInMonth = 31

  const usdHourlyRate = pricingIndex.find(item => item.baseMultiplier === multiplier).usdHourlyRate
  return (usdHourlyRate * 24 * daysInMonth).toFixed(2)
}

export default calculatePricing