import React from "react";
import Layout from "../../components/Layout/Layout";

// stylesheet
import "./Degree.scss";

function Degree() {
  return (
    <Layout>
      <main className="degree_container">
        <div className="degree_header">
          <h1>Degree Programme</h1>
        </div>
        <div className="degree_body">
          <div className="philosophy">
            <h3>Philosophy of the Degree Programme</h3>
            <p>
              The Philosophy of the Degree Programme in the Department of
              Computing at the University of Port Harcourt emphasizes
              excellence, innovation, and relevance in computer science
              education. It aims to provide students with a balanced blend of
              theoretical knowledge and practical skills, fostering critical
              thinking and problem-solving abilities. The programme encourages
              research and innovation while instilling a sense of social
              responsibility and ethics, preparing graduates to be adaptive and
              socially conscious professionals in the technology industry. It
              strives to create well-rounded professionals who possess a deep
              understanding of computer science, critical thinking abilities,
              and a commitment to ethical and socially responsible practices.
              Through this philosophy, the programme aims to prepare students to
              become leaders and contributors to the advancement of the digital
              world and the betterment of society.
            </p>
          </div>
          <div className="objective">
            <h3>Objectives of the Degree Programme</h3>
            <p>
              The degree programme in the Department of Computing at the
              University of Port Harcourt aims to provide students with a strong
              foundation in computer science while fostering practical skills,
              critical thinking, and ethical considerations. It encourages
              research, innovation, adaptability, and industry relevance,
              preparing graduates to be competent professionals capable of
              addressing real-world challenges and contributing to technology's
              advancement and societal welfare. Overall, the objectives of the
              degree programme in the Department of Computing at the University
              of Port Harcourt are to produce well-rounded and competent
              graduates who can contribute effectively to the advancement of
              computer science, technology, and society at large.
            </p>
          </div>
          <div className="academics">
            <h3>Academic Programmes</h3>
            <p>
              The academic programme at the University of Port Harcourt
              comprises three specialized departments: Cybersecurity, Web
              Development, and Data Science and Analysis. The Cybersecurity
              Department focuses on securing information systems and networks.
              The Web Development Department teaches modern web application
              development. The Data Science and Analysis Department emphasizes
              data-driven decision-making. Each programme emphasizes practical
              training and industry relevance, preparing graduates for
              successful careers in their respective fields. These departments
              collectively enhance technological growth, economic development,
              and security in society.
            </p>
          </div>
          <div className="department">
            <h3>Department Entry Requirement</h3>
            <p>
              The Programme's Entry Requirements for the Cybersecurity, Web
              Development, and Data Science and Analysis departments at the
              University of Port Harcourt are as follows: <br />
              <b>Academic Qualifications:</b>
              <ul>
                <li>
                  Obtain a minimum JAMB score of 180, which is the school's
                  cutoff score for admission consideration.
                </li>
                <li>
                  Score above the department's Post UTME cutoff, which is set at
                  200, as part of the admission requirements.
                </li>
              </ul>
              <b>Possess a Laptop:</b>
              <ul>
                <li>
                  Prospective students must have access to a personal laptop, as
                  it is an essential tool for practical learning and coursework
                  in these technology-related programs.
                </li>
              </ul>
              <b>Required Documents:</b>
              <ul>
                <li>
                  Applicants must provide all necessary academic documents, such
                  as O'Level results (with at least five credit passes in
                  relevant subjects, including Mathematics and English
                  Language).
                </li>
                <li>
                  Candidates should also submit their JAMB result slip, showing
                  their JAMB score.
                </li>
                <li>
                  Any other required documents for verification purposes as
                  specified by the University.
                </li>
              </ul> <br />
              These entry requirements are subject to the University's
              guidelines and regulations and may vary based on the specific
              department's criteria. It is essential for prospective students to
              review the University's official website or contact the admissions
              office to get the most up-to-date and comprehensive information
              regarding the Programme's Entry Requirements. Meeting these
              requirements ensures that students are adequately prepared to
              pursue their chosen technology-related programs at the University
              of Port Harcourt.
            </p>

          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Degree;
