
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Wrapper, { scrollTo } from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Button, Container } from "react-bootstrap";
import { Toggles2 } from "react-bootstrap-icons";

const OptimizationStyled = styled.div``;

export default class Optimization extends Component {
    
    constructor() {
        super()
        this.state = {
            username: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        const requestOptions = {
            credentials: "include",
            method: "POST",
        };
        fetch(
            "http://localhost:8080/generate-report",
            requestOptions
        );
        scrollTo("patientReport");
    }
    
    render() {
        return (
            <OptimizationStyled id="optimization">
                <Wrapper>
                    <Container>
                        <h2>Optimization {<Toggles2 />}</h2>
                        <Button variant="primary" onClick={this.handleClick}>
                            Generate Report
                        </Button>
                    </Container>
                </Wrapper>
            </OptimizationStyled>
        );
    }
}
