import { useRef } from 'react'
// Utils
import useOnScreen from 'utils/useOnScreen'
// Components
import SearchResult from './SearchResult'
// Theme
import { colors } from 'styles/theme'

const ResultsContainer = ({ Styles, Results, SlugPrefix }) => {

    const visorRef = useRef()

    const onScreen = useOnScreen(visorRef, '-10px')
    console.log(onScreen)

    return (
        <>
            <div
                className="results-container"
                style={Styles}
            >
                <div className="results-wrapper" >
                    <div className="_wrapper-inner" >
                        { Results.length > 0
                            ? Results.map((resource, index) => {
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
                    height: 20px;
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