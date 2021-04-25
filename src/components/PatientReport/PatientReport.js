import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Folder } from "react-bootstrap-icons";

const PatientReportStyled = styled.div``;

export default class PatientReport extends Component {
    render() {
        return (
            <PatientReportStyled id="patientReport">
                <Wrapper>
                    <div class="container">
                        <h2>Patient Report {<Folder />}</h2>
                        <div style={{ height: "200px" }}></div>
                        <Button variant="primary">Complete Session</Button>
                    </div>
                </Wrapper>
            </PatientReportStyled>
        );
    }
}
