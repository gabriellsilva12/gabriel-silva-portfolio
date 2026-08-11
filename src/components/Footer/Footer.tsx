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
            <p>Desenvolvedor Front-end</p>
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

            <a
              href={social.email}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Gabriel</span>

          <span>Feito com React + TypeScript</span>
        </div>
      </Container>
    </footer>
  );
}
