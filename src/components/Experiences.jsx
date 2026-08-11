
import React from "react";
import memoji from "../assets/img/memoji.jpg"


export const Experiences = () => {
  return (
    <section className="experiences" id="experiences">
      <div className="resume-page">
        <div className="resume-container">

          {/* LEFT SIDEBAR */}
          <div className="left-column">

            <div className="profile-section">
              <img
                src={memoji}
                alt="profile"
                className="profile-image"
              />

              <h2>Ashwin Vigneswaramoorthy</h2>
              <p className="role">University Student</p>
            </div>

            <div className="info-section">

              <div className="info-item">
                <span className="label">PERSONAL EMAIL</span>
                <p>ashwinvignes@email.com</p>
              </div>

              <div className="info-item">
                <span className="label">UNIVERSITY OF WATERLOO EMAIL</span>
                <p>a2vignes@uwaterloo.com</p>
              </div>

              <div className="info-item">
                <span className="label">WILFRID LAURIER UNIVERSITY EMAIL</span>
                <p>vign8687@mylaurier.com</p>
              </div>

              <div className="info-item">
                <span className="label">PHONE</span>
                <p>+1 (647) 860-9629</p>
              </div>

              <div className="info-item">
                <span className="label">BIRTHDAY</span>
                <p>June 15, 2004</p>
              </div>

              <div className="info-item">
                <span className="label">LOCATION</span>
                <p>Stouffville, Ontario</p>
              </div>

            </div>

            <div className="socials">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="right-column">

            {/* EDUCATION */}
            <section className="resume-section">
              <h1>Education</h1>

              <div className="timeline">

                  <div className="timeline-item">

                      <div className="timeline-header">
                          <h3>University of Waterloo</h3>
                          <span>2022 - Present</span>
                      </div>

                      <p className="timeline-date"><i>Waterloo, ON, Canada</i></p>

                  </div>

                  <div className="timeline-item">

                      <div className="timeline-header">
                          <h3>Wilfrid Laurier University</h3>
                          <span>2022 - Present</span>
                      </div>

                      <p className="timeline-date"><i>Waterloo, ON, Canada</i></p>
                  
                  </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section className="resume-section">
              <h1>Experience</h1>

              <div className="timeline">

                <div className="timeline-item">

                      <div className="timeline-header">
                          <h3>Berkley Canada</h3>
                          <span>Sept 2025 - Dec 2025</span>
                      </div>

                      <div className="timeline-header">
                          <p>Accountant</p>
                          <span>Toronto, ON</span>
                      </div>

                      <ul>
                          <li>Automated finance workflows using Excel macros, APIs, and scripting solutions for bank statement distribution, while supporting unit, integration, and system testing for new financial systems. </li>
                          <li>Supported month-end and quarter-end close processes by completing bank and ledger reconciliations, assisting with AR collections and compliance activities, and improving financial reporting efficiency.</li>
                      </ul>
                  
                  </div>

                  <div className="timeline-item">

                      <div className="timeline-header">
                          <h3>Compass Food Sales Co. Ltd.</h3>
                          <span>Jan 2025 - Apr 2025</span>
                      </div>

                      <div className="timeline-header">
                          <p>Automation Developer</p>
                          <span>Aurora, ON</span>
                      </div>

                      <ul>
                          <li>Led the transition of Compass Food Sales from GebWeb to Katana, implementing API-driven workflows and using JavaScript to automate sales reports, tax updates, and Excel tasks, significantly reducing repetitive manual work by 30% across the team and saving approximately 45% of their time each day. </li>
                          <li>Configured APIs including Katana for data transformations, comments, and reporting by optimizing AI prompting pipelines and temperature control, while conducting I/O testing and developing test suites using JSON, scripting, and HTML conversion to improve Excel management and reduce API operations. </li>
                      </ul>
                  
                  </div>

                  <div className="timeline-item">

                      <div className="timeline-header">
                          <h3>Magna International Inc.</h3>
                          <span>Jan 2024 - Apr 2024</span>
                      </div>

                      <div className="timeline-header">
                          <p>Junior Financial Analyst</p>
                          <span>Aurora, ON</span>
                      </div>

                      <ul>
                          <li>Contributed to the preparation of annual and quarterly financial statements by conducting data analysis, ensuring adherence to accounting standards, and enhancing the overall accuracy of financial reporting.</li>
                          <li>Supported monthly and quarterly financial close activities and the Board's finance presentations through coordinating reporting schedules, consolidating various supporting documentation, performing variance analysis on key metrics, and analyzing discrepancies to support accurate reporting and strategic decision-making.</li>
                      </ul>
                  
                  </div>

                  <div className="timeline-item">

                      <div className="timeline-header">
                          <h3>Midnight Sun Solar Rayce Car Team</h3>
                          <span>Jan 2023 - Aug 2023</span>
                      </div>

                      <div className="timeline-header">
                          <p>Firmware Developer</p>
                          <span>Waterloo, ON</span>
                      </div>

                      <ul>
                          <li>Contributed to the preparation of annual and quarterly financial statements by conducting data analysis, ensuring adherence to accounting standards, and enhancing the overall accuracy of financial reporting.</li>
                          <li>Supported monthly and quarterly financial close activities and the Board's finance presentations through coordinating reporting schedules, consolidating various supporting documentation, performing variance analysis on key metrics, and analyzing discrepancies to support accurate reporting and strategic decision-making.</li>
                      </ul>
                  
                  </div>

              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}
