import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FormControl, Row, Col, Button } from "react-bootstrap";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Formik, Field, useField, Form } from "formik";
import * as yup from "yup";

const PatientInfoStyled = styled.div`
    background-color: white;
    margin-left: 200px;
    padding: 20px;
`;

const RadioOptions = ({ label, value, ...props }) => {
    const [field] = useField(props);
    return (
        <div className="form-check form-check-inline">
            <input {...field} value={value} type="radio" />
            <label className="form-check-label">{label}</label>
        </div>
    );
};

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
                    <div className="container">
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
                            {({ values, isSubmitting }) => (
                                <Form>
                                    <Row>
                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="firstName">
                                                    First Name
                                                </label>
                                                <Field
                                                    name="firstName"
                                                    type="input"
                                                    as={FormControl}
                                                />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div
                                                className="form-group"
                                                controlId="formLastName"
                                            >
                                                <label htmlFor="formLastName">
                                                    Last Name
                                                </label>
                                                <Field
                                                    name="lastName"
                                                    type="input"
                                                    as={FormControl}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div
                                                className="form-group"
                                                controlId="formAge"
                                            >
                                                <label htmlFor="formAge">
                                                    Age
                                                </label>
                                                <Field
                                                    name="age"
                                                    type="input"
                                                    as={FormControl}
                                                />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div
                                                className="form-group"
                                                controlId="formWeight"
                                            >
                                                <label htmlFor="formWeight">
                                                    Weight (kg)
                                                </label>
                                                <Field
                                                    name="weight"
                                                    type="input"
                                                    as={FormControl}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label
                                                className="radio control-label"
                                                htmlFor="gender"
                                            >
                                                Gender
                                            </label>
                                            <div className="form-group">
                                                <RadioOptions
                                                    name="gender"
                                                    value="male"
                                                    label="Male"
                                                    id="genderRadioFemale"
                                                />
                                                <RadioOptions
                                                    name="gender"
                                                    value="female"
                                                    label="Female"
                                                    id="genderRadioFemale"
                                                />
                                                <RadioOptions
                                                    name="gender"
                                                    value="nonbinary"
                                                    label="Non-Binary"
                                                    id="genderRadioNonBinary"
                                                />
                                                <RadioOptions
                                                    name="gender"
                                                    value="other"
                                                    label="Other"
                                                    id="genderRadioOther"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div
                                                className="form-group"
                                                controlId="formInsuranceCompanyName"
                                            >
                                                <label htmlFor="formInsuranceCompanyName">
                                                    Insurance Company Name
                                                </label>
                                                <Field
                                                    name="companyName"
                                                    type="input"
                                                    as={FormControl}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div
                                                className="form-group"
                                                controlId="formSubscriberName"
                                            >
                                                <label htmlFor="formSubscriberName">
                                                    Subscriber Name
                                                </label>
                                                <Field
                                                    name="subscriberName"
                                                    type="input"
                                                    as={FormControl}
                                                />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div
                                                className="form-group"
                                                controlId="formMemberId"
                                            >
                                                <label htmlFor="formMemberId">
                                                    Member ID
                                                </label>
                                                <Field
                                                    name="memberId"
                                                    type="input"
                                                    as={FormControl}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label
                                                className="radio control-label"
                                                htmlFor="subscriberRelationship"
                                            >
                                                Relationship to Subscriber
                                            </label>
                                            <div className="form-group">
                                                <RadioOptions
                                                    name="subscriberRelationship"
                                                    value="self"
                                                    label="Self"
                                                    id="radioSubRelSelf"
                                                />
                                                <RadioOptions
                                                    name="subscriberRelationship"
                                                    value="spouse"
                                                    label="Spouse"
                                                    id="radioSubRelSpouse"
                                                />
                                                <RadioOptions
                                                    name="subscriberRelationship"
                                                    value="dependent"
                                                    label="Dependent"
                                                    id="radioSubRelDependent"
                                                />
                                                <RadioOptions
                                                    name="subscriberRelationship"
                                                    value="other"
                                                    label="Other"
                                                    id="radioSubRelOther  "
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button
                                                variant="secondary"
                                                type="submit"
                                            >
                                                Next
                                            </Button>
                                        </Col>
                                    </Row>
                                    <pre>{JSON.stringify(values, null, 2)}</pre>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Wrapper>
            </PatientInfoStyled>
        );
    }
}
