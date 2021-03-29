import { useEffect, useRef, useState } from 'react'
// Utils
import useOnScreen from 'utils/useOnScreen'
import useDebounce from 'utils/useDebounce'
// Components
import SearchResult from './SearchResult'
// Theme
import { colors } from 'styles/theme'

const ResultsContainer = ({ Styles, Results, SlugPrefix }) => {

    const visorRef = useRef()

    const [nResults, setNResults] = useState(8)
    const addOnInfinity = 8

    const onScreen = useOnScreen(visorRef, '-1px', Results.length > 0)

    const resetResults = () => {
        nResults !== addOnInfinity && setNResults(8)
    }

    const debouncedAddItems = useDebounce(() => {
        setNResults(nResults + addOnInfinity)
    }, 400)

    useEffect(() => {
        resetResults()
    }, [Results])

    useEffect(() => {
        let timer = null
        if (Results.length > 8 && onScreen) {
            timer = setTimeout(() => {
                setNResults(nResults + addOnInfinity)
            }, 300)
        }

        return () => {
            timer && clearTimeout(timer)
        }
    }, [onScreen])

    return (
        <>
            <div
                className="results-container"
                style={Styles}
            >
                <div className="results-wrapper" >
                    <div className="_wrapper-inner" >
                        { Results.length > 0
                            ? Results.slice(0, nResults).map((resource, index) => {
                                return (
                                    <>
                                        <SearchResult
                                            key={`${resource.Slug}${index}`}
                                            Title={resource.Title}
                                            Slug={`${SlugPrefix || ''}/${resource.Slug}`}
                                            Thumbnail={resource?.Thumbnail?.formats?.small?.url}
                                        />
                                    </>
                                )
                            })
                            : <h5 className="emptyRes" >Your search did not match any tutorials</h5>
                        }
                        <div id="visor" ref={visorRef}/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                #visor {
                    height: 2px;
                }
                .results-container {
                    position: relative;
                }
                .results-wrapper {
                    position: absolute;
                    top: 25px;
                    right: 0;
                    left: 0;
                    background: black;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #fff;
                    background-color: #ffffff;
                    border-radius: 15px;
                    padding: 8px;
                    box-shadow: 9px 9px 16px rgb(189 189 189 / 30%), -9px -9px 16px rgb(255 255 255 / 50%);
                    border-radius: 10px;
                }
                .results-wrapper ._wrapper-inner {
                    border-radius: 10px;
                    box-shadow: inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #ffffff;
                    max-height: 450px;
                    overflow: auto;
                }
                .emptyRes {
                    padding: 1.4rem 1.8rem;
                    margin-bottom: 0;
                    color: ${colors.lightGray};
                }
            `}</style>
        </>
    )
}

export default ResultsContainer