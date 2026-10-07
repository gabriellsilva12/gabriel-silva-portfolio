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
              Software developer focused on building modern web applications.
            </h3>

            <p>
              I build web applications with React and TypeScript on the
              front-end, focusing on modern, responsive, and functional
              interfaces.
            </p>

            <p>
              I also work with Node.js and Express on the back-end, building
              REST APIs, authentication systems, and database-driven
              applications.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}