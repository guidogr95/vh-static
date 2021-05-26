import { useState } from 'react'
// Components
import Input from 'components/Shared/Input'
// Utils
import Button from 'react-bootstrap/Button'
import { borderRadius, colors } from 'styles/theme'

const SignupForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    const { name, email } = formData

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        window.alert(`${name}, ${email}`)
    }

    return (
        <>
            <div className="form-wrapper" >
                <h5>Fill out the form to receive your copy...</h5>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="email" >Email</label>
                    <Input
                        onChange={handleInput}
                        id="email"
                        type="email"
                        autoComplete="off"
                        required
                        value={email}
                        name="email"
                        placeholder="Enter your email..."
                    />
                    <label htmlFor="name" >Name</label>
                    <Input
                        onChange={handleInput}
                        id="name"
                        autoComplete="off"
                        required
                        value={name}
                        name="name"
                        placeholder="Enter your name..."
                    />
                    <Button
                        type="submit"
                        variant="brand"
                    >
                        Download
                    </Button>
                </form>
                <div className="notice-wrapper" >
                    <span>
                        By clicking “Download” I accept the Terms of Service, the Anti-Spam Policy, and the Privacy Policy. Accessibility info.
                    </span>
                </div>
            </div>
            <style jsx>{`
                .notice-wrapper {
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    left: 0;
                    bottom: -90px;
                    right: 0;
                }
                span {
                    max-width: 250px;
                    text-align: center;
                    font-size: 0.85em;
                    color: rgba(50, 50, 50, 0.6);
                }
                h5 {
                    margin-bottom: 30px;
                }
                .form-wrapper {
                    max-width: 400px;
                    width: 100%;
                    background: rgb(250, 250, 250);
                    backdrop-filter: blur(10px);
                    padding: 20px;
                    border-radius: ${borderRadius};
                    box-shadow:  20px 20px 60px #aa9dd3aa, -20px -20px 60px #e6d5ff10;
                    position: relative;
                }
                form {
                    display: flex;
                    flex-direction: column;
                }
                form :global(button) {
                    width: 100%;
                }
                label {
                    display: block;
                    margin-bottom: 10px;
                    color: ${colors.gray};
                }
                form :global(input),
                form :global(button) {
                    padding: 0.8rem 0.75rem;
                    height: initial;
                }
                form :global(button) {
                    text-transform: uppercase;
                }
                form :global(input) {
                    margin-bottom: 30px;
                }
            `}</style>
        </>
    )
}

export default SignupForm