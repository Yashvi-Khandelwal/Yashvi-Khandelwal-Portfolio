import './Home.css'

export const Home = () =>{
    return(
        <div className="home-section">
            <div className="hero-section">
                <h1 className="fullName">
                    Hi, I am Yashvi 
                </h1>
                <div className="short-intro">
                    A fresher passionate about Web Develepment eager to learn and create user-friendly designs.
                </div>
                <div className="resume">
                    <a href="/resume.pdf" download="Yashvi_Khandelwal_Resume.pdf" aria-label="Download resume">
                    <button type="submit">Resume</button>
                    </a>
                </div>
            </div>

            <div className="image">
        
            </div>
        </div>
    )
}