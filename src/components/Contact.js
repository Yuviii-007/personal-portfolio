import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (formData.message.trim().length < 10)
      return "Message should be at least 10 characters.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const error = validateForm();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: "success",
        message: "Thanks! Your message has been received.",
      });
      setFormData(initialState);
    }, 1200);
  };

  return (
    <section className="contact-section" id="connect">
      <Container>
        <Row className="align-items-start">
          {/* LEFT CONTENT */}
          <Col md={5}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInLeft"
                      : ""
                  }
                >
                  <h1>Contact Us</h1>
                  <h2>Let’s Build Something Together</h2>
                  <p className="contact-subtext">
                    Have a project, idea, or opportunity? <br />
                    I usually respond within <strong>24 hours</strong>.
                  </p>

                  {/* CONTACT INFO */}
                  <div className="contact-info">
                    <p>
                      📧{" "}
                      <a href="mailto:yuvrajvaishnav86@gmail.com">
                        yuvrajvaishnav86@gmail.com
                      </a>
                    </p>
                    <p>
                      📞{" "}
                      <a href="tel:+918005798501">
                        +91 8005798501
                      </a>
                    </p>

                    <div className="contact-socials">
                      <a
                        href="https://www.linkedin.com/in/yuvraj-vaishnav/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/Yuviii-007"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://twitter.com/your-twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* FORM */}
          <Col md={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <form
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInRight contact-form"
                      : "contact-form"
                  }
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {status && (
                    <p
                      className={`form-status ${
                        status.type === "error"
                          ? "error"
                          : "success"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </form>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
