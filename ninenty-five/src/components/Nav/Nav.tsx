import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Router } from "react-router-dom";

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
      <Router>
      <nav className="navbar">
        <button onClick={handleToggle}>
          {navBarOpen ? "Close" : "Open"}{" "}
        </button>
        <ul className={`menuNav ${navBarOpen ? " showMenu" : ""}`}></ul>
        <NavLink
          to=""
          className={({ isActive }) => isActive ? activeClassName : undefined }
          onClick={() => closeMenu()}
        ><p>something</p></NavLink>
      </nav>
      </Router>
    </MenuBar>
  );
}

export default Nav;

export const MenuBar = styled.div`
  height: 5vh;
  width: 100%;
  background-color: aliceblue;
`;
