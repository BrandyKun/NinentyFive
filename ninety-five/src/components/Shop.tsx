import React from "react";
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
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import styled from "styled-components";
import MobileShop from "./MobileShop";

function Shop() {
  return (
    <>
      <div className="title">
        <h1>Browes Categories</h1>
      </div>

      <div className="container shop_page" id="shop">

        <CarousellContainer>
          <div className="prod_category"><a href=""><img src={Stock1} alt="" /></a><h2>Product</h2></div>
          <div className="prod_category"><a href=""><img src={Stock2} alt="" /></a><h2>Product</h2></div>
          <div className="prod_category"><a href=""><img src={Stock3} alt="" /></a><h2>Product</h2></div>
          <div className="prod_category"><a href=""><img src={Stock4} alt="" /></a><h2>Product</h2></div>
        </CarousellContainer>
        {/* <MobileShop /> */}
      </div>
    </>
  );
}

export default Shop;

const CarousellContainer = styled.div`
  width: 80%;
  height: 90%;
  display: grid;
  margin: 0 auto 0 auto;
  grid-template-columns:repeat(4,1fr);
  grid-gap: 0.75rem;
  h1 {
    width: 100%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
  }
  .prod_category{
    width: 100%;
    height: 100%;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
      width: 100%;
      height: 80%;
      padding: 0;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover ;
    }
    h2{
      color:var(--color-bg)
    }
  }
  
  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    grid-template-columns:repeat(1,1fr);
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
  }
`;
