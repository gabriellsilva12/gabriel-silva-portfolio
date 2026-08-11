import "./Contact.css";
import Container from "../../../../components/Container/Container";
import { social } from "../../../../data/socials";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <Container>
        <div className="contact-header">
          <span className="section-label">Contato</span>

          {/* <h2 className="section-title">
            Vamos <span>conversar?</span>
          </h2> */}

          <p className="contact-description">
            Tem um projeto em mente ou surgiu uma oportunidade? Entre em contato
            comigo.
          </p>
        </div>

        <div className="contact-content">
          <form className="contact-form">
            <div className="contact-field">
              <label htmlFor="name">Seu nome</label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Seu email</label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Sua mensagem</label>

              <textarea
                id="message"
                name="message"
                placeholder="Digite sua mensagem"
                rows={6}
                required
              />
            </div>

            <button type="submit" className="contact-button">
              Enviar mensagem
            </button>
          </form>

          <div className="contact-info">
            
            <div className="contact-item">
              <span>Github</span>
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                {" "}
                gabriellsilva12
              </a>
            </div>

            <div className="contact-item">
              <span>LinkedIn</span>
              <a href={social.LinkedIn} target="_blank" rel="noopener noreferrer">
                {" "}
                gabriellsilva-dev2
              </a>
            </div>

            <div className="contact-item">
              <span>Email</span>
              <a href={social.email} target="_blank" rel="noopener noreferrer">
                {" "}
                gabrielsilvadev2@gmail.com
              </a>
            </div>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
