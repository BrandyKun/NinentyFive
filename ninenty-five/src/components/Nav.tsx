import styled from "styled-components";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Menu from './Menu';


function Nav() {
  

  let activeClassName = "underline";

  return (
    <>
      <MenuBar>
        <nav className="navbar">
          <div className="menu">
            
          </div>
          <div className="personal-items">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaRegUser />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiOutlineHeart />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FiShoppingBag />
            </a>
          </div>
        </nav>
      </MenuBar>
      <Menu/>
    </>
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
  .menu {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    align-items: center;
    width: 50%;
    height: 100%;
    margin-left: 2.5rem;

    button {
      grid-column-start: 1;
      grid-column-end: 1;
    }
    a {
      color: black;
      font-size: 1rem;
    }
  }
  .personal-items {
    width: 9%;
    display: grid;
    align-items: center;
    gap: 0;
    grid-template-columns: 1fr 1fr 1fr;
    a {
      color: #000000;
      font-size: 1.5rem;
      padding: 0;
      
    }
  }

  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    display: none;
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  height: 4vh;
  width: 100%;
  margin-bottom: 1rem;
`;
