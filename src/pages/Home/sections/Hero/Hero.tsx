import "./Hero.css";
import Container from "../../../../components/Container/Container";
import { social } from "../../../../data/socials";

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <Container>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">Olá, me chamo Gabriel Silva</span>

            <h1 className="hero-title">
              Desenvolvedor
              <span> Front-end</span>
            </h1>

            <p className="hero-description">
              Desenvolvedor focado em criar aplicações web modernas, responsivas
              e funcionais.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-button-primary">
                Ver projetos
              </a>

              <a href={social.github} target="_blank" className="hero-button-secondary">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-card">
              <div className="visual-grid"></div>

              <span className="visual-dot visual-dot-1"></span>
              <span className="visual-dot visual-dot-2"></span>
              <span className="visual-dot visual-dot-3"></span>

              <span className="visual-line visual-line-1"></span>

              <div className="visual-code">
                <span>&lt;</span>
                <span>/</span>
                <span>&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
