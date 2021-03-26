const strapiDateToDateString = (strapiDate) => {
    const [year, month, day] = strapiDate.split('-')
    console.log(year, month, day)
    const dateString = new Date(new Date(new Date(new Date().setMonth(parseInt(month) - 1)).setYear(parseInt(year))).setDate(parseInt(day))).toDateString()
    return dateString
}

export default strapiDateToDateString