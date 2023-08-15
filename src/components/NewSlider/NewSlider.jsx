import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./NewSlider.scss";

const NewSlider = () => {
  return (
    <div className="Slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="container"
      >
        <SwiperSlide className="cover">
          <div>
            <b>HOD's Cup is here again</b>
            <Link to="/news">View more</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover">
          <div>
            <b>Exam Timetable is Out!</b>
            <Link to="/news">View more</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover">
          <div>
            <b>This Year's Hackathon</b>
            <Link to="/news">View more</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover">
          <div>
            <b>CSC's new code of conduct</b>
            <Link to="/news">View more</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover">
          <div>
            <b>HOD's Cup is here again</b>
            <Link to="/news">View more</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover">
          <div>
            <b>HOD's Cup is here again</b>
            <Link to="/news">View more</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover">
          <div>
            <b>HOD's Cup is here again</b>
            <Link to="/news">View more</Link>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
      <div className="close-cover">
        <p>Do you wish to meet with the department?</p> 
        <a href="https://group-2-nu.vercel.app/">SCHEDULE A MEETING</a>
      </div>
    </div>
  );
};

export default NewSlider;
