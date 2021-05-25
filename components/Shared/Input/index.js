import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
    const { size, hideHandles, className } = props
    const innerSize = size || 'regular'
    return (
        <>
            <input {...props} ref={ref} className={`form-control me-2 ${innerSize}${hideHandles ? ' hide-handles' : ''}${className && ` ${className}`}`} />
            <style jsx>{`
                .small {
                    height: 40px;
                }
                .regular {
                    height: 45px;
                }
                .large {
                    height: 55px;
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
})

export default Input