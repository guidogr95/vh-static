const numberFormat = ({ value, style, currency = 'USD', locale = 'en' }) =>
  new Intl.NumberFormat(locale, {
    style,
    currency
  }).format(value)

export default numberFormat