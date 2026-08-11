import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import app_dev from "../assets/img/app-development.jpg";
import portfolio from "../assets/img/portfolio.jpg";
import chess from "../assets/img/online-chess.jpg";

export const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "LockedIn Kotlin Android App",
      description: "Developed an android application using kotlin, dedicated towards users to hold them accountable for building the healthy habits they wish to build",
      imgUrl: app_dev,

      details:
      "• Collaborated within a team of four developers to design and develop a mobile habit-tracking application using Kotlin, Jetpack Compose, Firebase, and the MVVM architecture.\n\n" +
      "• Implemented secure user authentication, real-time data storage, and cloud synchronization using Firebase Authentication and Firestore.\n\n" +
      "• Integrated the ChatGPT API to analyze and verify user-submitted image check-ins, allowing users to prove completion of daily habits.\n\n" +
      "• Developed accountability groups, leaderboards, streak tracking, and point-based reward systems to encourage long-term user engagement.\n\n" +
      "• Designed responsive user interfaces using Jetpack Compose while following modern Android development practices and component-based UI design.\n\n" +
      "• Gained experience in mobile application architecture, API integration, collaborative development workflows, and Agile project development."

    },

    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a personal portfolio website using React to showcase my projects, skills, and experiences in software development",
      imgUrl: portfolio,

      details:
      "• Developed a fully responsive portfolio website using ReactJS, JavaScript, CSS, and React Bootstrap to present technical projects, work experience, and skills.\n\n" +
      "• Built reusable React components to improve maintainability and create a modular frontend architecture.\n\n" +
      "• Implemented smooth scrolling navigation, interactive project cards, hover animations, and modal windows to enhance the user experience.\n\n" +
      "• Designed responsive layouts to ensure compatibility across desktop, tablet, and mobile devices.\n\n" +
      "• Organized project information, work experiences, and technical skills into an accessible and visually appealing interface.\n\n" +
      "• Strengthened knowledge of modern frontend development, component design, responsive web design, and UI/UX principles."

    },

    {
      title: "OOP Chess Game",
      description: "Developed a fully functional chess game in C++ using object-oriented programming principles with an CPU opponent that adapts difficulty",
      imgUrl: chess,

      details:
      "• Developed a complete chess application in C++ using object-oriented programming concepts including inheritance, polymorphism, encapsulation, and abstraction.\n\n" +
      "• Implemented all official chess rules, including legal move validation, castling, en passant, pawn promotion, check, checkmate, and stalemate detection.\n\n" +
      "• Designed an AI-controlled opponent with multiple difficulty levels that evaluates board positions and selects moves based on strategic decision-making.\n\n" +
      "• Created class hierarchies for chess pieces and board management to promote code reuse and maintainability.\n\n" +
      "• Developed game state management systems to track player turns, board positions, and win conditions.\n\n" +
      "• Strengthened understanding of software design principles, algorithm development, and large-scale object-oriented programming."

    }
  ];

  return (
    <section className="project" id="projects">

      <Container>

        <Row>
          <Col>
            <h2>Projects</h2>

            <p>
              Hover over each of the projects I have completed to get a quick overview of it, and click on it to learn more. If you would like to view the code used to complete these projects, please visit my github
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (

            <Col
              key={index}
              md={4}
              className="mb-4"
            >

              <div
                className="proj-imgbx"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
              >

                <img
                  src={project.imgUrl}
                  alt={project.title}
                />

                <div className="proj-txtx">
                  <h4>{project.title}</h4>
                  <span>{project.description}</span>
                </div>

              </div>

            </Col>
          ))}
        </Row>

      </Container>

      {selectedProject && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              x
            </button>

            <h2>{selectedProject.title}</h2>

            <p>{selectedProject.details}</p>

          </div>

        </div>
      )}

    </section>
  );
};