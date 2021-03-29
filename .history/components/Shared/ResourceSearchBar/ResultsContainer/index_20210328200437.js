import { useRef } from 'react'
// Utils
import useOnScreen from 'utils/useOnScreen'
// Components
import SearchResult from './SearchResult'

const ResultsContainer = ({ Styles, Results, SlugPrefix }) => {

    const visorRef = useRef()

    const onScreen = useOnScreen(visorRef, '-10px')

    return (
        <div
            className="results-container"
            style={Styles}
        >
            <div className="results-wrapper" >
                <div className="_wrapper-inner" >
                    { Results.length > 0
                        ? Results.map(resource => {
                            return (
                                <>
                                    <SearchResult
                                        key={resource.Slug}
                                        Title={resource.Title}
                                        Slug={`${SlugPrefix || ''}/${resource.Slug}`}
                                        Thumbnail={resource?.Thumbnail?.formats?.small?.url}
                                    />
                                    <div id="visor" ref={visorRef}/>
                                </>
                            )
                        })
                        : <h5 className="emptyRes" >Your search did not match any tutorials</h5>
                    }
                </div>
            </div>
        </div>
    )
}

export default ResultsContainer