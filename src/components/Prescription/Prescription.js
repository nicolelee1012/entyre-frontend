import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";

const PrescriptionStyled = styled.div`
  background-color: white;
`;

export default class Prescription extends Component {
  render() {
    return (
      <PrescriptionStyled id="prescription">
        <Wrapper>
          <div class="container">
            <h1>This is Prescription section</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus. Totam nihil similique a repellat minus dolor amet
            quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
            minima animi.
          </div>
        </Wrapper>
      </PrescriptionStyled>
    );
  }
}
