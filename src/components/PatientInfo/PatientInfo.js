import React, { Component, Link } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, Container, InputGroup } from "react-bootstrap";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";
import InputField from "../FormFields/InputField";
import RadioField from "../FormFields/RadioField";

const PatientInfoStyled = styled.div``;
const col = 4;
const GenderRadioOptions = ["male", "female", "non-binary", "other"];
const SubRelRadioOptions = ["self", "spouse", "dependent"];
const REQUIRED_MESSAGE = "Required";
const validationSchema = yup.object({
    firstName: yup.string().required(REQUIRED_MESSAGE),
    lastName: yup.string().required(REQUIRED_MESSAGE),
    age: yup
        .number("Age must be a whole number")
        .integer("Age must be an integer")
        .required(REQUIRED_MESSAGE)
        .test(
            "maxDigits",
            "Age field must have less than 3 digits",
            (age) => String(age).length <= 3
        ),
    weight: yup
        .number("Weight must be a number with 1 decimal place")
        .required(REQUIRED_MESSAGE)
        .test(
            "maxDigitsAfterDecimal",
            "Weight field must have 1 digit after decimal",
            (weight) => /^\d+(\.\d{1})?$/.test(weight)
        ),
    gender: yup.string().required(REQUIRED_MESSAGE),
    emailAddress: yup
        .string()
        .email("Invalid email")
        .required(REQUIRED_MESSAGE),
    companyName: yup.string().required(REQUIRED_MESSAGE),
    subscriberName: yup.string().required(REQUIRED_MESSAGE),
    memberId: yup.string().required(REQUIRED_MESSAGE),
    subscriberRelationship: yup.string().required(REQUIRED_MESSAGE),
});

export default class PatientInfo extends Component {
    render() {
        return (
            <PatientInfoStyled id="patientInfo">
                <Wrapper>
                    <Container>
                        <h1>Patient Information</h1>
                        <Formik
                            validateOnChange={true}
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                age: "",
                                weight: "",
                                gender: "",
                                emailAddress: "",
                                companyName: "",
                                subscriberName: "",
                                memberId: "",
                                subscriberRelationship: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                // When button submits form and form is in the process of submitting, submit button is disabled
                                setSubmitting(true);

                                // Resets form after submission is complete
                                resetForm();

                                // make async call
                                const requestOptions = {
                                    credentials: "include",
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(values),
                                };
                                fetch(
                                    "http://localhost:8080/patient-information",
                                    requestOptions
                                );

                                // Sets setSubmitting to false after form is reset
                                setSubmitting(false);
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                isSubmitting,
                                values,
                                isInvalid,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Row>
                                        <InputField
                                            name="firstName"
                                            label="First Name"
                                            col={col}
                                        />
                                        <InputField
                                            name="lastName"
                                            label="Last Name"
                                            col={col}
                                        />
                                    </Form.Row>
                                    <Form.Row>
                                        <InputField
                                            name="age"
                                            label="Age"
                                            col={col}
                                        />
                                        <InputField
                                            name="weight"
                                            label="Weight"
                                            col={col}
                                        />
                                    </Form.Row>
                                    <Form.Row>
                                        <RadioField
                                            name="gender"
                                            label="Gender"
                                            errors={errors.gender}
                                            options={GenderRadioOptions}
                                        />
                                    </Form.Row>
                                    <Form.Row>
                                        <InputField
                                            name="emailAddress"
                                            label="Email Address"
                                            col={col}
                                        />
                                        <InputField
                                            name="companyName"
                                            label="Insurance Company Name"
                                            col={col}
                                        />
                                    </Form.Row>
                                    <Form.Row>
                                        <InputField
                                            name="subscriberName"
                                            label="Subscriber Name"
                                            col={col}
                                        />
                                        <InputField
                                            name="memberId"
                                            label="Member ID"
                                            col={col}
                                        />
                                    </Form.Row>
                                    <Form.Row>
                                        <RadioField
                                            name="subscriberRelationship"
                                            label="Relationship to Subscriber"
                                            errors={
                                                errors.subscriberRelationship
                                            }
                                            options={SubRelRadioOptions}
                                        />
                                        <InputGroup className="mb-4">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    Other
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Field
                                                name="subscriberRelationship"
                                                type="input"
                                                inline
                                                as={Form.Control}
                                                onChange={handleChange}
                                                isInvalid={
                                                    !!errors.subscriberRelationship
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.subscriberRelationship}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group>
                                            <Button
                                                variant="secondary"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Next
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            )}
                        </Formik>
                    </Container>
                </Wrapper>
            </PatientInfoStyled>
        );
    }
}
