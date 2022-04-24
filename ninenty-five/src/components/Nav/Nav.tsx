import React, { useState } from "react";
import styled from "styled-components";
import {FiSearch,FiShoppingBag} from 'react-icons/fi'
import {FaRegUser} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'

function Nav() {
  const [navBarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navBarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  let activeClassName = "underline";

  return (
    <MenuBar>
      <nav className="navbar">
        <div className="menu">
          <button onClick={handleToggle}>{navBarOpen ? "Close" : "Open"} </button>
          <ul className={`menuNav ${navBarOpen ? " showMenu" : ""}`}></ul>
          <a href="http://" target="_blank" rel="noopener noreferrer"><FiSearch/></a>
        </div>
        <div className="personal-items">
          <a href="http://" target="_blank" rel="noopener noreferrer"><FaRegUser/></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><AiOutlineHeart /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><FiShoppingBag /></a>
        </div>
      </nav>
    </MenuBar>
  );
}

export default Nav;

export const MenuBar = styled.div`
  height: 4vh;
  width: 100%;
  margin-bottom: 1rem;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .menu{
    /* flex-direction: row;
    align-items: center;
    justify-content: flex-start; */
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    align-items: center;
    width: 50%;
    height: 100%;
    margin-left: 2.5rem;

    button{
      grid-column-start: 1;
      grid-column-end: 1;
    }
    a{
      color: black;
      font-size: 1rem;
    }
  }
  .personal-items{
    width: 19%;
    display: grid;
    align-items: center;
    gap: 0.1rem;
    grid-template-columns: 1fr 1fr 1fr;
    a{
      color: #000000;
      font-size:1rem ;
    }
  }
`;
