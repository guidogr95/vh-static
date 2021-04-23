const Input = (props) => {
    const { size } = props
    const innerSize = size || 'regular'
    return (
        <input {...props} className={`form-control me-2 ${size}`} />
    )
}

export default Input