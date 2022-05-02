import styled from "styled-components";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Menu from "./Menu";

function Nav() {
  let activeClassName = "underline";

  return (
    <>
      <MenuBar>
        <nav className="navbar">
          <ul>
            <li>
              <a href="">Clothes</a>
            </li>
            <li>
              <a href="">Jumpers</a>
            </li>
            <li>
              <a href="">Shorts</a>
            </li>
            <li>
              <a href="">T-Shirt</a>
            </li>
          </ul>
        </nav>
      </MenuBar>
    </>
  );
}

export default Nav;

export const MenuBar = styled.div`
  background-color: #f5f5f5;
  height: 4vh;
  width: 100%;
  margin-bottom: 1rem;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;

    ul li{
      list-style: none;
      display: inline-block;

      a{
        color: black;
      }
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
