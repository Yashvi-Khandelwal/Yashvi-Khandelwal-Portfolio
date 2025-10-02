import { useState } from 'react'
import './ContactForm.css'
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    const [isSending, setIsSending] = useState(false);


    const validate = () => {
        const newErrors = {};

        if (!contactDetails.name.trim()) {
            newErrors.name = "Name is required";
        } else if (contactDetails.name.trim().length < 2) {
            newErrors.name = "Name should be at least 2 characters";
        } else if (!/^[a-zA-Z\s'-]+$/.test(contactDetails.name)) {
            newErrors.name = "Name can only contain letters";
        }

        if (!contactDetails.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(contactDetails.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!contactDetails.message.trim()) {
            newErrors.message = "Message is required";
        } else if (contactDetails.message.trim().length < 10) {
            newErrors.message = "Message should be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactDetails((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        setTouched({ name: true, email: true, message: true });

        const isValid = validate();
        if (!isValid) {
            toast.warn("Please fill the form correctly.");
            return;
        }

        setIsSending(true);

        emailjs
            .send(
                "service_m730d7l",
                "template_6spofug",
                {
                    from_name: contactDetails.name,
                    from_email: contactDetails.email,
                    message: contactDetails.message,
                },
                "P5G3dELTu5hjBYSBL"
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    toast.success("Thank you! Your message has been sent.");
                    setContactDetails({ name: "", email: "", message: "" });
                    setErrors({});
                    setIsSending(false);
                },
                (error) => {
                    console.error("Email error:", error.text);
                    toast.error("Oops! Something went wrong. Try again.");
                    setIsSending(false);
                }
            );
    };



    return (
        <section className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-grid">
                <div className="card contact-form-card">
                    <h3>📩 Send me a message</h3>
                    <form onSubmit={handleSubmit}
                        noValidate
                    >
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
                        <button type="submit" disabled={isSending}>
                            {isSending ? "Sending..." : "Send Message"}</button>
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
            <ToastContainer position="top-right" autoClose={3000} />

        </section>
    );
};

