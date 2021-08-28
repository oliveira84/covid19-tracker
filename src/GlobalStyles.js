import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: #f5f6fa;
  }

  :root {
    font-family: Poppins, sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }
`;

export {createGlobalStyle}