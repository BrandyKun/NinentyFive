import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
 }
 #root{
     margin: 0 auto;
 }
 .container{
     height: 100vh;
     width: 100%;
     background-color: blueviolet;
 }
 .navbar{
    position: relative;
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
  color: #3fffd2;
  text-transform: uppercase;
  font-weight: bold;
}

.menuNav li:first-child {
  margin-top: 7rem;
}
`