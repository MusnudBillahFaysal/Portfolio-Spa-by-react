import React, { useState } from 'react';

function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const API_BASE_URL = 'http://dev.mydomain.com:3001'; // Replace port as needed

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Reset the form after successful submission
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.log('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <div className="contact-page">
        <div className="content-box-contact">
          <h6 className="get-in-touch">Get in touch</h6>
          <p>Our friendly team would love to hear from you.</p>
          <form className="contact-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name">First Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="form-group-1">
              <label htmlFor="subject">Subject:</label>
              <br />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group-2">
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="send-message button">
              <button
                className="send-message button"
                type="button" // Change "type" attribute to "button"
                onClick={handleSubmit} // Call the handleSubmit function on click
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="image-contact">
          <img
            src="/images/contact-bg.png"
            alt="Image"
            className="w-588 h-656"
          />

          <ul className="contact-infos">
            <li>
              <div className="icon bg-1">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="col">
                <h5>Phone</h5>
                <p>+01 123 654 8096</p>
              </div>
            </li>
            <li>
              <div className="icon bg-2">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="col">
                <h5>Mail</h5>
                <p>info@domainname.com</p>
              </div>
            </li>
            <li>
              <div className="icon bg-3">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="col">
                <h5>Visit My Studio</h5>
                <p>
                  Warnwe Park Streetperrine, <br />
                  FL 33157 New York City
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
