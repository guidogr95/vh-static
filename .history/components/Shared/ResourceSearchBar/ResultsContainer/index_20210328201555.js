import { useRef } from 'react'
// Utils
import useOnScreen from 'utils/useOnScreen'
// Components
import SearchResult from './SearchResult'

const ResultsContainer = ({ Styles, Results, SlugPrefix }) => {

    const visorRef = useRef()

    const onScreen = useOnScreen(visorRef, '-10px')
    console.log(onScreen)

    return (
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
                    <div id="visor" style={{ height: '20px' }} ref={visorRef}/>
                </div>
            </div>
        </div>
    )
}

export default ResultsContainer