// Theme
import { colors } from 'styles/theme'

const RangeSlider = ({ background }) => {
    return (
        <>
            <div className="rslider" >
                <div className="rslider__value" >
                    <span>100</span>
                </div>
                <div className="rslider__field" >
                    <div className="rslider__field-value left" >0</div>
                    <div className="rslider__field-value right" >200</div>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value="100"
                        steps="1"
                    />
                </div>
            </div>
            <style jsx>{`
                .rslider__field {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }
                .rslider__field input {
                    -webkit-appearance: none;
                    height: 3px;
                    width: 100%;
                    background: ${background || colors.lightGray};
                    border-radius: 5px;
                    outline: none;
                    border: none;
                }
                .rslider__field-value {
                    position: absolute;
                    font-size: 1em;
                    font-weight: 600;
                    color: ${colors.day};
                }
                .rslider__field-value .left {
                    left: -22px;
                }
                .rslider__field-value .right {
                    right: -43px;
                }
            `}</style>
        </>
    )
}

export default RangeSlider