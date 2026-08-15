import "./Projects.css";
import Container from "../../../../components/Container/Container";
import { project } from "../../../../data/projects";
import { useEffect, useRef, useState } from "react";
import type { Project } from "../../../../types/project";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = project;

  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = projectsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={projectsRef}
      className={`projects section ${isVisible ? "is-visible" : ""}`}
      id="projects"
    >
      <Container>
        <div className="projects-header">
          <span className="section-label">Projects</span>

          <h2 className="section-title">
            Projects that turn
            <span> ideas into code</span>
          </h2>

          <p className="projects-description">
            A selection of projects I have built, exploring different
            technologies to create modern, responsive, and functional
            applications.
          </p>
        </div>

        <div className={`projects-grid ${showAll ? "show-all" : ""}`}>
          {visibleProjects.map((project: Project, index: number) => (
            <article
              className={`project-card ${
                !showAll && index >= 2 ? "project-hidden" : ""
              }`}
              key={project.title}
            >
              <div className="project-image">
                <img src={project.image} alt={`Preview of ${project.title}`} />
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
                    View project
                  </a>

                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {project.length > 0 && (
          <div className="project-more">
            {showAll ? (
              <a
                href="#projects"
                className="projects-more-button"
                onClick={() => setShowAll(false)}
              >
                Show less
              </a>
            ) : (
              <button
                className="projects-more-button"
                onClick={() => setShowAll(true)}
              >
                View more projects
              </button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
