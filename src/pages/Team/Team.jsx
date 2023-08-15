import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Team.scss";

function Team() {
  return (
    <Layout>
      <main className="Staff_page">
        <div className="staff_header">
          <h1>Staff Profile</h1>
        </div>
        <div className="staff_body">
          <div className="staff_background">
            <div>
              <div className="container1">
                <h1 className="headings">Head of Department</h1>
                <div>
                  <img className="image" src="/images/Lecturer2.jpg" alt="" />
                  <b className="title">
                    Assoc Prof. Friday Onuodu<span>Head of Department</span>
                  </b>
                </div>
              </div>
              <div className="container2">
                <h1 className="headings">Administrative staffs</h1>
                <div>
                  <div>
                    <img
                      className="image"
                      src="/images/Staff - Photo.jpg"
                      alt=""
                    />
                    <b className="title">
                      Chukwudi Amaechi<span>Secretary</span>
                    </b>
                  </div>
                  <div>
                    <img
                      className="image"
                      src="/images/Staff - Photo.jpg"
                      alt=""
                    />
                    <b className="title">
                      Ifeoma Okonkwo<span>Clerk</span>
                    </b>
                  </div>
                  <div>
                    <img
                      className="image"
                      src="/images/Staff - Photo.jpg"
                      alt=""
                    />
                    <b className="title">
                      Chidinma Obi<span>Treasurer</span>
                    </b>
                  </div>
                  <div>
                    <img
                      className="image"
                      src="/images/Staff - Photo.jpg"
                      alt=""
                    />
                    <b className="title">
                      Emeka Wike<span>Academic staff</span>
                    </b>
                  </div>
                </div>
              </div>
              <div className="container3">
                <h1 className="headings">Lecturers</h1>
                <div>
                  <div>
                    <img className="image" src="/images/Lecturer1.jpg" alt="" />
                    <b className="title">
                      Dr. L.U Oghenekaro<span>Lecturer</span>
                    </b>
                  </div>
                  <div>
                    <img className="image" src="/images/Lecturer3.jpg" alt="" />
                    <b className="title">
                      MS. Frank Olise <span>Asst. Lecturer</span>
                    </b>
                  </div>
                  <div>
                    <img className="image" src="/images/Lecturer4.jpg" alt="" />
                    <b className="title">
                      Dr. Baridam <span>Lecturer</span>
                    </b>
                  </div>
                  <div>
                    <img className="image" src="/images/Lecturer5.jpg" alt="" />
                    <b className="title">
                      Dr Echebiri Nwobidi <span>Lecturer</span>
                    </b>
                  </div>
                  <div>
                    <img className="image" src="/images/Lecturer6.jpg" alt="" />
                    <b className="title">
                      Dr. Rotimi <span>Lecturer</span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Team;
