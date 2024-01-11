import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
   font-family: "nunito";
    a {
    text-decoration: none;
    color: black;
    }
    
    body{
        background-color: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-text"]};
    }

    
}
`;
