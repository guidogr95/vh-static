// Components
import FallbackScreen from 'components/Shared/FallbackScreen'
// Utils
import { useRouter } from 'next/router'

const FallbackController = ({ children }) => {

    const router = useRouter()

    if (router.isFallback) {
        return (
            <FallbackScreen />
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default FallbackController