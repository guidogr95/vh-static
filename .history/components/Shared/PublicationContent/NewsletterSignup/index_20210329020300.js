import { useState } from 'react'
// Theme
import { colors, fonts } from 'styles/theme'
// Components
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Input from 'components/Shared/Input'
// Config
import { weeklyDiggest } from 'config/hubspot/forms'

const NewsLetterSignup = () => {

    const { portalId, formId } = weeklyDiggest

    const initialFormData = {
        firstname: '',
        lastname: '',
        email: ''
    }
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })
    const [loading, setLoading] = useState(false)
    const initialButtonState = 'Sign Me Up'
    const [buttonText, setButtonText] = useState('Sign Me Up')

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const { firstname, lastname, email } = formData

    const handleSubmit = async (e) => {
        if (e) e.preventDefault()
        setLoading(true)
        const { default: hubspotSubmit } = await import('hubspot-form-submit')
        hubspotSubmit(
            portalId,
            formId,
            {
              email,
              firstname,
              lastname
            }
        )
        .then(res => setButtonText('Thanks For Subscribing!'))
        .finally(() => setLoading(false))

        setTimeout(() => {
            setButtonText(initialButtonState)
        }, 1000)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} >
                    <h5>Subscribe to our weekly diggest</h5>
                    <span>Cloud computing news and announcements.</span>
                    <label htmlFor="firstname" >First name</label>
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
                    <label htmlFor="lastname" >Last name</label>
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
                    <label htmlFor="Email" >Email</label>
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
                        disabled={loading}
                    >
                        { loading
                            ? <Spinner animation="border" size="sm" />
                            : buttonText
                        }
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
                    line-height: 1.3;
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