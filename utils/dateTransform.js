import { months } from 'config/dateConstants'

const dateTransform = ({ date, transformType }) => {
  const innerDate = new Date(date)
  const monthIndex = innerDate.getMonth()
  const day = innerDate.getDate()
  const year = innerDate.getFullYear()

  let returnDate = ''

  switch (transformType) {
    case 'month day, year':
      returnDate = `${months[monthIndex]} ${day}${day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th'}, ${year}`
      break
    default:
      returnDate = innerDate.toString()
  }

  return returnDate
}

export default dateTransform