import React from "react";
import styled from "styled-components";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../assets/LogoNumber.png";
import logo1 from "../assets/Asset 1.svg";
import Menu from "./Menu";
import {User} from '@styled-icons/boxicons-regular/User'

function Header() {
  return (
    
      <HeaderNavigation>
        <Menu />
        <LogoContainer>
          <div className="logo_container">
            <img src={logo1} alt="" />
          </div>
        </LogoContainer>
        <ContactInfo>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaRegUser />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <AiOutlineHeart />
        <i data-feather="heart"></i>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FiShoppingBag />
          </a>
        </ContactInfo>
      </HeaderNavigation>
  );
}

export default Header;

const HeaderNavigation = styled.div`
  height:100%;
  max-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F5F5F5;
  background-color: var(--color-white);
  margin-top:10px;
  padding: 0.25rem;
  

  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    border-bottom: none;
  }
  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
  }
`;

const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  img {
    height: 3vh;
  }
  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    img {
      height: 3vh;
    }
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  width: 9%;
  display: grid;
  align-items: center;
  gap: 0;
  grid-template-columns: 1fr 1fr 1fr;
  a {
    color: var(--color-bg);
    font-size: 1.5rem;
    padding: 0;

    svg{
      stroke: black;
    }
  }
  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
  }
`;
