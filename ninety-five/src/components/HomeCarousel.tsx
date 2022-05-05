import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.jpeg";
import pic6 from "../assets/pic6.jpeg";

import "swiper/css";
// import required modules
import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import styled from "styled-components";

function HomeCarousel() {
  return (
    <>
      <SwiperCarousel>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src={pic1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={pic2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={pic3}alt="" /></SwiperSlide>
          <SwiperSlide><img src={pic4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={pic5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={pic6} alt="" /></SwiperSlide>
        </Swiper>
      </SwiperCarousel>
    </>
  );
}

export default HomeCarousel;

const SwiperCarousel = styled.div`
  .swiper {
    width: 100%;
    height: 91vh;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .kyULqk .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .kyULqk .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet-active
  {
    color: var(--color-bg);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    .swiper {
      width: 100%;
      height: 50vh;
    }
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
  }
`;
