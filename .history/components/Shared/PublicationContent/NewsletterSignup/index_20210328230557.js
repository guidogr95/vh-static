import { useState } from 'react'
// Theme
import { colors, fonts } from 'styles/theme'
// Components
import Button from 'react-bootstrap/Button'
import Input from 'components/Shared/Input'
// Utils
import hubspotSubmit from 'utils/imports'

const NewsLetterSignup = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const { firstname, lastname, email } = formData

    const handleSubmit = async (e) => {
        if (e) e.preventDefault()
        const submitted = await hubspotSubmit(
            '3344191',
            '4e5f73b2-b24b-4b86-bbc4-93c7f2582dc6',
            {
              email: 'luserob76@qbknowsfq.com',
              firstname: 'John',
              lastname: 'Doe'
            }
        )
        if (submitted) {
            console.log('Done!', submitted)
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} >
                    <h5>Subscribe to our newsletter</h5>
                    <span>Cloud computing news and announcements.</span>
                    <label>Email</label>
                    <Input
                        label="First name"
                        placeholder="Enter your name..."
                        type="text"
                        name="firstname"
                        id="firstname"
                        onChange={handleInput}
                        value={firstname}
                        required
                    />
                    <Input
                        label="Last Name"
                        placeholder="Enter your last name..."
                        type="text"
                        name="lastname"
                        id="lastname"
                        onChange={handleInput}
                        value={lastname}
                        required
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email..."
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleInput}
                        value={email}
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