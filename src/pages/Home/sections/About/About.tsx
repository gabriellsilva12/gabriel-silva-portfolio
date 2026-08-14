import "./About.css";
import Container from "../../../../components/Container/Container";

export default function About() {
  return (
    <section className="about section" id="about">
      <Container>
        <div className="about-header">
          <span className="section-label">About me</span>

          <h2 className="section-title">
            Get to know a little
            <span> about me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-visual">
            <div className="about-card">
              <img
                src="/gabriel.png"
                alt="Gabriel Silva"
                className="about-photo"
              />
            </div>
          </div>

          <div className="about-info">
            <h3>
              Front-end developer focused on building modern web applications.
            </h3>

            <p>
              I build web applications with a focus on modern, responsive, and
              functional interfaces, always aiming to combine a great user
              experience with clean code and efficient solutions.
            </p>

            <p>
              My main focus is Front-end development, with additional knowledge
              of Back-end development, APIs, and database integration.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}