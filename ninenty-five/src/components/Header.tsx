import React from "react";
import styled from "styled-components";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { IconContext } from "react-icons";
import { getJSDocReadonlyTag } from "typescript";

function Header() {
  return (
    <HeaderNavigation>
      <IconContext.Provider value={{ color: "grey", className: "social-icons", size: "70px" }}>
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
      </IconContext.Provider>
      <ContactInfo>
        <p>someEmail@gmail.com</p>
      </ContactInfo>
    </HeaderNavigation>
  );
}

export default Header;

const HeaderNavigation = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SocialHandles = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  align-items: center;
  a {
    margin: 10px;
    max-height: 70px;
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
