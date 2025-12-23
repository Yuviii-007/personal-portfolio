import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../components/projectsData";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  // Primary focus: MERN backend-heavy
  const [activeFilter, setActiveFilter] = useState("fullstack");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="projects-section" id="projects">
      <Container>
        <TrackVisibility once>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__fadeIn"
                  : ""
              }
            >
              <h2 className="section-title">Projects</h2>

              <p className="section-subtitle">
                Real-world projects focused on MERN stack,
                scalable backend systems, and clean frontend
                architecture.
              </p>

              {/* FILTER BUTTONS */}
              <div className="filter-buttons">
                <button
                  className={
                    activeFilter === "all" ? "active" : ""
                  }
                  onClick={() => setActiveFilter("all")}
                >
                  All
                </button>

                <button
                  className={
                    activeFilter === "fullstack"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveFilter("fullstack")
                  }
                >
                  Full Stack
                </button>

                <button
                  className={
                    activeFilter === "react" ? "active" : ""
                  }
                  onClick={() => setActiveFilter("react")}
                >
                  React
                </button>

                <button
                  className={
                    activeFilter === "js" ? "active" : ""
                  }
                  onClick={() => setActiveFilter("js")}
                >
                  JavaScript
                </button>
              </div>

              {/* PROJECT GRID */}
              <Row
                className={
                  isVisible
                    ? "animate__animated animate__slideInUp"
                    : ""
                }
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
