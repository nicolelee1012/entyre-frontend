import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Wrapper, { scrollTo } from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Button, Container, Table } from "react-bootstrap";
import { Toggles2 } from "react-bootstrap-icons";

const OptimizationStyled = styled.div`
    .opt-table tbody td {
        border-right: 1px solid #bdbdbd;
    }
`;

export default class Optimization extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const requestOptions = {
            credentials: "include",
            method: "POST",
        };
        fetch("http://localhost:8080/generate-report", requestOptions);
        scrollTo("patientReport");
    }

    render() {
        return (
            <OptimizationStyled id="optimization">
                <Wrapper>
                    <Container>
                        <h2>Optimization {<Toggles2 />}</h2>
                        <Table className="opt-table">
                            <thead>
                                <tr>
                                    <th>Medication</th>
                                    <th>Diagnosis</th>
                                    <th>Side Effects</th>
                                    <th>Optimized Medication</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="primary" onClick={this.handleClick}>
                            Generate Report
                        </Button>
                    </Container>
                </Wrapper>
            </OptimizationStyled>
        );
    }
}
