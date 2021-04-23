import React, { useState } from 'react'
// Theme
import { colors } from 'styles/theme'

const RangeSlider = React.memo(({ themeColor, min, max, handleSlider, value, showRange, pricingIndex }) => {

    const [active, setActive] = useState(false)

    const bubbleWidth = 45
    const bubbleHeight = 45
    const thumbWidth = 20
    const thumbHeight = 20

    const indexValues = {}
    for (const i in pricingIndex) {
        indexValues[parseInt(i) + 1] = pricingIndex[i].baseMultiplier
    }
    const innerMax = max || 100
    const innerMin = min || 0
    console.log(indexValues)
    const indexMax = indexValues ? indexValues[Object.keys(indexValues).length] : innerMax
    const indexMin = indexValues ? indexValues[1] : innerMin
    // Give each number within the min and max an index inside an array in order to calculate the exact position of the slider within any kind of range
    const rawIndexedArray = []
    for (let i = 0; i < innerMax + 1; i++) {
        rawIndexedArray[i] = i
    }
    const indexedArray = rawIndexedArray.slice(innerMin, rawIndexedArray.length)
    const sliderPercentage = indexedArray.indexOf(parseInt(value)) / (innerMax - 1) * 100

    return (
        <>
            <div className={`rslider-container${showRange ? ' showRange' : ''}`} >
                <div className="range">
                    <div className="sliderValue">
                        <span>{indexValues ? indexValues[value] : value}</span>
                    </div>
                    <div className="field">
                        <div className="value left">{indexMin}</div>
                        <div className="value right">{indexMax}</div>
                        <input
                            type="range"
                            min={innerMin}
                            max={innerMax}
                            value={value}
                            onChange={handleSlider}
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
                .rslider-container .range {
                    height: 80px;
                    width: 100%;
                    border-radius: 10px;
                    padding: 0 0;
                }
                .rslider-container.showRange .range {
                    padding: 0 65px 0 45px;
                }
                .sliderValue {
                    position: relative;
                    width: calc(100% - ${bubbleWidth / 2}px);
                }
                .sliderValue span {
                    position: absolute;
                    height: ${bubbleHeight}px;
                    width: ${bubbleWidth}px;
                    transform: translateX(${-(bubbleWidth / 2) + (thumbWidth / 2) + (value / 100 * 1)}px) scale(${active ? 1 : 0});
                    font-weight: 500;
                    top: -40px;
                    line-height: 55px;
                    z-index: 2;
                    left: ${sliderPercentage}%;
                    color: #fff;
                    transform-origin: bottom;
                    transition: transform 0.2s;
                }
                .sliderValue span:after {
                    position: absolute;
                    content: '';
                    height: 100%;
                    width: 100%;
                    background: ${themeColor || colors.day};
                    border: 3px solid #fff;
                    z-index: -1;
                    left: 0;
                    transform: rotate(45deg);
                    border-bottom-left-radius: 50%;
                    box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
                    border-top-left-radius: 50%;
                    border-top-right-radius: 50%;
                }
                .field {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    position: relative;
                }
                .field .value {
                    position: absolute;
                    font-size: 18px;
                    color: ${themeColor || colors.day};
                    font-weight: 600;
                    display: none;
                }
                .rslider-container.showRange .field .value {
                    display: initial;
                }
                .field .value.left {
                    left: -22px;
                }
                .field .value.right {
                    right: -43px;
                }
                .range input {
                    -webkit-appearance: none;
                    width: 100%;
                    height: 3px;
                    background: ${colors.lightGray}50;
                    border-radius: 5px;
                    outline: none;
                    border: none;
                    z-index: 2222;
                    position: relative;
                }
                .range input:after {
                    border-radius: 5px;
                    position: absolute;
                    content: '';
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: ${sliderPercentage}%;
                    background: ${themeColor || colors.day};
                    z-index: 2;
                }
                .range input::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: ${thumbWidth}px;
                    height: ${thumbHeight}px;
                    border-radius: 50%;
                    background: ${themeColor || colors.day};
                    border: 1px solid ${themeColor || colors.day};
                    cursor: pointer;
                    z-index: 3;
                    position: relative;
                }
                .range input::-moz-range-thumb {
                    -webkit-appearance: none;
                    width: ${thumbWidth}px;
                    height: ${thumbHeight}px;
                    background: ${themeColor || colors.day};
                    border-radius: 50%;
                    border: 1px solid ${themeColor || colors.day};
                    cursor: pointer;
                }
                .range input::-moz-range-progress {
                    background: ${themeColor || colors.day}; 
                }
            `}</style>
        </>
    )
})

export default RangeSlider