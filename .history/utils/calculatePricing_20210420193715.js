const calculatePricing = (options) => {
  const { pricingIndex, multiplier } = options
  const daysInMonth = 31

  console.log(pricingIndex.find(item => item.baseMultiplier === multiplier))
  // const usdHourlyRate = pricingIndex.find()
  // return 
}

export default calculatePricing