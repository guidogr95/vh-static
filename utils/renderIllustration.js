// Components
import Resources from 'components/Shared/Illustrations/Resources'
import Whitepaper from 'components/Shared/Illustrations/Whitepaper'
import Tutorials from 'components/Shared/Illustrations/Tutorials'

const renderIllustration = (name) => {
    switch (name) {
        case 'Resources':
            return <Resources />
        case 'Whitepapers':
            return <Whitepaper />
        case 'Tutorials':
            return <Tutorials />
        default:
            return null
    }

}

export default renderIllustration