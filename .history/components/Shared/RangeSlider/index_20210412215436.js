// Theme
import { colors } from 'styles/theme'

const RangeSlider = ({ background, themeColor }) => {
    return (
        <>
            {/* <div className="rslider" >
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
            </div> */}
            <div className="range">
        <div className="sliderValue">
          <span>100</span>
        </div>
<div className="field">
          <div className="value left">
0</div>
<input type="range" min="10" max="200" value="100" steps="1"/>
          <div className="value right">
200</div>
</div>
</div>
            <style jsx>{`
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
  transform: translateX(-70%) scale(0);
  font-weight: 500;
  top: -40px;
  line-height: 55px;
  z-index: 2;
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
  background: #664AFF; //this progress background is only shown on Firefox
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
                    top: -40px;
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
                    height: 100%;
                    width: 100%;
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