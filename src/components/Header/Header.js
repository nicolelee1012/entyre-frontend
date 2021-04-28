import React, { Component } from "react";
import {
    HouseDoor,
    PersonCircle,
    FileEarmark,
    JournalMedical,
    Toggles2,
    Folder,
} from "react-bootstrap-icons";
import { Link } from "react-scroll";
import styled from "styled-components";

export const width = 250;
const NavbarStyled = styled.div`
    font-size: 22px;
    position: fixed;
    width: ${width}px;
    .header {
        background: #1d5d36;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        color: white;
        min-height: 100vh;
        top: 0;
        * {
            cursor: pointer;
        }
        .scrolling-buttons {
            display: flex;
            flex-direction: column;
        }
    }
    .scrolling-buttons {
        display: flex;
        flex-direction: column;
    }
    .header li {
        padding: 7px;
        display: flex;
        align-items: center;
    }
    .header li a {
        padding-left: 12px;
    }
`;

export default class Header extends Component {
    render() {
        return (
            <NavbarStyled>
                <ul
                    className="header"
                    style={{
                        listStyle: "none",
                    }}
                >
                    <li>
                        <HouseDoor />
                        <Link
                            activeClass="active"
                            to="welcome"
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
                        <JournalMedical />
                        <Link to="sideEffects" spy={true} smooth={true}>
                            Symptoms
                        </Link>
                    </li>
                    <li>
                        <Toggles2 />
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
