import { useState } from "react";
import meter1 from "../assets/img/meter1.svg";
import education from "../assets/img/education.png";
import software from "../assets/img/software-dev.png"
import problem from "../assets/img/problem-solving.png"
import teamwork from "../assets/img/teamwork.png"
import adaptability from "../assets/img/adaptability.png"
import soccer from "../assets/img/soccer.png"
import CarouselImport from "react-multi-carousel";
const Carousel = CarouselImport.default;
import "react-multi-carousel/lib/styles.css";

export const About = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const items = [
    {
      title: "Education",
      description:
        "I am currently a fourth-year student in a Double Degree program pursuing a BCS at the University of Waterloo and a BBA at Wilfrid Laurier University.\n\n"
        + "I am expected to graduate in 2027, completing a five-year program that combines technical computing with business strategy and financial decision-making.\n\n"
        + "On the computer science side, I have developed a strong foundation in software development and system-level design. This includes object-oriented programming, data structures and algorithms, operating systems, database management, and numerical computation. I have also applied these concepts through hands-on experience building applications, including Android application development using Kotlin and modern software engineering practices.\n\n"
        + "During my university career, I have massively picked up on various programming languages like Python, Java, C, C++, and Kotlin, and learned new frameworks such as React and Angular. \n \n"
        + "On the business side, I have studied core areas such as economics, financial accounting, corporate finance, and strategic management. This includes valuation techniques (TVM, stock and company valuation), risk and portfolio analysis, marketing, operations management, business law, and organizational behavior.\n\n"
        + "Overall, my education has trained me to approach problems from both a technical and strategic lens, allowing me to bridge software development with real-world business decision-making.",
      img: education
    },
    {
      title: "Software Development",
      description:
        "I have developed a strong passion for software development through a wide range of academic and personal projects that explore different areas of computing.\n\n"
        + "I have built interactive applications such as a recreation of the classic Galaga game using Phaser, where I focused on game loops, event handling, and real-time rendering concepts. I have also designed and implemented a chess game using object-oriented programming, including structured class hierarchies and a graphical interface to support gameplay logic.\n\n"
        + "In systems and programming languages, I have worked on building a compiler using sequential programming principles, incorporating tokenization, parse trees, and data structures to interpret and process code. This project strengthened my understanding of how programming languages are understood, comprehended, and executed at a lower level.\n\n"
        + "I also apply software development in real-world settings, including managing and maintaining my father's restaurant website named The Red Lion, where I have gained experience with database management, updates, and supporting a live production system.\n\n"
        + "Additionally, through coursework in operating systems, I have worked on assignments involving process management, synchronization, and file systems, giving me exposure to core system-level concepts such as concurrency and resource management.\n\n"
        + "These experiences have strengthened my ability to think across different layers of software, from user-facing applications to system-level design, and reinforced my interest in building structured, scalable, and practical software systems.",
      img: software
    },
    {
      title: "Problem Solving",
      description:
        "I approach problem solving as a structured and iterative process where I break down issues, test assumptions, and refine solutions based on system behavior.\n\n"
        + "In my software development experience, I have worked through challenges that involve multiple interacting components, particularly in mobile and data-driven applications. For example, while building my Android application LockedIn, I had to ensure consistency between the user interface, Firebase database, and AI-based verification features. This often involved debugging unexpected data flows, handling edge cases in user interactions, and ensuring reliable system behavior across different features such as check-ins and leaderboard updates.\n\n"
        + "In other projects, such as a chess game with a graphical interface, I focused on correctly implementing complex rule interactions and ensuring that all possible move scenarios were validated properly while keeping the game state synchronized with the user interface.\n\n"
        + "I have also applied problem solving in a real-world setting through maintaining a live restaurant website, where I regularly diagnose issues, implement fixes, and ensure the system remains stable for actual users.\n\n"
        + "Overall, my approach is to systematically isolate problems, identify root causes, and iterate on solutions until the system behaves reliably and as intended.",
      img: problem
    },
    {
      title: "Teamwork",
      description:
        "I work in teams by focusing on clear communication, understanding how others are contributing, and adjusting my own approach so that collaboration stays effective across different situations. I tend to be intentional about how I communicate, whether that means being more direct in technical discussions, more structured in planning environments, or more responsive in fast-moving group settings.\n\n"
        + "In software development projects such as my Android application LockedIn, I collaborated with teammates across different technical areas including frontend, backend, and AI-based features. These experiences often required quickly understanding new parts of the system, adapting to how other components were implemented, and learning new tools or workflows as the project evolved in parallel. A key part of collaboration was being able to pick up unfamiliar areas fast enough to contribute meaningfully and keep progress aligned across the team.\n\n"
        + "In business case competitions and group projects, I worked in teams where problem-solving and communication had to happen under time constraints. I adapted between contributing ideas, supporting others’ thinking, and refining group direction based on feedback, often learning new frameworks or applying unfamiliar concepts quickly in order to strengthen the team’s analysis and recommendations.\n\n"
        + "In sports and other team-based environments, I’ve developed an ability to stay open to constructive feedback, support teammates’ ideas, and voice my own opinions in a respectful and positive way that helps keep group discussions inclusive and productive, even when opinions differ.\n\n"
        + "Across these experiences, I focus on being a dependable team member who adapts communication and contribution style based on context, while also learning quickly enough to stay effective as tasks, tools, and expectations evolve.",
      img: teamwork
    },
    {
      title: "Learning & Adaptability",
      description:
        "I adapt quickly to new situations by focusing on understanding what is required, identifying the best strategy to become effective, and learning new concepts or tools as they become necessary. Rather than limiting myself familiar areas or to roles I have proven myself to be successful in, I’m comfortable shifting across different responsibilities and stepping into unfamiliar work when needed.\n\n"
        + "During the development of my android application LockedIn, I worked across multiple parts of the project and often took on areas outside my initial experience. This project started off by quickly learning Kotlin and adapting to Jetpack Compose testing tools and workflows while the application was actively being developed. Being able to understand new frameworks and immediately apply them allowed me to contribute across different components of the project rather than taking on areas of the project I felt most comfortable working on.\n\n"
        + "In business case competitions, I’ve often taken on sections of the case that others were less comfortable with, even when I initially had weaker familiarity in those areas. These situations required me to obtain a deeper understanding frameworks I already knew, understanding unfamiliar content under time constraints, and applying that knowledge effectively so that I can stay up to the pace the team was going at and produce a complete recommendation.\n\n"
        + "Across both technical and analytical environments, I’ve developed the ability to learn quickly under pressure, move between different types of work efficiently, and stay effective even when working in areas I haven’t previously mastered.",
      img: adaptability
    },
    {
      title: "Personal Interests",
      description:
        "I have various hobbies that I love to do in my spare time. One of my biggest hobbies is sports and fitness, both watching and playing sports. Sports that I am highly interested in are Soccer, Basketball, and MMA. I first started playing soccer at the age of 6 and joined rep league at the age of 9.\n\n"
        + "In software development projects such as my Android application LockedIn, I collaborated with teammates across different technical areas including frontend, backend, and AI-based features. These experiences often required quickly understanding new parts of the system, adapting to how other components were implemented, and learning new tools or workflows as the project evolved in parallel. A key part of collaboration was being able to pick up unfamiliar areas fast enough to contribute meaningfully and keep progress aligned across the team.\n\n"
        + "In business case competitions and group projects, I worked in teams where problem-solving and communication had to happen under time constraints. I adapted between contributing ideas, supporting others’ thinking, and refining group direction based on feedback, often learning new frameworks or applying unfamiliar concepts quickly in order to strengthen the team’s analysis and recommendations.\n\n"
        + "In sports and other team-based environments, I’ve developed an ability to stay open to constructive feedback, support teammates’ ideas, and voice my own opinions in a respectful and positive way that helps keep group discussions inclusive and productive, even when opinions differ.\n\n"
        + "Across these experiences, I focus on being a dependable team member who adapts communication and contribution style based on context, while also learning quickly enough to stay effective as tasks, tools, and expectations evolve.",
      img: soccer
    }

  ];

  return (
    <section className="about" id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">

            <div className="about-bx wow zoomIn">
              <h2>About Me</h2>
              <p>
                Click on each card below to explore it and learn more about me from that card.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme about-slider"
              >
                {items.map((item, index) => (
                  <div
                    className="item"
                    key={index}
                    onClick={() => setSelectedItem(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={item.img} alt={item.title} />
                    <h5>{item.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      
      {selectedItem && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button
              className="modal-close"
              onClick={() => setSelectedItem(null)}
            >
              x
            </button>

            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}  
    </section>
  );
};