import React from "react";
import { Link } from "react-router-dom";
import "./Staff.scss";

function Staff() {
  return (
    <div className="Staff">
      <div className="container-1">
        <h2>
          Meet the staff Team
          <span>
            {" "}
            Get to know the brilliant minds behind our Department of Computing.
            Learn about our dedicated faculty and staff members who are
            passionate about shaping the future of computer science education
            and empowering students to excel in the world of technology.
          </span>
        </h2>
        <Link className="btn" to="/team">
          VISIT THE STAFF PROFILE PAGE
        </Link>
      </div>

      <div className="container-2">
        <div>
          <div>
            <img src="/images/Lecturer2.jpg" alt="" />
            <b>
              Assoc Prof. Friday Onuodu
              <span>Head of Deptartment</span>
            </b>
          </div>
          <div>
            <img src="/images/Lecturer1.jpg" alt="" />
            <b>
              Dr. L.U Oghenekaro
              <span>Lecturer</span>
            </b>
          </div>
          <div>
            <img src="/images/Lecturer4.jpg" alt="" />
            <b>
              Dr. Bridam 
              <span>Lecturer</span>
            </b>
          </div>
          <div>
            <img src="/images/Lecturer5.jpg" alt="" />
            <b>
              Dr. Echebiri Nwobidi
              <span>Lecturer</span>
            </b>
          </div>
        </div>
        <Link className="btn2" to="/team">
          VISIT THE STAFF PROFILE PAGE
        </Link>
      </div>
    </div>
  );
}

export default Staff;
