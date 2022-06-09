import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body{
        background-color: #111;
        color: #fff;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    footer{
        margin: 20px 0;
        text-align: center;
    }
`;