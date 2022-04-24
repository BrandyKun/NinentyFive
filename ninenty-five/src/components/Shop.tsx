import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Stock1 from '../assets/stock1.jpeg'
import Stock2 from '../assets/stock2.jpeg'
import Stock3 from '../assets/stock3.jpeg'
import Stock4 from '../assets/stock4.jpeg'
import Stock5 from '../assets/stock5.jpeg'
import Stock6 from '../assets/stock6.jpeg'
import Stock7 from '../assets/stock7.jpeg'
import Stock8 from '../assets/stock8.jpeg'
import Stock9 from '../assets/stock9.jpeg'
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import styled from "styled-components";

function Shop() {
  return (
    <>
      <div className="container shop_page" id="shop">
        <CarousellContainer>
          <h1>New Arrivals</h1>
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="prod_img_container">
                <img src={Stock1} alt="" className="prod_img" />
                <div className="prod_description">
                  <h3>Product Title</h3>
                  <p>some info</p>
                  <button>View</button>
                  <button>Shop</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="prod_img_container">
                <img src={Stock2} alt="" className="prod_img" />
                <div className="prod_description">
                  <h3>Product Title</h3>
                  <p>some info</p>
                  <button>View</button>
                  <button>Shop</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="prod_img_container">
                <img src={Stock3} alt="" className="prod_img" />
                <div className="prod_description">
                  <h3>Product Title</h3>
                  <p>some info</p>
                  <button>View</button>
                  <button>Shop</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="prod_img_container">
                <img src={Stock4} alt="" className="prod_img" />
                <div className="prod_description">
                  <h3>Product Title</h3>
                  <p>some info</p>
                  <button>View</button>
                  <button>Shop</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="prod_img_container">
                <img src={Stock5} alt="" className="prod_img" />
                <div className="prod_description">
                  <h3>Product Title</h3>
                  <p>some info</p>
                  <button>View</button>
                  <button>Shop</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="prod_img_container">
                <img src={Stock6} alt="" className="prod_img" />
                <div className="prod_description">
                  <h3>Product Title</h3>
                  <p>some info</p>
                  <button>View</button>
                  <button>Shop</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="prod_img_container">
                <img src={Stock7} alt="" className="prod_img" />
                <div className="prod_description">
                  <h3>Product Title</h3>
                  <p>some info</p>
                  <button>View</button>
                  <button>Shop</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="prod_img_container">
                <img src={Stock8} alt="" className="prod_img" />
                <div className="prod_description">
                  <h3>Product Title</h3>
                  <p>some info</p>
                  <button>View</button>
                  <button>Shop</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="prod_img_container">
                <img src={Stock9} alt="" className="prod_img" />
                <div className="prod_description">
                  <h3>Product Title</h3>
                  <p>some info</p>
                  <button>View</button>
                  <button>Shop</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </CarousellContainer>
      </div>
    </>
  );
}

export default Shop;

const CarousellContainer = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  h1 {
    width: 100%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
  }
  .swiper {
    width: 100%;
    height: 60%;
    padding: 2rem;
    border: 1px solid var(--color-bg);
    background: var(--color-bg);

    border-radius: 45px;
    &:hover{
      background: #FFFFFF;
      transition: var(--transition);

      .swiper-slide {
        border: 1px solid var(--color-bg);
      }
    }
  }
  .swiper-button-next::after, .swiper-button-prev::after{
    color: #000;
    font-size: 1.5rem;
  }

  .swiper-slide {
    padding: 1.3rem;
    text-align: center;
    font-size: 18px;
    background: #FFF;

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
    border: 1px solid #FFF;
    border-radius: 25px;
    
   
    &:hover::after{
    transform: translate(0, 0);
    }
    
    &:hover{
    border: 2px solid transparent;
    background-color: var(--color-bg);
    transform: scale(1);
    will-change: transform;
    
  }
    .prod_img_container{
      width: 100%;
      height:100%;
    }
    .prod_description{
      width: 100%;
      height: 30%;
      /* display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-areas: 
      "title title"
      "nav nav"; */
      flex-direction: column;
      justify-content: space-around;
      h3{
        margin: 0.2rem 0;
      }
      
    }
  }

  .swiper-slide img {
    display: flex;
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 25px;
  }
`;
