import React, { Component } from "react";
import { Link } from "react-scroll";

export default class header extends Component {
    render() {
        return (
            <ul
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
                    <Link to="about" spy={true} smooth={true}>
                        Diagnosis
                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true}>
                        Medication
                    </Link>
                </li>
                <li>
                    <Link to="service" spy={true} smooth={true}>
                        Prescription
                    </Link>
                </li>
            </ul>
        );
    }
}
