import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">

            <h1>Welcome to My Portfolio</h1>

            <p>
                Hello! My name is Sobat Begum, and I am a Software Engineering
                Technology student passionate about technology, programming,
                and creating useful digital solutions.
            </p>

            <p>
                I am continuously developing my skills in software development,
                web development, databases, and problem-solving.
            </p>

            <h2>My Mission</h2>

            <p>
                My mission is to continue learning, build meaningful software,
                and use technology to create practical solutions for users
                and organizations.
            </p>

            <div>
                <Link to="/about" className="button">
                    Learn More About Me
                </Link>

                <Link to="/projects" className="button">
                    View My Projects
                </Link>
            </div>

        </div>
    );
}

export default Home;