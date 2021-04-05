import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";
import "./Home.css";
import styled from 'styled-components';
import Wrapper from '../Wrapper/Wrapper'


const Section1Styled = styled.div`
  background-color: white;
  .active {
    border-bottom: 1px solid white;
  }
`;


export default class Home extends Component {
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
}
