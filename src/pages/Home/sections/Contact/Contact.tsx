import "./Contact.css";
import Container from "../../../../components/Container/Container";
import { social } from "../../../../data/socials";
import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xgawzppo");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleStatesForm = () => {
      if (state.succeeded) {
        setName("");
        setEmail("");
        setMessage("");
      }
    };

    handleStatesForm();
  }, [state.succeeded]);

  return (
    <section className="contact section" id="contact">
      <Container>
        <div className="contact-header">
          <span className="section-label">Contact</span>

          <p className="contact-description">
            Have a project in mind or an opportunity you'd like to discuss? Feel
            free to get in touch.
          </p>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="name">Your name</label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Your email</label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Your message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
              />
            </div>

            {!state.succeeded && (
              <button
                type="submit"
                className="contact-button"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send message"}
              </button>
            )}

            {state.succeeded && (
              <button
                type="submit"
                className="contact-button"
                disabled={!state.submitting}
              >
                Message sent successfully!
              </button>
            )}
          </form>

          <div className="contact-info">
            <div className="contact-item">
              <span>GitHub</span>

              <a href={social.github} target="_blank" rel="noopener noreferrer">
                gabriellsilva12
              </a>
            </div>

            <div className="contact-item">
              <span>LinkedIn</span>

              <a
                href={social.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                gabrielsilva-dev2
              </a>
            </div>

            <div className="contact-item">
              <span>Email</span>

              <a href={social.email}>gabrielsilvadev2@gmail.com</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
