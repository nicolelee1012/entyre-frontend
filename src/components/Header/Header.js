import React, { Component } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 200px;
  .header {
    background: black;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
    color: white;
    height: 100vh;
    top: 0;
    left: -100%;
    * {
      cursor: pointer;
    }
    .scrolling-buttons {
        display: flex;
        flex-direction: column;
    }
`;

export default class Header extends Component {
    render() {
        return (
            <NavbarStyled>
                <ul
                    class="header"
                    style={{
                        display: "flex",
                        listStyle: "none",
                        justifyContent: "space-around",
                    }}
                >
                    <li>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                        >
                            Welcome
                        </Link>
                    </li>
                    <li>
                        <Link to="patientInfo" spy={true} smooth={true}>
                            Patient Information
                        </Link>
                    </li>
                    <li>
                        <Link to="diagnosis" spy={true} smooth={true}>
                            Diagnosis
                        </Link>
                    </li>
                    <li>
                        <Link to="medication" spy={true} smooth={true}>
                            Medication
                        </Link>
                    </li>
                    <li>
                        <Link to="optimization" spy={true} smooth={true}>
                            Optimization
                        </Link>
                    </li>
                </ul>
            </NavbarStyled>
        );
    }
}
