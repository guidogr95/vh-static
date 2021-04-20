// Theme
import { colors } from 'styles/theme'

const RangeSlider = ({ background, themeColor }) => {
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
                .rslider {
                    height: 80px;
                }
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
                    color: ${themeColor || colors.day};
                }
                .rslider__field-value.left {
                    left: -22px;
                }
                .rslider__field-value.right {
                    right: -43px;
                }
                .rslider__value {
                    position: relative;
                    width: 100%;
                }
                .rslider__value span,
                .rslider__value span:after {
                    position: absolute;
                    font-size: 1em;
                }
                .rslider__value span {
                    color: ${colors.white};
                    font-weight: 500;
                    height: 45px;
                    width: 45px;
                    top: -55px;
                    transform: translateX(-50%);
                    line-height: 55px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                    transform-origin: bottom;
                    transition: transform 0.3s ease-in-out;
                }
                .rslider__value span:after {
                    background: ${themeColor || colors.day};
                    content: '';
                    left: 50%;
                    height: 45px;
                    width: 45px;
                    transform: translateX(-50%) rotate(45deg);
                    border: 3px solid ${colors.white};
                    z-index: -1;
                    border-radius: 50% 50% 0 50%;
                }
            `}</style>
        </>
    )
}

export default RangeSlider