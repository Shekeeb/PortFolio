export default function Home() {
    return (
        <div className="home" id="home">
            <div className="home-content">
                <h1>Hi, I'm Mohammed Shekeeb</h1>
                <h3>MERN Stack Developer</h3>
                <p>
                    A passionate MERN Stack Developer with hands-on experience building full-stack web and mobile
                    applications. Currently working as a Junior Software Engineer at Acqodis Technologies, leading
                    projects and crafting scalable, user-friendly solutions using React, Node.js, Express, and MongoDB.
                </p>
                <div className="button">
                    <a href="mailto:shekeebmohammed10@gmail.com" target="_blank" rel="noreferrer">Hire Me</a>
                    <a href="https://api.whatsapp.com/send?phone=918714535257&text=Hi%20Bro%20%F0%9F%91%8B" target="_blank" rel="noreferrer">Let's Talk</a>
                </div>
            </div>
            <div className="profile">
                <img src="/images/coder.png" alt="coder" />
            </div>
        </div>
    );
}
