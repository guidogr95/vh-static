const Empty = ({ label, icon }) => {
  return (
    <>
      <figure>
        <img alt="label" src={icon}/>
        <span>
          {label}
        </span>
      </figure>
      <style jsx>{`
        figure {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0.8;
        }
        img {
          max-width: 150px;
        }
      `}</style>
    </>
  )
}

export default Empty