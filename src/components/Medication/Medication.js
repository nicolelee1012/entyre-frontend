import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";

const MedicationStyled = styled.div`
  background-color: white;
`;

export default class Medication extends Component {
  render() {
    return (
      <MedicationStyled id="medication">
        <Wrapper>
          <div class="container">
            <h1>This is Medication section</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus. Totam nihil similique a repellat minus dolor amet
            quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
            minima animi.
          </div>
        </Wrapper>
      </MedicationStyled>
    );
  }
}
