import { useState } from 'react'
// Components
import Input from 'components/Shared/Input'
import TextArea from 'components/Shared/TextArea'
import Button from 'react-bootstrap/Button'
// Theme
import { breakpoints, mediumBorderRadius } from 'styles/theme'

const ContactFormBasic = () => {

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const { email, message } = formData

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    if (e) e.preventDefault()
    window.alert('triggered')
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmit} >
          <h1 className="gradientFont-day mb-small" >Public and private clouds</h1>
          <p className="mb-regular fw-300" >Secure Openstack base solutions for enterprise & developers</p>
          <Input
            label="Email"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            onChange={handleInput}
            value={email}
            required
            className="mb-regular"
          />
          <TextArea
            placeholder="Message"
            name="message"
            id="message"
            onChange={handleInput}
            value={message}
            required
            className="mb-regular"
          />
          <Button
            type="submit"
            variant="brand"
          >
            LET'S TALK
          </Button>
        </form>
      </div>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
        }
        @media screen and (max-width: ${breakpoints.tabletLarge}) {
          h1 {
            font-size: 2.2rem;
          }
          div,
          form,
          form :global(button) {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default ContactFormBasic