const calculateMonthlyPricing = (options) => {
  const { pricingData, multiplier } = options
  const daysInMonth = 31

  const usdHourlyRate = pricingData?.find(item => item.baseMultiplier === multiplier).usdHourlyRate
  return (usdHourlyRate * 24 * daysInMonth).toFixed(2)
}

export default calculateMonthlyPricing