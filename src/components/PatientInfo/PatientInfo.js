import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, Container, InputGroup, Col } from "react-bootstrap";
import Wrapper, { scrollTo } from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { PersonCircle } from "react-bootstrap-icons";
import InputField from "../FormFields/InputField";
import RadioField from "../FormFields/RadioField";
import DatePicker from "../FormFields/DatePicker";
import { BASE_API_URL as base } from "../../constants"

const PatientInfoStyled = styled.div`
    .form-check-label {
        padding-right: 10px;
    }
    .react-datepicker-wrapper {
        display: flex;
    }
    .react-datepicker__input-container {
        grid-column: 5/10;
        grid-row: 2/4;

        input {
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            color: #495057;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            display: block;
            width: 100%;
            transition: border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;
        }
    }
`;
const GenderRadioOptions = ["male", "female", "non-binary", "other"];
const SubRelRadioOptions = ["self", "spouse", "dependent"];
const REQUIRED_MESSAGE = "Required";
const validationSchema = yup.object({
    firstName: yup.string().required(REQUIRED_MESSAGE),
    lastName: yup.string().required(REQUIRED_MESSAGE),
    dateOfBirth: yup.string().required(REQUIRED_MESSAGE),
    age: yup
        .number()
        .typeError("Age must be a whole number")
        .integer("Age must be an integer")
        .required(REQUIRED_MESSAGE)
        .test(
            "maxDigits",
            "Age field must have less than 3 digits",
            (age) => String(age).length <= 3
        ),
    weight: yup
        .number()
        .typeError("Weight must be a number with 1 decimal place")
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
                    <Container fluid>
                        <h2>Patient Information {<PersonCircle />}</h2>
                        <Formik
                            validateOnChange={true}
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                dateOfBirth: "",
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
                                    `${base}/patient-information`,
                                    requestOptions
                                );

                                // Sets setSubmitting to false after form is reset
                                setSubmitting(false);

                                scrollTo("diagnosis");
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                isSubmitting,
                                values,
                                isInvalid,
                                errors,
                                touched,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Row>
                                        <InputField
                                            name="firstName"
                                            label="First Name"
                                        />
                                        <InputField
                                            name="lastName"
                                            label="Last Name"
                                        />
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group
                                            as={Col}
                                            md
                                            controlId={"dateOfBirth"}
                                        >
                                            <Form.Label>
                                                Date of Birth
                                            </Form.Label>
                                            <Field
                                                name="dateOfBirth"
                                                value={values.dateOfBirth}
                                                placeholder={"dd/mm/yyyy"}
                                                as={DatePicker}
                                                popperPlacement="bottom"
                                                popperModifiers={{
                                                    flip: {
                                                        behavior: ["bottom"],
                                                    },
                                                }}
                                            />
                                            {!!errors.dateOfBirth ? (
                                                <span
                                                    style={{
                                                        marginTop: "0.25rem",
                                                        fontSize: "80%",
                                                        color: "#dc3545",
                                                    }}
                                                >
                                                    Required
                                                </span>
                                            ) : null}
                                        </Form.Group>
                                        <InputField name="age" label="Age" />
                                    </Form.Row>
                                    <Form.Row>
                                        <InputField
                                            name="weight"
                                            label="Weight (kg)"
                                            md="6"
                                        />
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
                                        />
                                    </Form.Row>
                                    <Form.Row>
                                        <InputField
                                            name="companyName"
                                            label="Insurance Company Name"
                                        />
                                        <InputField
                                            name="memberId"
                                            label="Member ID"
                                        />
                                    </Form.Row>
                                    <Form.Row>
                                        <InputField
                                            name="subscriberName"
                                            label="Subscriber Name"
                                            md="6"
                                        />
                                        <RadioField
                                            name="subscriberRelationship"
                                            label="Relationship to Subscriber"
                                            errors={
                                                errors.subscriberRelationship
                                            }
                                            options={SubRelRadioOptions}
                                        />
                                        <Col style={{ marginTop: "2rem" }}>
                                            <InputGroup
                                                size="sm"
                                                className="mb-3"
                                            >
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroup-sizing-sm">
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
                                                    {
                                                        errors.subscriberRelationship
                                                    }
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Col>
                                    </Form.Row>
                                    <div style={{ paddingTop: "20px" }}>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Container>
                </Wrapper>
            </PatientInfoStyled>
        );
    }
}
