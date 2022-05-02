import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: black;
    scroll-behavior: smooth;
 }
 :root{
    --color-bg: #FF5757;
    --color-bg-variant: #181818;
    --color-primary: #FFFFFF;
    --color-primary-variant: #F2F2F2;
    --color-white:#FFF;
    --color-light: #c6c6c6;

    --transition: all 400ms ease;

    --container-width-lg:75%;
    --container-width-md:86%;
    --container-width-sm:90%;

    --text-font: "font-family: 'Open Sans', sans-serif";
}
html{
    scroll-behavior: smooth;
}

::-webkit-scrollbar{
    display: none;
}
 .container{
     width: 100%;
     display: flex;
     justify-items: center;
 }
 .navbar{
    position: relative;
  }
  .shop_page{
    height: 100vh;
  }
  .navBar button{
    position: fixed;
    left: 40px;
    top: 40px;
    z-index:10;
    cursor: pointer;
  }
  .menuNav{
    overflow-y: scroll;
    list-style: none;
    position: fixed;
    top: 0;
    background:  darkcyan;
    left: 0;
    bottom: 0;
    height: 100vh;
    width: 0;
    overflow: hidden;
    max-width: 290px;
    z-index: 9;
  }
  .menuNav.showMenu {
  width: 100%;
}

a {
  display: block;
  padding: 10px 40px;
  text-decoration: none;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: bold;
}

.menuNav li:first-child {
  margin-top: 7rem;
}

button{
        width: 30%;
        height:30%;
        font-size:1rem;
        background: var(--color-bg);
        color: #FFFFFF;
        border: none;
        margin: 0.75rem 1rem 0.75rem 2rem;
        border-radius: 25px;
        border: 1px solid #FFF;
        transition: var(--transition);
        /* &:hover{
          background: #FFFFFF;
          border: 0.5px solid var(--color-bg);
          color: var(--color-bg);
        } */
      }
`