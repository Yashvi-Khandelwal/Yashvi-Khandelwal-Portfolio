import { useState } from 'react'
import './ContactForm.css'

export const ContactForm = () => {
    const [contactDetails, setcontactDetails] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setcontactDetails((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <div className="contact-form-container">
            {/* <h2>Get In Touch</h2> */}
            <div className="contact-form">
                <form action="">
                    <input
                        type="text"
                        name='name'
                        value={contactDetails.name}
                        onChange={handleInputChange}
                        placeholder='Your name'
                    />

                     <input
                        type="text"
                        name='email'
                        value={contactDetails.email}
                        onChange={handleInputChange}
                        placeholder='Your email'
                    />

                     <textarea
                        type="password"
                        name='message'
                        value={contactDetails.message}
                        onChange={handleInputChange}
                        autoComplete='off'
                        rows={6}
                        placeholder='Message'
                    />
                </form>
                <button type='submit'>Send Message</button>
            </div>

            <div className="contact-form-content">
                <h2>Let’s Connect 🤝</h2>
                <p>
                    I’m a fresher passionate about frontend & MERN development.
                    Open to full-time opportunities where I can contribute & grow.
                    Feel free to drop a message 
                </p>
            </div>
        </div>
    )
}