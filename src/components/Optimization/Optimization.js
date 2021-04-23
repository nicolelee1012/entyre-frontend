import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Button, Container } from "react-bootstrap";

const OptimizationStyled = styled.div``;

export default class Optimization extends Component {
    render() {
        return (
            <OptimizationStyled id="optimization">
                <Wrapper>
                    <Container>
                        <h2>Optimization</h2>
                        <div style={{ height: "200px" }}></div>
                        <Button variant="primary">
                            <Link to="patientReport" spy={true} smooth={true}>
                                Generate Report
                            </Link>
                        </Button>
                    </Container>
                </Wrapper>
            </OptimizationStyled>
        );
    }
}
