import "./About.css";
import Container from "../../../../components/Container/Container";

export default function About() {
  return (
    <section className="about section" id="about">
      <Container>
        <div className="about-header">
          <span className="section-label">Sobre mim</span>

          <h2 className="section-title">
            Conheça um pouco
            <span> sobre mim</span>
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
              <h3>Desenvolvedor focado em criar aplicações web modernas.</h3>
            </h3>

            <p>
              Desenvolvo aplicações web com foco em interfaces modernas,
              responsivas e funcionais, buscando sempre unir uma boa experiência
              de usuário com código organizado e soluções eficientes.
            </p>

            <p>
              Minha atuação é voltada principalmente para o desenvolvimento
              Front-end, com conhecimentos também em Back-end, APIs e integração
              com bancos de dados.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
