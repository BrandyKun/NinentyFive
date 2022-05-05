import React from "react";
import styled from "styled-components";
import Logo1 from "../assets/main.jpeg";
import HomeCarousel from "./HomeCarousel";

function Home() {
  return (
    <>
      <LandingPage>
        {/* <div className="pic_container">
          <img src={Logo1} alt="" />
        </div>
        <Button>
          <a href="#shop">Shop Now</a>
        </Button> */}
        <HomeCarousel />
      </LandingPage>
    </>
  );
}

export default Home;

export const LandingPage = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  .pic_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 90%;
    margin: 0 0 0 auto;
    background: white;
    box-shadow: -16px 9px 11px 7px rgba(0, 0, 0, 0.08);
    -webkit-box-shadow: -16px 9px 11px 7px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: -16px 9px 11px 7px rgba(0, 0, 0, 0.08);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    padding-top: 2rem;
    height: auto;
    .pic_container{
      width: 100%;
      height: 80vh;
      box-shadow: none;
    }
    
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
    height: 100%;
    .pic_container{
      width: 100%;
      height: 50vh;
      box-shadow: none;
    }
  }
`;
