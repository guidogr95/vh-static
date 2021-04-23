const Input = (props) => {
    const { size } = props
    const innerSize = size || 'regular'
    return (
        <>
            <input {...props} className={`form-control me-2 ${innerSize}`} />
            <style jsx>{`
                .small {
                    height: 40px;
                }
                .regular {
                    height: 45px;
                }
                .large {
                    height: 55px;
                    font-size: 1.2em;
                }
            `}</style>
        </>
    )
}

export default Input