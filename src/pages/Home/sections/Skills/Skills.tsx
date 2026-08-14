import Container from "../../../../components/Container/Container";
import SkillsData from "../../../../data/Skills";

import "./Skills.css";

export default function Skills() {
  const categories = ["Frontend", "Backend", "Tools"] as const;

  return (
    <section className="skills" id="skills">
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
                {SkillsData.filter(
                  (skill) => skill.category === category
                ).map((skill) => (
                  <span className="skill-item" key={skill.name}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}