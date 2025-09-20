import { useEffect, useState, useRef } from 'react'
import './ContactForm.css'
export const ContactForm = () => {
    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });


    const validate = () => {
        const newErrors = {};

        // Name validation
        if (!contactDetails.name.trim()) {
            newErrors.name = "Name is required";
        } else if (contactDetails.name.trim().length < 2) {
            newErrors.name = "Name should be at least 2 characters";
        } else if (!/^[a-zA-Z\s'-]+$/.test(contactDetails.name)) {
            newErrors.name = "Name can only contain letters";
        }

        // Email validation
        if (!contactDetails.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(contactDetails.email)) {
            newErrors.email = "Email is invalid";
        }

        // Message validation
        if (!contactDetails.message.trim()) {
            newErrors.message = "Message is required";
        } else if (contactDetails.message.trim().length < 10) {
            newErrors.message = "Message should be at least 10 characters";
        }

        setErrors(newErrors);

        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {

        setTouched({ name: true, email: true, message: true });
        if (!validate()) {
            e.preventDefault(); // only block if invalid
        }
        if (validate()) {
            console.log("Form Data:", contactDetails);
            setContactDetails({ name: "", email: "", message: "" });
            setErrors({});
        } else {
            console.log("Validation failed");
        }
        console.log(contactDetails);
    };

    return (
        <section className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-grid">

                {/* Left: Form Card */}
                <div className="card contact-form-card">
                    <h3>📩 Send me a message</h3>
                    <form onSubmit={handleSubmit}
                        action="mailto:khandelwalyashvi427@gmail.com"
                        method="POST"
                        encType="text/plain">
                        <input
                            type="text"
                            name="name"
                            value={contactDetails.name}
                            onChange={handleInputChange}
                            onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                            placeholder="Your Name"
                            required
                        />
                        {touched.name && errors.name && <span className="error">{errors.name}</span>}

                        <input
                            type="email"
                            name="email"
                            value={contactDetails.email}
                            onChange={handleInputChange}
                            onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                            placeholder="Your Email"
                            required
                        />
                        {touched.email && errors.email && <span className="error">{errors.email}</span>}


                        <textarea
                            name="message"
                            value={contactDetails.message}
                            onChange={handleInputChange}
                            onBlur={() => setTouched(prev => ({ ...prev, message: true }))}
                            rows={5}
                            placeholder="Your Message"
                            required
                        />
                        {touched.message && errors.message && <span className="error">{errors.message}</span>}
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="right-column">
                    <div className="card">
                        <h2>Let’s Connect 🤝</h2>
                        <p>
                            Excited to connect and explore opportunities where I can learn, grow, and contribute.
                            If you’re hiring, I’d love to be considered!
                        </p>
                    </div>

                    <div className="card">
                        <p>
                            I’m a fresher passionate about frontend and MERN development.
                            Always eager to learn new skills, take on challenges, and contribute meaningfully to projects.
                            Open to full-time opportunities where I can grow along with the team.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

