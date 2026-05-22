import { Container, Row, Col } from "react-bootstrap";
import app_dev from "../assets/img/app-development.jpg";
import portfolio from "../assets/img/portfolio.jpg"
import chess from "../assets/img/online-chess.jpg"

export const Projects = () => {

  const projects = [
    {
      title: "LockedIn Kotlin Android App",
      description: "Developed an android application using kotlin, dedicated towards users to hold them accountable for building the healthy habits they wish to build",
      imgUrl: app_dev
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a personal portfolio website using React to showcase my projects, skills, and experiences in software development",
      imgUrl: portfolio
    },
    {
      title: "OOP Chess Game",
      description: "Developed a fully functional chess game in C++ using object-oriented programming principles with an CPU opponent that adapts difficulty",
      imgUrl: chess
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Hover over each of the projects I have completed to get a quick overview of it, and click on it to learn more. If you would like to view the code used to complete these projects, please visit my github</p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="proj-imgbx">
                <img src={project.imgUrl} alt={project.title} />
                <div className="proj-txtx">
                  <h4>{project.title}</h4>
                  <span>{project.description}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};