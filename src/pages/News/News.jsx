import React from "react";
import "./News.scss";

function News() {
  return (
    <div className="News">
      <div className="news_header">
        <h1>News/Events</h1>
      </div>
      <a href="#" className="container">
        <div>
          <img src="/images/NewsPic1.jpg" alt="" />
        </div>
        <div>
          <h2>HOD’s cup is here again</h2>
          <p>24TH OCTOBER, 2023</p>
        </div>
      </a>

      <a href="#" className="container">
        <div>
          <img src="/images/examPic.jpg" alt="" />
        </div>
        <div>
          <h2>Exam TimeTable is Out!</h2>
          <p>25TH OCTOBER, 2023</p>
        </div>
      </a>

      <a href="#" className="container">
        <div>
          <img src="/images/Hackathon.png" alt="" />
        </div>
        <div>
          <h2>This Year's Hackathon</h2>
          <p>4TH NOVEMBER, 2023</p>
        </div>
      </a>
      <a href="#" className="container">
        <div>
          <img src="/images/conductPic.jpg" alt="" />
        </div>
        <div>
          <h2>CSC's new code of conduct</h2>
          <p>6TH NOVEMBER, 2023</p>
        </div>
      </a>
    </div>
  );
}

export default News;
