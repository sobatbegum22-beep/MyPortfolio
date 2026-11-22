import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../api/api";

function Contact() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    try {
      const data = await createItem("contacts", formData);
      if (data.error) {
        setError(data.error);
      } else {
        alert("Thank you for contacting me!");
        navigate("/");
      }
    } catch (err) {
      setError("Could not reach the server");
    }
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
        <p><strong>Phone:</strong> +1(437)-267-0852</p>
        <p><strong>Email:</strong> Sobatbegum22@gmail.com</p>
        <p><strong>linkedIn:</strong> www.linkedin.com/in/sobat-begum</p>
        <p><strong>Location:</strong> Toronto, Ontario, Canada</p>
      </div>

      <div className="contact-form">
        <h2>Send Me a Message</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname"
              value={formData.firstname} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname"
              value={formData.lastname} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Contact Number</label>
            <input type="tel" id="phone" name="phone"
              value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email"
              value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"
              value={formData.message} onChange={handleChange} required></textarea>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;