import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";
import styled from "styled-components";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Button, Form } from "react-bootstrap";

const DoctorNameStyled = styled.div`
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

const DoctorNameSpacing = styled.div`
    padding-top: 30px;
`;

const ButtonSpacing = styled.div`
    padding-top: 15px;
`;

export default class DoctorName extends Component {
    render() {
        return (
            <DoctorNameStyled class="box" id="doctorName">
                <Wrapper>
                    <Container>
                        <h3>Hi, what is your name?</h3>
                        <DoctorNameSpacing>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Type Here..."
                                    value={this.props.doctorName}
                                    onChange={this.props.onChange}
                                ></Form.Control>
                            </Form.Group>
                        </DoctorNameSpacing>
                        <ButtonSpacing>
                            <Button>
                                <Link to="welcome" spy={true} smooth={true}>
                                    Nice to meet you!
                                </Link>
                            </Button>
                        </ButtonSpacing>
                    </Container>
                </Wrapper>
            </DoctorNameStyled>
        );
    }
}
