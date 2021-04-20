import { useState } from 'react'
// Theme
import { colors } from 'styles/theme'

const RangeSlider = ({ background, themeColor }) => {

    const [value, setValue] = useState(0)
    const [active, setActive] = useState(false)

    return (
        <>
            <div className="rslider-container" >
                <div className="range">
                    <div className="sliderValue">
                        <span>{value}</span>
                    </div>
                    <div className="field">
                        <div className="value left">0</div>
                        <div className="value right">200</div>
                        <input
                            type="range"
                            min="10"
                            max="200"
                            value={value}
                            steps="1"
                            onChange={(e) => setValue(e.target.value)}
                            onFocus={() => setActive(true)}
                            onBlur={() => setActive(false)}
                        />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .rslider-container {
                    display: grid;
                    height: 100%;
                    text-align: center;
                    place-items: center;
                }
                .range{
                    height: 80px;
                    width: 380px;
                    background: #fff;
                    border-radius: 10px;
                    padding: 0 65px 0 45px;
                    box-shadow: 2px 4px 8px rgba(0,0,0,0.1);
                }
                .sliderValue{
                    position: relative;
                    width: 100%;
                }
                .sliderValue span{
                    position: absolute;
                    height: 45px;
                    width: 45px;
                    transform: translateX(-70%) scale(${active ? 1 : 0});
                    font-weight: 500;
                    top: -40px;
                    line-height: 55px;
                    z-index: 2;
                    left: ${value / 2}%;
                    color: #fff;
                    transform-origin: bottom;
                    transition: transform 0.3s ease-in-out;
                }
                .sliderValue span.show{
                    transform: translateX(-70%) scale(1);
                }
                .sliderValue span:after{
                    position: absolute;
                    content: '';
                    height: 100%;
                    width: 100%;
                    background: #664AFF;
                    border: 3px solid #fff;
                    z-index: -1;
                    left: 50%;
                    transform: translateX(-50%) rotate(45deg);
                    border-bottom-left-radius: 50%;
                    box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
                    border-top-left-radius: 50%;
                    border-top-right-radius: 50%;
                }
                .field{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    position: relative;
                }
                .field .value{
                    position: absolute;
                    font-size: 18px;
                    color: #664AFF;
                    font-weight: 600;
                }
                .field .value.left{
                    left: -22px;
                }
                .field .value.right{
                    right: -43px;
                }
                .range input{
                    -webkit-appearance: none;
                    width: 100%;
                    height: 3px;
                    background: #ddd;
                    border-radius: 5px;
                    outline: none;
                    border: none;
                    z-index: 2222;
                }
                .range input::-webkit-slider-thumb{
                    -webkit-appearance: none;
                    width: 20px;
                    height: 20px;
                    background: red;
                    border-radius: 50%;
                    background: #664AFF;
                    border: 1px solid #664AFF;
                    cursor: pointer;
                }
                .range input::-moz-range-thumb{
                    -webkit-appearance: none;
                    width: 20px;
                    height: 20px;
                    background: red;
                    border-radius: 50%;
                    background: #664AFF;
                    border: 1px solid #664AFF;
                    cursor: pointer;
                }
                .range input::-moz-range-progress{
                    background:  #664AFF; 
                }
            `}</style>
        </>
    )
}

export default RangeSlider