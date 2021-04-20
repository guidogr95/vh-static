const RangeSlider = () => {
    return (
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
    )
}

export default RangeSlider