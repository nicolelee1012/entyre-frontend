import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    h1 {
        font-size: 45px;
        font-weight: bold;
    }
    h2 {
        font-size: 30px;
    }
    p {
        font-size: 22px;
    }
    margin-left: 250px;
    padding: 20px;
    .btn {
        background-color: #25683e;
    }
`;

export default function Wrapper({ children }) {
    return <WrapperStyled>{children}</WrapperStyled>;
}
