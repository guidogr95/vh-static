import { memo, useState } from 'react'

const TextArea = memo((props) => {

  const { rows, minRows, maxRows, name, placeholder, value, onChange, lineHeight, className } = props

  const [textAreaData, setTextAreaData] = useState({
    rows: rows || 3,
    minRows: minRows || 3,
    maxRows: maxRows || 15,
    text: ''
  })

  const handleChange = (e) => {
    const { minRows, maxRows } = textAreaData
    const previousRows = e.target.rows
    e.target.rows = minRows // reset number of rows in textarea
    const currentRows = ~~(e.target.scrollHeight / lineHeight)

    if (currentRows === previousRows) {
        e.target.rows = currentRows
    }
    if (currentRows >= maxRows) {
        e.target.rows = maxRows
        e.target.scrollTop = e.target.scrollHeight
    }
    onChange(e)
    setTextAreaData({
        ...textAreaData,
        rows: currentRows < maxRows ? currentRows : maxRows
    })
}

  return (
    <textarea
      {...props}
      className={`form-control textarea-no-resize${className && ` ${className}`}`}
      rows={textAreaData.rows}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder || 'Message...'}
    />
  )
})

export default TextArea