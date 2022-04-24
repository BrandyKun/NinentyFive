import React from "react";
import styled from "styled-components";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { IconContext } from "react-icons";
import { getJSDocReadonlyTag } from "typescript";

function Header() {
  return (
    <HeaderNavigation>
      <IconContext.Provider
        value={{ color: "grey", className: "social-icons", size: "20px" }}
      >
        <SocialHandles>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <BsFacebook />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <ImYoutube2 />
          </a>
        </SocialHandles>
        <div className="logo_container">

        </div>
      </IconContext.Provider>
      <ContactInfo>
        <p>someEmail@gmail.com</p>
      </ContactInfo>
    </HeaderNavigation>
  );
}

export default Header;

const HeaderNavigation = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #8080804b;

  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    a{
      display: none;
    }
    p{
      display: none
    }
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
    
  }
`;

const SocialHandles = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  align-items: center;
  a {
    padding-right: -5px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  font-size: 20px;
`;
