import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Midjourney from "../midjourney.png";
import Midjourney2 from "../midjourney2.png";
import Image3 from "../mid3.webp";
import Image4 from "../image4.png";
import Image5 from "../image5.png";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./ImageSlider.css";

export default function App() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Midjourney} alt={"fantasy mage"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Midjourney2} alt={"image 2"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image3} alt={"a creepy bar scene"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image4} alt={"dark souls"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image5} alt={"yakuza geisha"} />
      </SwiperSlide>
    </Swiper>
  );
}
