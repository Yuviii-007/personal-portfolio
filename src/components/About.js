import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "../assets/css/About.css";
import profileImg from "../assets/img/Yuvraj-Image4.webp";
import YuvrajResume from "../../src/assets/YuvrajResume.pdf";

export const About = () => {
    return (
        <section className="about-section" id="about">
            <Container>
                <TrackVisibility once>
                    {({ isVisible }) => (
                        <div
                            className={
                                isVisible ? "animate__animated animate__fadeIn" : ""
                            }
                        >
                            {/* TOP INTRO */}
                            <Row className="align-items-center mb-5">
                                <Col md={5} className="text-center">
                                    <div className="about-image-wrapper">
                                        <img src={profileImg} alt="Yuvraj Vaishnav" />
                                    </div>
                                </Col>

                                <Col md={7}>
                                    <h2 className="about-title">About Me</h2>

                                    <p className="about-text">
                                        I’m <strong>Yuvraj Vaishnav</strong>, a{" "}
                                        <strong>MERN Stack Developer</strong> currently pursuing my{" "}
                                        <strong>MCA from Career Point University</strong>. I am actively
                                        seeking full-time opportunities where I can contribute as a
                                        backend-focused full-stack developer and grow within a
                                        professional engineering team.
                                    </p>

                                    <p className="about-text">
                                        During my academic journey, I have built multiple{" "}
                                        <strong>real-world projects</strong> that involve authentication,
                                        role-based access, RESTful APIs, database design, and real-time
                                        communication. Working on projects like a full-stack EdTech
                                        platform and a real-time chat application helped me understand
                                        how scalable systems are structured and maintained in practice.
                                    </p>

                                    <p className="about-text">
                                        My primary tech stack includes{" "}
                                        <strong>React, Node.js, Express, and MongoDB</strong>. Alongside
                                        JavaScript, I also have a strong foundation in{" "}
                                        <strong>Java</strong> and <strong>mid-level DSA</strong>, which
                                        enables me to write efficient logic, optimize performance, and
                                        debug complex issues with confidence.
                                    </p>

                                    <p className="about-text">
                                        I maintain a <strong>consistent 8+ CGPA</strong> and recently
                                        completed a <strong>1-month internship at CodSoft</strong>, where
                                        I gained hands-on exposure to real development workflows,
                                        deadlines, and collaborative coding practices.
                                    </p>

                                    <p className="about-text">
                                        Outside of development, I enjoy <strong>playing chess</strong> and
                                        participating in <strong>poetry and stage performances</strong>.
                                        These interests have helped me build focus, communication skills,
                                        and confidence — qualities that positively reflect in my
                                        professional work as well.
                                    </p>

                                </Col>

                            </Row>

                            {/* WHAT I DO */}
                            <Row className="about-cards mb-5">
                                <Col md={4}>
                                    <div className="about-card">
                                        <h4>Frontend Development</h4>
                                        <p>
                                            Building responsive, user-friendly interfaces
                                            using React with a strong focus on UX and
                                            component reusability.
                                        </p>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className="about-card highlight">
                                        <h4>Backend Development</h4>
                                        <p>
                                            Designing secure REST APIs, authentication
                                            systems, and scalable backend logic using
                                            Node.js, Express, and MongoDB.
                                        </p>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className="about-card">
                                        <h4>Core CS & Problem Solving</h4>
                                        <p>
                                            Comfortable with Java, mid-level DSA,
                                            debugging complex issues, and understanding
                                            system-level behavior.
                                        </p>
                                    </div>
                                </Col>
                            </Row>

                            {/* HIGHLIGHTS */}
                            <Row className="about-highlights mb-5">
                                <Col md={6}>
                                    <ul>
                                        <li>🎓 MCA Final Year Student</li>
                                        <li>📊 Consistent 8+ CGPA</li>
                                        <li>💼 1-month Internship at CodSoft</li>
                                        <li>🔍 Actively seeking software developer roles</li>
                                    </ul>
                                </Col>

                                <Col md={6}>
                                    <ul>
                                        <li>♟️ Chess enthusiast</li>
                                        <li>🎤 Poetry & stage performances</li>
                                        <li>🧠 Learning-focused mindset</li>
                                        <li>🛠️ Strong interest in backend architecture</li>
                                    </ul>
                                </Col>
                            </Row>

                            {/* CTA */}
                            <Row className="about-cta">
                                <Col className="text-center">
                                    <a
                                        href={YuvrajResume}
                                        download
                                        className="resume-btn"
                                    >
                                        Download Resume
                                    </a>

                                    <div className="about-socials">
                                        <a
                                            href="https://www.linkedin.com/in/yuvraj-vaishnav/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            LinkedIn
                                        </a>
                                        <a
                                            href="https://github.com/Yuviii-007"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://www.naukri.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Naukri
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                </TrackVisibility>
            </Container>
        </section>
    );
};
