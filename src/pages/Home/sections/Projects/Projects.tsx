import "./Projects.css";
import Container from "../../../../components/Container/Container";
import { project } from "../../../../data/projects";
import { useState } from "react";
import type { Project } from "../../../../types/project";

export default function Projects() {

  const [showAll, setShowAll] = useState(false)

  const visibleProjects = project;

  const handleToggleProjects = () => {
    if(showAll) {
      document.querySelector(".projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }

    setShowAll(!showAll)
  }

  return (
    <section className="projects section" id="projects">
      <Container>
        <div className="projects-header">
          <span className="section-label">Projetos</span>

          <h2 className="section-title">
            Projetos que transformam
            <span> Ideias em código</span>
          </h2>

          <p className="projects-description">
            Alguns dos projetos que desenvolvi, explorando diferentes
            tecnologias para criar aplicações modernas, responsivas e
            funcionais.
          </p>
        </div>

        <div className={`projects-grid ${showAll && "show-all"}`}>

          {visibleProjects.map((project: Project, index: number) => (

            <article 
              className={`project-card ${!showAll && index >= 2 ? "project-hidden" : ""}`}
              key={project.title}
            >
              
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`preview de ${project.title}`}
                />
              </div>

              <div className="project-content">
                <span className="project-type">{project.type}</span>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a 
                    href={project.demo} 
                    className="project-link project-link-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver projeto
                  </a>

                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>

            </article>
          ))}

        </div>
        {project.length > 0 && (
          <div className="project-more">

            <button 
              className="projects-more-button"
              onClick={handleToggleProjects}
            >
              {showAll ? "Ver menos" : "Ver mais projetos"}
            </button>

          </div>
        )}
      </Container>
    </section>
  );
}
