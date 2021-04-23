const Select = (props) => {
  const { size, children } = props
  const innerSize = size || 'regular'
  return (
      <>
          <select {...props} className={`form-control me-2 ${innerSize}`}>
            {children}
          </select>
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

export default Select