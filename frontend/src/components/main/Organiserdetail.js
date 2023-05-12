import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.collegeevents.info/laravel/public/storages/event_image/Events.jpg"></img>Slide 1</SwiperSlide>
        <SwiperSlide><img src="https://cdn.siasat.com/wp-content/uploads/2019/11/events-in-hyderabad.jpg"></img>Slide 2</SwiperSlide>
        <SwiperSlide><img src="https://media.istockphoto.com/id/978975308/vector/upcoming-events-neon-signs-vector-upcoming-events-design-template-neon-sign-light-banner-neon.jpg?s=170667a&w=0&k=20&c=SkMtxe3H0G4My_1DqS0CS1uAHJR8NaozbytU0XLQyxo="></img>Slide 3</SwiperSlide>
        <SwiperSlide><img src="https://www.shutterstock.com/image-vector/events-colorful-typography-banner-260nw-1356206768.jpg"></img>Slide 4</SwiperSlide>
        <SwiperSlide><img src="https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/Version-Events-and-Weddings/version-events-weddings-01.jpg"></img>Slide 5</SwiperSlide>
        <SwiperSlide><img src="https://stg-images.radio.com/aiu-media/EventsEventful1920x1080-776f3eb9-24a7-4cf3-9dd2-c5685c91864b.jpg?width=780&crop=8:5.1,offset-y0"></img>Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
}

