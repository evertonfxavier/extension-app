import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 440px;
    height: 500px;
    border: 1px solid red;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 96%; 
  }

  body, button, input, textarea {
    font-family: 'Helvetica Neue', 'Arial', 'Sans-Serif';
  }

  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
