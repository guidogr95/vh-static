import { useRef, useState } from 'react'
// Components
import NeuSearchBar from 'components/Shared/NeuSearchBar'
import TutorialSearchResult from './TutorialSearchResult'
// Utils
import { useSpringUtils } from 'context/springContext'
import useOnClickOutside from 'utils/useOnClickOutside'
import { colors } from 'styles/theme'

const TutorialSearchBar = ({ Tutorials }) => {

    const { Transition } = useSpringUtils()

    const resultsRef = useRef(null)
    useOnClickOutside(resultsRef, () => resultsActive && setResultsActive(false))

    const [formData, setFormData] = useState('')

    const [resultsActive, setResultsActive] = useState(false)

    const focusInput = () => {
        if (!resultsActive) setResultsActive(true)
    }

    const handleInput = (e) => {
        setFormData(e.target.value)
    }

    const ResultsContainer = (props) => {
        const searchPhrase = formData.trim().toLowerCase()
        const searchResults = Tutorials.filter(tutorial => tutorial.Title.toLowerCase().includes(searchPhrase))
        return (
            <div
                className="results-container"
                style={props}
            >
                <div className="results-wrapper" >
                    <div className="_wrapper-inner" >
                        { searchResults.length > 0
                            ? searchResults.map(tutorial => {
                                return (
                                    <TutorialSearchResult
                                        key={tutorial.Slug}
                                        Title={tutorial.Title}
                                        Slug={`/resources/tutorials/${tutorial.Slug}`}
                                        Thumbnail={tutorial?.Thumbnail?.formats?.small?.url || tutorial?.Thumbnail?.url}
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

    return (
        <>
            <div className="sr-container" ref={resultsRef}>
                <div className="sb-wrapper" >
                    <NeuSearchBar
                        onChange={handleInput}
                        formData={formData}
                        placeholder="Search Tutorials..."
                        onFocus={focusInput}
                    />
                </div>
                    <Transition
                        items={formData.trim().length > 0 && resultsActive}
                        from={{ opacity: 0, transform: 'translateY(-10px)' }}
                        enter={{ opacity: 1, transform: 'translateY(0px)' }}
                        leave={{ opacity: 0, transform: 'translateY(-10px)' }}>
                        {show => show && (props => <ResultsContainer {...props} />)}
                    </Transition>
            </div>
            <style jsx>{`
                .sr-container {
                    margin-bottom: 45px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    z-index: 2;
                }
                .sr-container :global(.results-container) {
                    position: relative;
                }
                .sr-container :global(.results-wrapper) {
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
                .sr-container :global(.results-wrapper ._wrapper-inner) {
                    border-radius: 10px;
                    box-shadow: inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #ffffff;
                    max-height: 450px;
                    overflow: auto;
                }
                .sr-container :global(.emptyRes) {
                    padding: 1.4rem 1.8rem;
                    margin-bottom: 0;
                    color: ${colors.lightGray};
                }
            `}</style>
        </>
    )
}

export default TutorialSearchBar