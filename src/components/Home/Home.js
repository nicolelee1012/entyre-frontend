import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";
import "./Home.css";
import styled from "styled-components";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Button } from "react-bootstrap";

const Section1Styled = styled.div`
    .active {
        border-bottom: 1px solid white;
    }
`;

export default class Home extends Component {
    render() {
        return (
            <Section1Styled class="box" id="home">
                <Wrapper>
                    <Container>
                        <h1>Welcome [Name] 👋</h1>
                        <div style={{ height: "20vh" }}></div>
                        <h2>Providing solutions for better and</h2>
                        <h2>more efficient healthcare</h2>
                        <div>
                            <Button>
                                <Link to="patientInfo" spy={true} smooth={true}>
                                    Get Started
                                </Link>
                            </Button>
                        </div>
                    </Container>
                </Wrapper>
            </Section1Styled>
        );
    }
}
