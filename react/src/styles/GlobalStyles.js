/* eslint-disable no-unused-vars */
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {

        &,&.light-mode {

        }

        &.dark-mode {
            /* background-color: #000; */
        }

        // 
        --main-transition: all .5s;
    }
`;

export default GlobalStyles;
