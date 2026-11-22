import AdminSection from "../components/AdminSection";

function Services() {
  return (
    <div>
      <h1>My Services</h1>

      <p>
        I offer technology and software development services based on
        my skills and experience.
      </p>

      <div className="services-container">

        <div className="service-card">
          <h2>💻 Web Development</h2>
          <p>
            Creating responsive and user-friendly websites using HTML,
            CSS, JavaScript, and React.
          </p>
        </div>

        <div className="service-card">
          <h2>👩‍💻 Programming</h2>
          <p>Developing programming solutions using Java, Python, and C#.</p>
        </div>

        <div className="service-card">
          <h2>⚙️ Software Development</h2>
          <p>
            Building software applications based on user and project
            requirements.
          </p>
        </div>

        <div className="service-card">
          <h2>🗄️ Database Development</h2>
          <p>
            Working with SQL and databases to organize, manage, and
            retrieve information.
          </p>
        </div>

      </div>

      {/* New entries from the database + admin add box */}
      <AdminSection
        resource="services"
        addTitle="Add New Service"
        cardClass="service-card"
        listClass="services-container"
        fields={[
          { name: "title", label: "Title (you can start with an emoji, e.g. 🎨 Web Design)", required: true },
          { name: "description", label: "Description", textarea: true }
        ]}
        renderItem={(item) => (
          <>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </>
        )}
      />
    </div>
  );
}

export default Services;

