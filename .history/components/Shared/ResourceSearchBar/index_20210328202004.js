import { useEffect, useRef, useState } from 'react'
// Components
import NeuSearchBar from 'components/Shared/NeuSearchBar'
import ResultsContainer from './ResultsContainer'
// Utils
import { useSpringUtils } from 'context/springContext'
import useOnClickOutside from 'utils/useOnClickOutside'
import useDebounce from 'utils/useDebounce'
// Theme
import { colors } from 'styles/theme'

const ResourceSearchBar = ({ Resources, SlugPrefix, Placeholder }) => {

    const { Transition } = useSpringUtils()

    const resultsRef = useRef(null)
    useOnClickOutside(resultsRef, () => resultsActive && setResultsActive(false))

    const [formData, setFormData] = useState('')
    const [results, setResults] = useState([])

    const [resultsActive, setResultsActive] = useState(false)

    const focusInput = () => {
        if (!resultsActive) setResultsActive(true)
    }

    const handleInput = (e) => {
        setFormData(e.target.value)
    }

    const debouncedFormData = useDebounce(formData, 300)

    useEffect(() => {
        const searchPhrase = debouncedFormData.trim().toLowerCase()
        const searchResults = Resources.filter(resource => resource.Title.toLowerCase().includes(searchPhrase))
        setResults(searchResults)
    }, [debouncedFormData])

    return (
        <>
            <div className="sr-container" ref={resultsRef}>
                <div className="sb-wrapper" >
                    <NeuSearchBar
                        onChange={handleInput}
                        formData={formData}
                        placeholder={Placeholder || 'Search...'}
                        onFocus={focusInput}
                    />
                </div>
                    <Transition
                        items={debouncedFormData.trim().length > 0 && resultsActive}
                        from={{ opacity: 0, transform: 'translateY(-10px)' }}
                        enter={{ opacity: 1, transform: 'translateY(0px)' }}
                        leave={{ opacity: 0, transform: 'translateY(-10px)' }}>
                        {show => show && (Styles => <ResultsContainer Styles={Styles} Results={results} SlugPrefix={SlugPrefix} />)}
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
            `}</style>
        </>
    )
}

export default ResourceSearchBar