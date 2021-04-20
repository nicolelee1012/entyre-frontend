import React from "react";
import styled from "styled-components";
import { width } from "../Header/Header";

const WrapperStyled = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left: ${width}px;
    padding: 60px;
    h1 {
        font-size: 52px;
        font-weight: bold;
    }
    h2 {
        font-size: 42px;
    }
    h3 {
        font-size: 30px;
    }
    p {
        font-size: 22px;
    }
    .btn-primary,
    .btn-primary:focus {
        color: white !important;
        background: #25683e !important;
        border-color: #25683e !important;
        transition: all 0.25s ease-in-out !important;
        box-shadow: none !important; 
    }
    .btn-primary:hover,
    .btn-primary:visited {
        font-weight: 600; !imporant; 
        outline: 2px #25683e !important;
        box-shadow: 0 0 0 4px #ace2b8 !important;
    }
    .btn-primary:active {
        background: #ace2b8 !important;
        color: #25683e !important;
    }
`;

export default function Wrapper({ children }) {
    return <WrapperStyled>{children}</WrapperStyled>;
}
