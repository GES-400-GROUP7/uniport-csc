import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";

function NewSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        Scrollbar={{ draggable: true, dragSize: 24 }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>

        <div class="swiper-scrollbar">
          <div
            class="swiper-scrollbar-drag"
            // style="transform: translate3d(0px, 0px, 0px); width: 68.0964px;"
          ></div>
        </div>
      </Swiper>
    </>
  );
}

export default NewSlider;
//  pagination={{ clickable: true }}
