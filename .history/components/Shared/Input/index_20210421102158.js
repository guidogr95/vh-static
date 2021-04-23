const Input = (props) => {
    const { size, hindeHandles } = props
    const innerSize = size || 'regular'
    return (
        <>
            <input {...props} className={`form-control me-2 ${innerSize}${hindeHandles ? ' hide-handles' : ''}`} />
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
                /* Chrome, Safari, Edge, Opera */
                .hide-handles::-webkit-outer-spin-button,
                .hide-handles::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }
                /* Firefox */
                .hide-handles[type=number] {
                -moz-appearance: textfield;
                }
            `}</style>
        </>
    )
}

export default Input