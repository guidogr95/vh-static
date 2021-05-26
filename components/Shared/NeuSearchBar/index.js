import { useState } from 'react'
// Theme
import { colors } from 'styles/theme'

const NeuSearchBar = ({ placeholder, onSubmit, onChange, formData, onFocus }) => {

    const [active, setActive] = useState(false)

    const handleFocus = () => {
        !active && setActive(true)
        onFocus && onFocus()
    }

    const handleBlur = () => {
        active && setActive(false)
    }

    return (
        <>
            <div className="sb-container">
                <form
                    autoComplete="off"
                    onSubmit={onSubmit || null}
                >
                    <div className={`finder ${active ? 'active' : ''}`}>
                    <div className="finder__outer">
                        <div className="finder__inner">
                            <div className="finder__icon" />
                            <label htmlFor="newu" >Search term</label>
                            <input
                                className="finder__input"
                                placeholder={placeholder || 'Search...'}
                                onChange={onChange || null}
                                value={formData}
                                type="text"
                                id="newu"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .sb-container {
                    text-align: center;
                    color: #2c3e50;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    position: relative;
                }
                form {
                    transition: all 0.5s;
                    width: 100%;
                }
                .finder {
                    border: 1px solid #fff;
                    background-color: #ffffff;
                    border-radius: 15px;
                    padding: 8px;
                    box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.3), -9px -9px 16px rgba(255, 255, 255, 0.5);
                }
                label {
                    visibility: hidden;
                    display: none;
                }
                .finder__outer {
                    display: flex;
                    padding: 0.6rem 1.8rem;
                    border-radius: 10px;
                    box-shadow: inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #ffffff;
                }

                .finder__inner {
                    display: flex;
                    align-items: center;
                    position: relative;
                    flex: 1;
                }
                .finder__form {
                    flex: 1;
                    height: 100%;
                }
                .finder__input {
                    width: 100%;
                    border: none;
                    background-color: transparent;
                    outline: none;
                    font-size: 1.2rem;
                    color: 
                    letter-spacing: 0.75px;
                    color: ${colors.day};
                }
                .finder__input:placeholder {
                    color: ${colors.day};
                }
                .finder__icon {
                    width: 35px;
                    height: 35px;
                    margin-right: 1rem;
                    transition: all 0.2s;
                    box-shadow: inset 0 0 0 20px ${colors.day};
                    border-radius: 50%;
                    position: relative;
                }
                .finder__icon:after, .finder__icon:before {
                    display: block;
                    content: "";
                    position: absolute;
                    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
                .finder__icon:after {
                    width: 15px;
                    height: 15px;
                    background-color: ${colors.day};
                    border: 2px solid #f6f5f0;
                    top: 50%;
                    position: absolute;
                    transform: translateY(-50%);
                    left: 0px;
                    right: 0;
                    margin: auto;
                    border-radius: 50%;
                }
                .active .finder__icon:after {
                    border-width: 9px;
                    background-color: #f6f5f0;
                    width: 13px;
                    height: 13px;
                }
                .finder__icon:before {
                    width: 2px;
                    height: 21px;
                    background-color: #f6f5f0;
                    top: 50%;
                    left: 15px;
                    transform: rotateZ(45deg) translate(-50%, 0);
                    transform-origin: 0 0;
                    border-radius: 4px;
                }
                .active .finder__icon:before {
                    background-color: ${colors.day};
                    width: 4px;
                    transform: rotateZ(45deg) translate(-42%, 17px);
                    height: 13px;
                    top: 55%;
                    left: 12px;
                }
                .processing .finder__icon {
                    transform-origin: 50%;
                    animation: spinner 0.3s linear infinite;
                    animation-delay: 0.5s;
                }
                .active .finder__icon {
                    transform: translateY(-3px);
                    border: 4px solid white;
                }
                @keyframes spinner {
                    0% {
                        transform: rotateZ(45deg);
                    }
                    100% {
                        transform: rotateZ(405deg);
                    }
                }
            `}</style>
        </>
    )
}

export default NeuSearchBar