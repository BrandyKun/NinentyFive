import React from "react";
import styled from "styled-components";
import {FaFacebookF, FaLinkedin} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { ImYoutube2 } from "react-icons/im";
// import logoWhite from '../assets/'

function Footer() {
  return (
    <FooterContainer>
      <footer>
        <a href="#" className="footer__logo">
          NinetyFive
          {/* <img src={} alt="" /> */}
        </a>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/Web-Samurai-104209262265227">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/websamurai_san/">
            <FiInstagram />
          </a>
          <a href="https://www.instagram.com/websamurai_san/">
            <ImYoutube2 />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Ninentyfive. All rights reserved</small>
        </div>
      </footer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
footer {
    background: var(--color-bg);
    padding: 3rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;
}

footer a{
    color: var(--color-primary);
}

.footer__logo {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
}

.permalinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto;
}

.footer__socials {
    display: flex;
    justify-content: center;
    gap:1rem;
    margin-bottom: 4rem;
}

.footer__socials a {
    background: var(--color-white);
    color: var(--color-bg);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
}

.footer__socials a:hover {
    background: transparent;
    color:var(--color-bg);
    border-color: var(--color-bg);
}

.footer__copyright {
    margin-bottom:4rem ;
    color: var(--color-bg);
}

/* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

@media( max-width: 600px) {
    .permalinks {
        flex-direction: column;
        gap: 1.5rem;
    }
  
    .footer__socials{
        margin-bottom: 2.6rem ;
    }
}`;
