import { useState } from 'react'
// Theme
import { colors, fonts } from 'styles/theme'
// Components
import Button from 'react-bootstrap/Button'
import Input from 'components/Shared/Input'

const NewsLetterSignup = () => {

    const [formData, setFormData] = useState('')

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        window.alert(`${formData}`)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} >
                    <h5>Subscribe to our newsletter</h5>
                    <span>Cloud computing news and announcements.</span>
                    <label>Email</label>
                    <Input
                        label="Email"
                        placeholder="Enter your email..."
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setFormData(e.target.value)}
                        value={formData}
                        required
                    />
                    <Button
                        type="submit"
                        variant="brand"
                    >
                        Sign Me Up
                    </Button>
                </form>
            </div>
            <style jsx>{`
                div {
                    border-left: 2px solid ${colors.day};
                    padding: 0 0 0 15px;
                    border-radius: 2px 0 0 2px;
                }
                label {
                    display: block;
                    margin: 0 0 10px 0;
                }
                form :global(input) {
                    margin: 0 0 15px 0;
                }
                h5 {
                    text-transform: uppercase;
                    color: ${colors.lightGray};
                    margin: 0;
                    font-family: ${fonts.secondary} !important;
                }
                span {
                    margin: 15px 0;
                }
                form {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </>
    )
}

export default NewsLetterSignup