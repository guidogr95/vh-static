const strapiDateToDateString = (strapiDate) => {
    const [year, month, day] = strapiDate.split('-')
    const date = new Date()
    date.setHours(1)
    date.setYear(parseInt(year))
    date.setDate(parseInt(day))
    date.setMonth(parseInt(month) - 1)
    return date.toDateString()
}

module.exports = strapiDateToDateString