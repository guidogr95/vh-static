// Theme
import { colors } from 'styles/theme'
// Components
import SignupForm from './SignupForm'

const ResourceSignup = ({ BookCover }) => {
    return (
        <>
            <aside>
                <div className="separator" />
                <img src={BookCover} alt="book cover" />
                <SignupForm />
            </aside>
            <style jsx>{`
                aside {
                    background: ${colors.dayLight};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                .separator {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: -15px;
                    display: flex;
                    align-items: center;
                }
                .separator:after {
                    content: '';
                    background: white;
                    height: 30px;
                    width: 30px;
                    transform: rotate(45deg);
                }
                img {
                    height: 300px;
                    box-shadow:  20px 20px 60px #aa9dd3, -20px -20px 60px #e6d5ff;
                    margin-bottom: 50px;
                }
            `}</style>
        </>
    )
}

export default ResourceSignup