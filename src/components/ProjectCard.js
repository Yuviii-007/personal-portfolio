import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    live,
    github,
    tech,
    duration,
  } = project;

  return (
    <Col sm={6} md={4} className="mb-4">
      <div className="project-card">
        {/* IMAGE */}
        <div className="project-image">
          <img src={image} alt={title} />
          <div className="project-content">
            <h4>{title}</h4>
            <p>{description}</p>

            <div className="project-tech">
              {tech.slice(0, 5).map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>

        </div>

        {/* OVERLAY */}
        <div className="project-overlay">
          {/* Duration (ONLY full stack) */}
          {duration && (
            <span className="project-duration">
              ⏱ {duration}
            </span>
          )}

          <h4>{title}</h4>
          <p>{description}</p>

          {/* TECH STACK */}
          <div className="project-tech">
            {tech.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="project-actions">
            <a href={live} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Live
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
