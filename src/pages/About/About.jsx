import React from "react";
import Layout from "../../components/Layout/Layout";

// stylesheet
import "./About.scss";

function About() {
  return (
    <Layout>
      <main className="about_container">
        <div className="about_header">
          <h1>About Us</h1>
        </div>
        <div className="about_body">
          <div className="background">
            <h3>Background</h3>
            <p>
              The Department of Computing at the University of Port Harcourt is
              a leading academic institution in Nigeria, offering diverse
              undergraduate and postgraduate programs in computer science and
              related fields. With a focus on academic excellence and practical
              skills, the department equips students with the knowledge to solve
              real-world challenges in the technology industry. Supported by
              experienced faculty and modern facilities, it fosters a culture of
              innovation and collaboration with industry partners, contributing
              to the nation's technological advancement.
            </p>
          </div>
          <div className="achievement">
            <h3>Achievements</h3>
            <p>
              The Department of Computing at the University of Port Harcourt has
              achieved notable success in various areas. It conducts
              cutting-edge research, collaborates with industry partners, and
              produces skilled graduates. The department encourages student
              participation in competitions, offers state-of-the-art facilities,
              and engages with the community. Its achievements are recognized
              through accreditation and contributions to open-source projects.
              Overall, the department's commitment to excellence has a
              significant impact on technology advancement and the development
              of skilled professionals. The Department of Computing at the
              University of Port Harcourt has achieved several notable
              milestones and accomplishments, contributing to its reputation as
              a leading academic institution in the field of computer science
              and technology.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
