import './About.css'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


export const About = () => {
    const socials = [
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/yashvikhandelwal",
            label: "LinkedIn"
        },
        {
            icon: <FaGithub />,
            url: "https://github.com/Yashvi-Khandelwal",
            label: "GitHub"
        },
        {
            icon: <FaEnvelope />,
            url: "mailto:khandelwalyashvi427@gmail.com",
            label: "Email"
        }
    ];

    return (
        <div className="about-container">
            <div className="about-image">

            </div>
            <div className="about-content-container">
                <h1 className='about-heading'>About Me</h1>
                <div className="about-content">
                    <p>
                        I’m <strong>Yashvi Khandelwal</strong>, a Computer Engineering graduate
                        (May 2025) from Government Engineering College, Dahod. I am passionate about
                        <strong> Frontend Development</strong> and have hands-on experience with
                        <strong> HTML, CSS, JavaScript, and React.js</strong>. Along with that, I also
                        have knowledge of <strong>Java, Python (basics), and SQL</strong>, and I am
                        currently building my skills in the <strong>MERN stack</strong>. I am seeking
                        <strong> full-time opportunities</strong> where I can contribute my technical
                        expertise, grow as a developer, and continue learning new technologies .
                    </p>
                </div>
                <div className="about-social">
                    {
                        socials.map((currIcon, index) => (
                            <a
                                key={index}
                                href={currIcon.url}
                                target='_blank'
                                rel="noopener noreferrer"
                                aria-label={currIcon.label}
                            >
                                {currIcon.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}