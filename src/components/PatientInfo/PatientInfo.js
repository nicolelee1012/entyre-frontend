import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Button, Form, Container } from "react-bootstrap";
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
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().required(),
    weight: yup.number().required(),
    gender: yup.string().required("An option is required"),
    insuranceCompanyName: yup.string().required(),
    subscriberName: yup.string().required(),
    memberId: yup.string().required(),
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
                                insuranceCompanyName: "",
                                subscriberName: "",
                                memberId: "",
                                subscriberRelationship: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(data, { setSubmitting }) => {
                                setSubmitting(true);
                                // make async call
                                console.log(data);
                                setSubmitting(false);
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                isSubmitting,
                                values,
                                touched,
                                isValid,
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
                                            />
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
                                            />
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
                                            />
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
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="gender">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Row>
                                                <Col>
                                                    <Field
                                                        name="gender"
                                                        value="male"
                                                        label="Male"
                                                        type="radio"
                                                        inline
                                                        as={Form.Check}
                                                    />
                                                    <Field
                                                        name="gender"
                                                        value="female"
                                                        label="Female"
                                                        type="radio"
                                                        inline
                                                        as={Form.Check}
                                                    />
                                                    <Field
                                                        name="gender"
                                                        value="nonbinary"
                                                        label="Non-Binary"
                                                        type="radio"
                                                        inline
                                                        as={Form.Check}
                                                    />
                                                    <Field
                                                        name="gender"
                                                        value="other"
                                                        label="Other"
                                                        type="radio"
                                                        inline
                                                        as={Form.Check}
                                                    />
                                                </Col>
                                            </Form.Row>
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
                                            />
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
                                            />
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
                                            />
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
                                            <Form.Row>
                                                <Col>
                                                    <Field
                                                        name="subscriberRelationship"
                                                        value="self"
                                                        label="Self"
                                                        type="radio"
                                                        inline
                                                        as={Form.Check}
                                                    />
                                                    <Field
                                                        name="subscriberRelationship"
                                                        value="spouse"
                                                        label="Spouse"
                                                        type="radio"
                                                        inline
                                                        as={Form.Check}
                                                    />
                                                    <Field
                                                        name="subscriberRelationship"
                                                        value="dependent"
                                                        label="Dependent"
                                                        type="radio"
                                                        inline
                                                        as={Form.Check}
                                                    />
                                                    <Field
                                                        name="subscriberRelationship"
                                                        value="other"
                                                        label="Other"
                                                        type="radio"
                                                        inline
                                                        as={Form.Check}
                                                    />
                                                </Col>
                                            </Form.Row>
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
