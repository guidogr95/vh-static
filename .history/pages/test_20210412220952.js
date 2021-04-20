import RangeSlider from 'components/Shared/RangeSlider'

const test = () => {
  return (
    <>
      <div>
        <RangeSlider />
      </div>
      <style jsx>{`
        div {
          display: grid;
  height: 100%;
  text-align: center;
  place-items: center;
  background: #664AFF;
        }
      `}</style>
    </>
  )
}

export default test