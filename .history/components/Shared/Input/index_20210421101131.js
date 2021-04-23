const Input = (props) => {
    const { size } = props
    const innerSize = size || 'regular'
    return (
        <>
            <input {...props} className={`form-control me-2 ${innerSize}`} />
            <style jsx>{`
                .large {
                    height: 55px;
                }
            `}</style>
        </>
    )
}

export default Input