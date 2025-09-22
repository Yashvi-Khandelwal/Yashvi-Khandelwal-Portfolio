import './Home.css'

export const Home = () =>{
    return(
        <div className="home-section">

         <div className="image">
        
            </div>

            <div className="hero-section">
                <h1 className="fullName">
                    Hi, I am <span className='highlight'> Yashvi</span> 
                </h1>
                <p className="short-intro">
                    A fresher passionate about Web Develepment eager to learn and create user-friendly designs.
                </p>
                <div className="resume">
                    <a href="/resume.pdf" download="Yashvi_Khandelwal_Resume.pdf" aria-label="Download resume">
                    <button type="button">Resume</button>
                    </a>
                </div>
            </div>

           
        </div>
    )
}