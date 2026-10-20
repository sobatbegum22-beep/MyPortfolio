import profileImage from "../assets/profile.jpg";
import resumeFile from "../assets/resume.pdf";

function About() {
    return (
        <div className="about-container">

            <h1>About Me</h1>

            <img
                src={profileImage}
                alt="Sobat Begum"
                className="profile-image"
            />

            <h2>Sobat Begum</h2>

            <p>
                I am a Software Engineering Technology student with an interest
                in software development, web development, databases, and
                problem-solving. I enjoy learning new technologies and applying
                my skills through hands-on projects.
            </p>

            <p>
                Through my studies and projects, I have developed experience
                working with programming languages such as Java, Python, and C#,
                as well as web technologies, databases, and software development
                tools.
            </p>

            <p>
                My goal is to continue developing my technical skills and gain
                practical experience in the software engineering industry.
            </p>

            <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
            >
                View My Resume
            </a>

        </div>
    );
}

export default About;