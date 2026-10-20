import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("Thank you for contacting me!");

    navigate("/");
  }

  return (
    <div className="contact-container">

      <h1>Contact Me</h1>

      <p>
        I would be happy to hear from you. You can contact me using
        the information below or send me a message through the form.
      </p>

      <div className="contact-info">

        <h2>Contact Information</h2>

        <p>
          <strong>Phone:</strong> +1(437)-267-0852
        </p>

        <p>
          <strong>Email:</strong> Sobatbegum22@gmail.com
        </p>

        <p>
          <strong>linkedIn:</strong> www.linkedin.com/in/sobat-begum
        </p>

        <p>
          <strong>Location:</strong> Toronto, Ontario, Canada
        </p>

      </div>

      <div className="contact-form">

        <h2>Send Me a Message</h2>

        <form onSubmit={handleSubmit}>

          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName">
              First Name
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name
            </label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="phone">
              Contact Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;