import React, { Component } from "react";
import {
    HouseDoor,
    PersonCircle,
    FileEarmark,
    BarChartLine,
    Folder,
} from "react-bootstrap-icons";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavbarStyled = styled.div`
  font-size: 20px;
  position: fixed;
  width: 200px;
  .header {
    background: #1e5733;
    padding: 40px;
    padding-top: 75%;
    padding-bottom: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
                        <HouseDoor />
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <PersonCircle />
                        <Link to="patientInfo" spy={true} smooth={true}>
                            Patient Info
                        </Link>
                    </li>
                    <li>
                        <FileEarmark />
                        <Link to="diagnosis" spy={true} smooth={true}>
                            Diagnosis
                        </Link>
                    </li>
                    <li>
                        <BarChartLine />
                        <Link to="optimization" spy={true} smooth={true}>
                            Optimization
                        </Link>
                    </li>

                    <li>
                        <Folder />
                        <Link to="patientReport" spy={true} smooth={true}>
                            Patient Report
                        </Link>
                    </li>
                </ul>
            </NavbarStyled>
        );
    }
}
