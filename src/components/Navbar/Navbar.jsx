// import React from "react";

// stylesheet
import "./Navbar.scss";

// react icons
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

// Import Use Ref
import { useRef, useState } from "react";

// Nav link
import { NavLink } from "react-router-dom";

// React Helmet
import React from "react";
import { Helmet } from "react-helmet";

// images
import Logo from "./images/Logo.png";
import Menu from "./images/Menu.png";

const Navbar = () => {
  const [hideStudentDropdown, setHideStudentDropdown] = useState(false);
  const [hideDepartmentDropdown, setHideDepartmentDropdown] = useState(false);

  // Navbar open and close function
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.add("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  //   Student dropdown
  const handleStudentDropDown = () => {
    setHideStudentDropdown(!hideStudentDropdown);
    setHideDepartmentDropdown(false)
  };

  //   Department drop down
  const handleDepartmentDropDown = () => {
    setHideStudentDropdown(false);
    setHideDepartmentDropdown(!hideDepartmentDropdown);
  };

  return (
    <div className="Navbar" id="top">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Computing Faculty | Welcome To The Faculty's Official Website
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <>
        <div className="container">
          <header>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <div className="logo">
                <img src={Logo} alt="Logo" />
              </div>
            </NavLink>
            <nav ref={navRef}>
              <NavLink to="/" onClick={closeNavbar} className="home">
                Home
              </NavLink>
              <a
                href="#top"
                onClick={handleDepartmentDropDown}
                className="drop_down_menu"
              >
                Department <FiChevronDown className="drop_down_icon" />
              </a>
              <a
                href="#top"
                to="/student"
                onClick={handleStudentDropDown}
                className="drop_down_menu"
              >
                Student <FiChevronDown className="drop_down_icon" />
              </a>
              <NavLink to="/news_events" onClick={closeNavbar}>
                News/Events
              </NavLink>
              <a href="#footer" onClick={closeNavbar}>
                Contact Us
              </a>
              <NavLink to="" onClick={closeNavbar}>
                <button className="mobile_join_us">Get Directions</button>
              </NavLink>
              <button
                className="nav-btn nav-close-btn"
                onClick={closeNavbar}
                style={{ color: "#515151", fontSize: "32px" }}
              >
                <AiOutlineClose />
              </button>
            </nav>
            <NavLink to="/direction">
              <div className="join_now">
                <button>Get Directions</button>
              </div>
            </NavLink>

            <button className="nav-btn" onClick={showNavbar}>
              <img src={Menu} alt="Menu" />
            </button>
          </header>
        </div>
        <div className="mobile_container">
          <header>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <div className="logo">
                <img src={Logo} alt="Logo" />
              </div>
            </NavLink>
            <nav ref={navRef}>
              <NavLink to="/" onClick={closeNavbar} className="home">
                Home
              </NavLink>
              <a
                href="#footer"
                onClick={handleDepartmentDropDown}
                className="drop_down_menu"
              >
                Department <FiChevronDown className="drop_down_icon" />
              </a>
              <a
                href="#student"
                onClick={handleStudentDropDown}
                className="drop_down_menu"
              >
                Student <FiChevronDown className="drop_down_icon" />
              </a>
              <a href="#footer" onClick={closeNavbar}>
                Department{" "}
              </a>
              <a href="#footer" onClick={closeNavbar}>
                Student{" "}
              </a>
              <NavLink to="/news_events" onClick={closeNavbar}>
                News/Events
              </NavLink>
              <a href="#footer" onClick={closeNavbar}>
                Contact Us
              </a>
              <NavLink to="" onClick={closeNavbar}>
                <button className="mobile_join_us">Get Directions</button>
              </NavLink>
              <button
                className="nav-btn nav-close-btn"
                onClick={closeNavbar}
                style={{ color: "#515151", fontSize: "32px" }}
              >
                <AiOutlineClose className="close_icon" />
              </button>
            </nav>
            <NavLink to="/direction">
              <div className="join_now">
                <button>Get Directions</button>
              </div>
            </NavLink>

            <button className="nav-btn" onClick={showNavbar}>
              <img src={Menu} alt="Menu" />
            </button>
          </header>
        </div>
      </>
      {hideDepartmentDropdown && (
        <div className="department_drop_menu">
          <ul>
            <li>
              <NavLink to="/about"><div className="inner_drop_link">
              About Us <FiChevronRight className="drop_icon"/></div></NavLink>
            </li>
            <li>
              <NavLink to="/team"><div className="inner_drop_link">Staff Profile <FiChevronRight className="drop_icon"/></div></NavLink>
            </li>
            <li>
              <NavLink to="/degree"><div className="inner_drop_link">Degree Programme <FiChevronRight className="drop_icon"/></div></NavLink>
            </li>
            <li>
            <NavLink to="https://group-2-nu.vercel.app/"><div className="inner_drop_link">Schedule Meeting <FiChevronRight className="drop_icon"/></div></NavLink>
            </li>
            <li>
              <NavLink to=""><div className="inner_drop_link">Students Handbook <FiChevronRight className="drop_icon"/></div></NavLink>
            </li>
            <li>
              <NavLink to="https://nacos.org.ng/"><div className="inner_drop_link">NACOS <FiChevronRight className="drop_icon"/></div></NavLink>
            </li>
          </ul>
        </div>
      )}
      {hideStudentDropdown && (
        <div className="drop_menu">
          <ul>
            <li>
              <NavLink to="https://csc-result-checker.vercel.app/">
                <div className="inner_drop_link">Check Results <FiChevronRight className="drop_icon"/></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
              <div className="inner_drop_link">Timetable <FiChevronRight className="drop_icon"/></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
              <div className="inner_drop_link">Take Exam (CBT) <FiChevronRight className="drop_icon"/></div>    
              </NavLink>
            </li>
            <li>

            <NavLink to="/cert"><div className="inner_drop_link">Apply for Certificate <FiChevronRight className="drop_icon"/></div></NavLink>
            </li>
            <li>
              <NavLink to="https://ges-400-g5.github.io/__experimental/">
              <div className="inner_drop_link">Study Resources <FiChevronRight className="drop_icon"/></div>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
