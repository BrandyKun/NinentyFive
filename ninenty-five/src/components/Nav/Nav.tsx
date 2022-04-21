import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Route, Routes } from "react-router-dom";

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
        <button onClick={handleToggle}>
          {navBarOpen ? "Close" : "Open"}{" "}
        </button>
        <ul className={`menuNav ${navBarOpen ? " showMenu" : ""}`}></ul>
          
        <p>something</p>
      </nav>
      
    </MenuBar>
  );
}

export default Nav;

export const MenuBar = styled.div`
  height: 5vh;
  width: 100%;
  background-color: aliceblue;
`;
