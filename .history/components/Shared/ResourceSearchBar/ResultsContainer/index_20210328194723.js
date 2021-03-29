// Components
import SearchResult from './SearchResult'

const ResultsContainer = ({ Styles, Results, SlugPrefix }) => {
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
                                <SearchResult
                                    key={resource.Slug}
                                    Title={resource.Title}
                                    Slug={`${SlugPrefix || ''}/${resource.Slug}`}
                                    Thumbnail={resource?.Thumbnail?.formats?.small?.url}
                                />
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