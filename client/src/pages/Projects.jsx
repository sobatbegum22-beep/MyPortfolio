import smartParkingImage from "../assets/smart-parking.jpg";
import umberSpaImage from "../assets/umber-spa.jpg";
import todoListImage from "../assets/todo-list.jpg";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>

      <p>
        Here are some of the software and web development projects I have
        worked on during my studies.
      </p>

      <div className="projects-container">

        {/* Smart Parking Project */}
        <div className="project-card">

          <img
            src={smartParkingImage}
            alt="Smart Parking System project"
            className="project-image"
          />

          <h2>Smart Parking System</h2>

          <p>
            A Smart Parking platform designed to help drivers find
            available parking spaces and view information about parking
            availability.
          </p>

          <p>
            <strong>My Role:</strong> Designed the system requirements,
            database concepts, and application features.
          </p>

          <p>
            <strong>Outcome:</strong> Created a detailed software
            requirements design for a web and mobile parking platform.
          </p>

        </div>


        {/* Umber Spa Project */}
        <div className="project-card">

          <img
            src={umberSpaImage}
            alt="Umber Spa website project"
            className="project-image"
          />

          <h2>Umber Spa Website</h2>

          <p>
            A modern spa website created using HTML, CSS, and JavaScript.
            The website includes services, appointment booking, simulated
            payment, and a site map.
          </p>

          <p>
            <strong>My Role:</strong> Designed and developed the website,
            including the layout, styling, and interactive features.
          </p>

          <p>
            <strong>Outcome:</strong> Created a functional multi-page spa
            website with a professional design.
          </p>

        </div>


        {/* To-Do List Project */}
        <div className="project-card">

          <img
            src={todoListImage}
            alt="To-Do List Manager project"
            className="project-image"
          />

          <h2>To-Do List Manager</h2>

          <p>
            A desktop task management application developed using C#
            and WPF.
          </p>

          <p>
            <strong>My Role:</strong> Developed the interface and
            functionality for adding, displaying, and removing tasks.
          </p>

          <p>
            <strong>Outcome:</strong> Created a working desktop application
            that allows users to manage their tasks.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Projects;