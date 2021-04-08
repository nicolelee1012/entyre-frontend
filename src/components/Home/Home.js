import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";
import "./Home.css";
import styled from "styled-components";
import Wrapper from "../Wrapper/Wrapper";

const Section1Styled = styled.div`
    background-color: white;
    margin-left: 200px;
    .active {
        border-bottom: 1px solid white;
    }
`;

export default class Home extends Component {
<<<<<<< HEAD
  render() {
    return (
      <Section1Styled class="box" id="home">
        <Wrapper>
          <div id="tehe">
            <h1>Solutions for </h1>
          </div>
          <div>
            <h1>better and more</h1>
          </div>
          <div>
            <h1>efficient healthcare</h1>
          </div>
          <div>
            <Link to="patientInfo" spy={true} smooth={true}>
              Get Started
            </Link>
          </div>
        </Wrapper>
      </Section1Styled>
    );
  }
=======
    render() {
        return (
            <Section1Styled className="box" id="home">
                <Wrapper>
                    <div id="tehe">
                        <h1>Solutions for </h1>
                    </div>
                    <div>
                        <h1>better and more</h1>
                    </div>
                    <div>
                        <h1>efficient healthcare</h1>
                    </div>
                    <div>
                        <Link to="patientInfo" spy={true} smooth={true}>
                            Get Started
                        </Link>
                    </div>
                </Wrapper>
            </Section1Styled>
        );
    }
>>>>>>> 6d9dd91de9a6cb1b9af0d09c40ab734a9ef86397
}
