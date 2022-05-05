import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "../Hoooks";
import Hamburger from "./Hamburger";
import { FaRegUser } from "react-icons/fa";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyleOffer></StyleOffer>
        <StyledLink onClick={() => close()}>
          Account <FaRegUser />
        </StyledLink>
        <StyledLink onClick={() => close()}>Clothes</StyledLink>
        <StyledLink onClick={() => close()}>Jumpers</StyledLink>
        <StyledLink onClick={() => close()}>Shorts</StyledLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;

const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: var(--color-bg);
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 4rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 600px) {
    width: 100vw;
    height: 100%;
    z-index: 2;
  }
`;

export const StyledLink = styled.a`
  margin: 0.25rem 0;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  text-transform: capitalize;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.9);
  animation: fadeIn linear 20s;
  -webkit-animation: fadeIn linear 7s;
  -moz-animation: fadeIn linear 7s;
  -o-animation: fadeIn linear 7s;
  -ms-animation: fadeIn linear 7s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  :hover {
    color: white;
  }

  :nth-child(2) {
    display: flex;
    justify-content: space-between;
    border-bottom: 5px solid var(--color-white);
  }
`;

const StyleOffer = styled.div`
  height: 20%;
  width: 90%;
  background-color: black;
  margin: 0 auto;
`;
