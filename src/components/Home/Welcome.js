import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";
import styled from "styled-components";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Button } from "react-bootstrap";

const Section1Styled = styled.div`
    .box {
        display: flex;
        background-color: bisque;
        flex-direction: column;
        min-height: 100%;
    }

    .box > div {
        flex: 1 auto;
        display: flex;
    }
`;

const HomeSpacing = styled.div`
    height: 25vh;
`;

const ButtonSpacing = styled.div`
    padding-top: 20px;
`;

export default class Home extends Component {
    render() {
        return (
            <Section1Styled class="box" id="welcome">
                <Wrapper>
                    <Container>
                        <h1>Welcome {this.props.doctorName}!</h1>
                        <HomeSpacing />
                        <h3>Providing solutions for better and</h3>
                        <h3>more efficient healthcare</h3>
                        <ButtonSpacing>
                            <Button>
                                <Link to="patientInfo" spy={true} smooth={true}>
                                    Get Started
                                </Link>
                            </Button>
                        </ButtonSpacing>
                    </Container>
                </Wrapper>
            </Section1Styled>
        );
    }
}
