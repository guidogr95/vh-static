const RangeSlider = ({ background }) => {
    return (
        <>
            <div className="rslider" >
                <div className="rslider__value" >
                    <span>100</span>
                </div>
                <div className="rslider__field" >
                    <div className="rslider__field-value-left" >0</div>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value="100"
                        steps="1"
                    />
                    <div className="rslider__field-value-right" >200</div>
                </div>
            </div>
            <style jsx>{`
                .rslider {
                    background: ${background || 'none'};

                }
                .rslider__field {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }
            `}</style>
        </>
    )
}

export default RangeSlider