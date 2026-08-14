import "./Footer.css";
import Container from "../Container/Container";
import { social } from "../../data/socials";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand">
            <h2>Gabriel Silva</h2>
            <p>Front-end Developer</p>
          </div>

          <div className="footer-links">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href={social.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href={social.email}>
              Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Gabriel Silva</span>

          <span>Built with React + TypeScript</span>
        </div>
      </Container>
    </footer>
  );
}