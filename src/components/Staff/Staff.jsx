import React from "react";
import { Link } from "react-router-dom";
import './Staff.scss'

function Staff() {
  return (
    <div className="Staff">
      <div className="container-1">
        <h2>Meet the staff Team
            <span> At amet malesuada montes nunc semper. Auctor consequat cras amet
          aliquam pretium feugiat.</span>
        </h2>
        <Link className="btn" to="team">VISIT THE STAFF PROFILE PAGE</Link>
      </div>
     
      <div className="container-2">
        <div>
          <div>
            <img src="/images/Staff - Photo.jpg" alt="" />
            <b>
              Dr. Friday Onuodu
              <span>Dr. Friday Onuodu</span>
            </b>
          </div>
          <div>
            <img src="/images/Staff - Photo.jpg" alt="" />
            <b>
              Dr. Friday Onuodu
              <span>Dr. Friday Onuodu</span>
            </b>
          </div>
          <div>
            <img src="/images/Staff - Photo.jpg" alt="" />
            <b>
              Dr. Friday Onuodu
              <span>Dr. Friday Onuodu</span>
            </b>
          </div>
          <div>
            <img src="/images/Staff - Photo.jpg" alt="" />
            <b>
              Dr. Friday Onuodu
              <span>Dr. Friday Onuodu</span>
            </b>
          </div>
        </div>
        <Link className="btn2" to="team">VISIT THE STAFF PROFILE PAGE</Link>
      </div>
    </div>
  );
}

export default Staff;
