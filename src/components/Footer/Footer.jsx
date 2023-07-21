import React from "react";

// stylsheet
import "./Footer.scss";

// images
import FooterLogo from "./images/FooterLogo.png";
import NnlLogo from "./images/NNL.png";
import { NavLink } from "react-router-dom";

// react icons
import { FiChevronRight } from "react-icons/fi";

function Footer() {
  return (
    <footer id="footer">
      <div className="inner_footer">
        <div className="left_inner_footer">
          <div className="footer_logos">
            <img src={FooterLogo} alt="FooterLogo" />
            <img src={NnlLogo} alt="NNL logo" />
          </div>
          <div className="footer_address">
            <p>Computer Science Department,</p>
            <p>University of Port Harcourt, East/West Road,</p>
            <p>PMB 5323 Choba, Rivers State, Nigeria.</p>
            <NavLink to="" className="direction_link">Get Directions < FiChevronRight className="direction_icon"/></NavLink>
            <div className="footer_details">
              <p>Phone: +234 81xx xxxx</p>
              <p>Email: cscdept@uniport.edu.ng</p>
            </div>
          </div>
        </div>
        <div className="right_inner_footer">
          <div className="left_right_inner_footer">
            <ul>
              <li><NavLink to="/about" className="footer_link">About Us</NavLink></li>
              <li><NavLink to="/degree" className="footer_link">Degree Programme</NavLink></li>
              <li><NavLink to="" className="footer_link">Staff Profiles</NavLink></li>
              <li><NavLink to="" className="footer_link">Certificate Application</NavLink></li>
              <li><NavLink to="" className="footer_link">Take Exam (CBT)</NavLink></li>
              <li><NavLink to="" className="footer_link">Check Results</NavLink></li>
            </ul>
          </div>
          <div className="right_right_inner_footer">
            <ul>
              {/* <li><a href="">Schedule a Meet</a></li>
              <li><a href="">Student’s Handbook</a></li>
              <li><a href="">NACOS</a></li>
              <li><a href="">Check Timetable</a></li> */}
            </ul>
          </div>
        </div>
        <div className="dropdown_content_in_footer" id="#department">
          <h3>Department</h3>
          <ul>
              <li><NavLink to="/about" className="footer_link">About Us</NavLink></li>
              <li><NavLink to="" className="footer_link">Staff Profile</NavLink></li>
              <li><NavLink to="" className="footer_link">Programme</NavLink></li>
              <li><NavLink to="" className="footer_link">Meeting</NavLink></li>
              <li><NavLink to="" className="footer_link">Handbook</NavLink></li>
              <li><NavLink to="" className="footer_link">NACOS</NavLink></li>
            </ul>
        </div>
        <div className="dropdown_content_in_footer" id="#student">
          <h3>Student</h3>
          <ul>
              <li><NavLink to="/about" className="footer_link">Check Results</NavLink></li>
              <li><NavLink to="" className="footer_link">Timetable</NavLink></li>
              <li><NavLink to="" className="footer_link">Take Exam (CBT)</NavLink></li>
              <li><NavLink to="" className="footer_link">Apply For Certificate</NavLink></li>
              <li><NavLink to="" className="footer_link">Study Resources</NavLink></li>
            </ul>
        </div>
      </div>
      <div className="copy_right">
        <div className="left_copyright">
          <p>© U2018 Ges400 (Group 7)  Computer Science Department 2023. All Rights Reserved.</p>
        </div>
        <div className="right_copyright">
          <p>Designed with <span>♥</span> by <span>Eminspire</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
