import { forwardRef } from 'react'

const Select = forwardRef((props, ref) => {
  const { size, children } = props
  const innerSize = size || 'regular'
  return (
      <>
          <select ref={ref} {...props} className={`form-control me-2 ${innerSize}`}>
            {children}
          </select>
          <style jsx>{`
              select {
              }
              .small {
                  height: 40px;
              }
              .regular {
                  height: 45px;
              }
              .large {
                  height: 55px;
              }
          `}</style>
      </>
  )
})

export default Select