import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import Wrapper, { scrollTo } from "../Wrapper/Wrapper";
import { Container, Button, Form } from "react-bootstrap";
import { Formik, Field } from "formik";
import { BASE_API_URL as base } from "../../constants";

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

function myHandleChange(e, setFieldValue, onChange) {
    setFieldValue("doctorName", e.target.value);
    onChange(e);
}

export default class DoctorName extends Component {
    render() {
        return (
            <DoctorNameStyled class="box" id="doctorName">
                <Wrapper>
                    <Container fluid>
                        <h3>Hi, what is your name?</h3>
                        <Formik
                            initialValues={{
                                doctorName: this.props.doctorName,
                                doctorEmail: "",
                            }}
                            onSubmit={(
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                // When button submits form and form is in the process of submitting, submit button is disabled
                                setSubmitting(true);

                                // make async call
                                const requestOptions = {
                                    credentials: "include",
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(values),
                                };
                                fetch(`${base}/doctor-contact`, requestOptions);
                                // Sets setSubmitting to false after form is reset
                                setSubmitting(false);

                                scrollTo("welcome");
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                isSubmitting,
                                values,
                                isInvalid,
                                setFieldValue,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <DoctorNameSpacing>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Field
                                                name="doctorName"
                                                type="text"
                                                placeholder="Type Here..."
                                                onChange={(e) =>
                                                    myHandleChange(
                                                        e,
                                                        setFieldValue,
                                                        this.props.onChange
                                                    )
                                                }
                                                as={Form.Control}
                                            ></Field>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>
                                                Email Address
                                            </Form.Label>
                                            <Field
                                                type="email"
                                                name="doctorEmail"
                                                placeholder={"Type here..."}
                                                onChange={handleChange}
                                                as={Form.Control}
                                            />
                                        </Form.Group>
                                    </DoctorNameSpacing>
                                    <ButtonSpacing>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            Nice to meet you!
                                        </Button>
                                    </ButtonSpacing>
                                </Form>
                            )}
                        </Formik>
                    </Container>
                </Wrapper>
            </DoctorNameStyled>
        );
    }
}
