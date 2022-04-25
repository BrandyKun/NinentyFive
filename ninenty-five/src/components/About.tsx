import React from "react";
import styled from "styled-components";
import wh1 from "../assets/warehouse.jpeg";
import wh2 from "../assets/warehouse1.jpeg";
import wh3 from "../assets/warehouse2.jpeg";

function About() {
  return (
    <div className="container" id="#about">
      <AboutContainer>
        <PhotoContainer>
          <img className="img" src={wh1} alt="" />
          <div className="info_box">
            <h1> About Us</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              corrupti deleniti magni possimus tempore. Officiis dignissimos
              aliquid ut quisquam asperiores earum, porro dolores tempora, in
              possimus, iste itaque! Cupiditate vel, repudiandae, incidunt
              adipisci eos quas rerum ut commodi optio delectus a dolor dolorem
              est officia vitae?
            </p>
          </div>
        </PhotoContainer>
      </AboutContainer>
    </div>
  );
}

export default About;

const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 0px 0px;
    grid-template-areas:
      "."
      ".";
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
  }
`;

const PhotoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    max-height: 50%;
    left: 24px;
    position: absolute;
  }

  .info_box {
    width: 45%;
    background-color: #ffffff;
    height: 40%;
    z-index: 1;
    right: 150px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10rem;
    h1 {
      border-bottom: 2px solid red;
      border-width: 100%;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
    /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      /* grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      gap: 0px 0px;
      grid-template-areas:
        "."
        "."; */
    }
  }
`;
