import { useEffect, useRef, useState } from "react";
import Container from "../../../../components/Container/Container";
import SkillsData from "../../../../data/Skills";

import "./Skills.css";

export default function Skills() {
  const categories = ["Frontend", "Backend", "Tools"] as const;

  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = skillsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={skillsRef}
      className={`skills skills-animate ${isVisible ? "is-visible" : ""}`}
      id="skills"
    >
      <Container>
        <div className="skills-header">
          <span className="section-label">Skills</span>

          <h2 className="section-title">
            Technologies I <span>work with</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build modern, responsive, and
            functional applications.
          </p>
        </div>

        <div className="skills-content">
          {categories.map((category) => (
            <div className="skill-group" key={category}>
              <h3 className="skill-category">{category}</h3>

              <div className="skills-list">
                {SkillsData.filter((skill) => skill.category === category).map(
                  (skill) => (
                    <span className="skill-item" key={skill.name}>
                      {skill.name}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
