import React from "react";
import styled from "styled-components";
import Logo1 from "../assets/LogoNumber.png";
import Logo2 from "../assets/LogoWriting.png";

function Home() {
  return (
    <>
      <LandingPage>
        <div className="pic_container">
          <img src={Logo2} alt="" />
        </div>
        <Button>
          <a href="#shop">Shop Now</a>
        </Button>
      </LandingPage>
    </>
  );
}

export default Home;

export const LandingPage = styled.div`
  height: 91vh;
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
    padding: 10px;
    box-shadow: -16px 9px 11px 7px rgba(0, 0, 0, 0.08);
    -webkit-box-shadow: -16px 9px 11px 7px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: -16px 9px 11px 7px rgba(0, 0, 0, 0.08);
    img {
      width: auto;
      height: 50%;
      background-size: cover;
    }
  }
`;

const Button = styled.button`
  width: 15%;
  height: 100px;
  left: 3rem;
  top: 20.25rem;
  position: absolute;
  background: var(--color-bg);
  border: none;
  border-radius: 25px;
`;
