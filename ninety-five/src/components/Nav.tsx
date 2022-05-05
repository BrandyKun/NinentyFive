import styled from "styled-components";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Menu from "./Menu";

function Nav() {
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
  height: 100%;
  max-height: 8vh;
  width: auto;
  white-space: nowrap;
  margin-bottom: 1rem;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    display: sticky;

    ul {
      overflow: auto;
      display: inline-flexbox;
      li {
        list-style: none;
        white-space: nowrap;

        a {
          color: black;
        }
      }
    }
  }

  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    overflow-x: scroll;
    width: 100vw;
    ::before {
      margin-top: auto; /*  added  */
    }
    ::after {
      margin-bottom: auto; /*  added  */
    }

    a {
      font-size: 0.75rem;
      margin: 0;
    }
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
  }
`;
