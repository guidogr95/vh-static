import RangeSlider from 'components/Shared/RangeSlider'

const test = () => {
  return (
    <>
      <div>
        <RangeSlider />
      </div>
      <style jsx>{`
        div {
          margin: auto;
          max-width: 500px;
          width: 100%;
          padding: 20px;
          margin-top: 100px;
        }
      `}</style>
    </>
  )
}

export default test