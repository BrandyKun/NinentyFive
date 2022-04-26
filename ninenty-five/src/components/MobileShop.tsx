import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Stock1 from "../assets/stock1.jpeg";
import Stock2 from "../assets/stock2.jpeg";
import Stock3 from "../assets/stock3.jpeg";
import Stock4 from "../assets/stock4.jpeg";
import Stock5 from "../assets/stock5.jpeg";
import Stock6 from "../assets/stock6.jpeg";
import Stock7 from "../assets/stock7.jpeg";
import Stock8 from "../assets/stock8.jpeg";
import Stock9 from "../assets/stock9.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";

function MobileShop() {
  return (
    <>
      <ShopContainer>
        <ShopButton>
          <button>Shop Women's</button>
          <button>Shop Men's</button>
        </ShopButton>
        <h2>Newest Arrival</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >

          <SwiperSlide>
            <div className="prod_img_container">
              <img src={Stock1} alt="" className="prod_img" />
              <div className="prod_description">
                <h5>Product Title</h5>
                <p>some info</p>
                <button className="btn-prod">View</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="prod_img_container">
              <img src={Stock2} alt="" className="prod_img" />
              <div className="prod_description">
                <h5>Product Title</h5>
                <p>some info</p>
                <button className="btn-prod">View</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="prod_img_container">
              <img src={Stock3} alt="" className="prod_img" />
              <div className="prod_description">
                <h5>Product Title</h5>
                <p>some info</p>
                <button className="btn-prod">View</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="prod_img_container">
              <img src={Stock4} alt="" className="prod_img" />
              <div className="prod_description">
                <h5>Product Title</h5>
                <p>some info</p>
                <button className="btn-prod">View</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="prod_img_container">
              <img src={Stock5} alt="" className="prod_img" />
              <div className="prod_description">
                <h5>Product Title</h5>
                <p>some info</p>
                <button className="btn-prod">View</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="prod_img_container">
              <img src={Stock6} alt="" className="prod_img" />
              <div className="prod_description">
                <h5>Product Title</h5>
                <p>some info</p>
                <button className="btn-prod">View</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="prod_img_container">
              <img src={Stock7} alt="" className="prod_img" />
              <div className="prod_description">
                <h5>Product Title</h5>
                <p>some info</p>
                <button className="btn-prod">View</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="prod_img_container">
              <img src={Stock8} alt="" className="prod_img" />
              <div className="prod_description">
                <h5>Product Title</h5>
                <p>some info</p>
                <button className="btn-prod">View</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="prod_img_container">
              <img src={Stock9} alt="" className="prod_img" />
              <div className="prod_description">
                <h5>Product Title</h5>
                <p>some info</p>
                <button className="btn-prod">View</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ShopContainer>
    </>
  );
}

export default MobileShop;

const ShopButton = styled.div`
  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    width: 100%;
    height: 30%;
    background-color: var(--color-bg);
    align-items: center;
    justify-content: center;
    display: flex;
    button {
      border-radius: 10px;
      background-color: #ffffff;
      color: var(--color-bg);
      &:hover {
        transition: var(--transition);
        cursor: pointer;
        border: 1px solid #ffffff;
        color: var(--color-bg);
      }
    }
  }
`;

const ShopContainer = styled.div`
  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */
display: none;
  @media (max-width: 1024px) {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    z-index: 0;
    .swiper-slide {
      padding: 2rem;
      text-align: center;
      font-size: 18px;
      background: #fff;
      z-index: 0;

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
    .prod_img_container {
      width: 100%;
      height: 100%;
    }
    .prod_description {
      width: 100%;
      height: 30%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        font-size: 0.75rem;
      }
    }
    button.btn-prod {
      border-radius: 5px;
      width: 90%;
      margin: 5px 0;
    }
  }

  .swiper-slide img {
    display: flex;
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
  }
`;
