import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Button, Form, Container, InputGroup } from "react-bootstrap";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";

const PatientInfoStyled = styled.div`
    background-color: white;
    margin-left: 200px;
    padding: 20px;
`;

const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    age: yup.number().required("Age is required"),
    weight: yup.number().required("Weight is required"),
    gender: yup.string().required("An option is required"),
    companyName: yup.string().required("Company Name is required"),
    subscriberName: yup.string().required("Subscriber Name is required"),
    memberId: yup.string().required("Member ID is required"),
    subscriberRelationship: yup.string().required("An option is required"),
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
                                age: 0,
                                weight: 0,
                                gender: "",
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
                                console.log(values);

                                // Sets setSubmitting to false after form is reset
                                setSubmitting(false);
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                isSubmitting,
                                values,
                                isInvalid,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Row>
                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            controlId="firstName"
                                        >
                                            <Form.Label>First Name</Form.Label>
                                            <Field
                                                name="firstName"
                                                type="input"
                                                as={Form.Control}
                                                onChange={handleChange}
                                                isInvalid={!!errors.firstName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.firstName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            controlId="LastName"
                                        >
                                            <Form.Label>Last Name</Form.Label>
                                            <Field
                                                name="lastName"
                                                type="input"
                                                as={Form.Control}
                                                onChange={handleChange}
                                                isInvalid={!!errors.lastName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.lastName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            controlId="age"
                                        >
                                            <Form.Label>Age</Form.Label>
                                            <Field
                                                name="age"
                                                type="input"
                                                as={Form.Control}
                                                onChange={handleChange}
                                                isInvalid={!!errors.age}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.age}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            controlId="weight"
                                        >
                                            <Form.Label>Weight (kg)</Form.Label>
                                            <Field
                                                name="weight"
                                                type="input"
                                                as={Form.Control}
                                                onChange={handleChange}
                                                isInvalid={!!errors.weight}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.weight}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="gender">
                                            <Form.Label>Gender</Form.Label>
                                            <Container>
                                                <Form.Row>
                                                    <Col>
                                                        <Field
                                                            name="gender"
                                                            value="male"
                                                            label="Male"
                                                            type="radio"
                                                            inline
                                                            as={Form.Check}
                                                            isInvalid={
                                                                !!errors.gender
                                                            }
                                                        />
                                                        <Field
                                                            name="gender"
                                                            value="female"
                                                            label="Female"
                                                            type="radio"
                                                            inline
                                                            as={Form.Check}
                                                            isInvalid={
                                                                !!errors.gender
                                                            }
                                                        />
                                                        <Field
                                                            name="gender"
                                                            value="nonbinary"
                                                            label="Non-Binary"
                                                            type="radio"
                                                            inline
                                                            as={Form.Check}
                                                            isInvalid={
                                                                !!errors.gender
                                                            }
                                                        />
                                                        <Field
                                                            name="gender"
                                                            value="other"
                                                            label="Other"
                                                            type="radio"
                                                            inline
                                                            as={Form.Check}
                                                            isInvalid={
                                                                !!errors.gender
                                                            }
                                                            feedback={
                                                                errors.gender
                                                            }
                                                        />
                                                    </Col>
                                                </Form.Row>
                                            </Container>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            controlId="companyName"
                                        >
                                            <Form.Label>
                                                Insurance Company Name
                                            </Form.Label>
                                            <Field
                                                name="companyName"
                                                type="input"
                                                as={Form.Control}
                                                onChange={handleChange}
                                                isInvalid={!!errors.companyName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.companyName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            controlId="subscriberName"
                                        >
                                            <Form.Label>
                                                Subscriber Name
                                            </Form.Label>
                                            <Field
                                                name="subscriberName"
                                                type="input"
                                                as={Form.Control}
                                                onChange={handleChange}
                                                isInvalid={
                                                    !!errors.subscriberName
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.subscriberName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            controlId="memberId"
                                        >
                                            <Form.Label>Member ID</Form.Label>
                                            <Field
                                                name="memberId"
                                                type="input"
                                                as={Form.Control}
                                                onChange={handleChange}
                                                isInvalid={!!errors.memberId}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.memberId}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group
                                            as={Col}
                                            controlId="subscriberRelationship"
                                        >
                                            <Form.Label>
                                                Relationship to Subscriber
                                            </Form.Label>
                                            <Container>
                                                <Form.Row>
                                                    <Col md="4">
                                                        <Field
                                                            name="subscriberRelationship"
                                                            value="self"
                                                            label="Self"
                                                            type="radio"
                                                            inline
                                                            as={Form.Check}
                                                            isInvalid={
                                                                !!errors.subscriberRelationship
                                                            }
                                                        />
                                                        <Field
                                                            name="subscriberRelationship"
                                                            value="spouse"
                                                            label="Spouse"
                                                            type="radio"
                                                            inline
                                                            as={Form.Check}
                                                            isInvalid={
                                                                !!errors.subscriberRelationship
                                                            }
                                                        />
                                                        <Field
                                                            name="subscriberRelationship"
                                                            value="dependent"
                                                            label="Dependent"
                                                            type="radio"
                                                            inline
                                                            as={Form.Check}
                                                            isInvalid={
                                                                !!errors.subscriberRelationship
                                                            }
                                                        />
                                                        <InputGroup>
                                                            <InputGroup.Prepend>
                                                                <InputGroup.Text>
                                                                    Other
                                                                </InputGroup.Text>
                                                            </InputGroup.Prepend>
                                                            <Field
                                                                name="subscriberRelationship"
                                                                type="input"
                                                                inline
                                                                as={
                                                                    Form.Control
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
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
                                            </Container>
                                        </Form.Group>
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
                                    <pre>{JSON.stringify(values, null, 2)}</pre>
                                </Form>
                            )}
                        </Formik>
                    </Container>
                </Wrapper>
            </PatientInfoStyled>
        );
    }
}
