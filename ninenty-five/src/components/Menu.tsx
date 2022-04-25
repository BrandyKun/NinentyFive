import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "../Hoooks";
import Hamburger from "./Hamburger"

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()}>Link 1</StyledLink>
        <StyledLink onClick={() => close()}>Link 2</StyledLink>
        <StyledLink onClick={() => close()}>Link 3</StyledLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
     </div>
   );
};

export default Menu

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
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: black;
  text-decoration: none;

  :hover {
    color: black;
  }
`;
