import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
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
                        <Button variant="primary">Generate Report</Button>
                    </Container>
                </Wrapper>
            </OptimizationStyled>
        );
    }
}
