import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FormControl, Row, Col, Button, Form, Container } from "react-bootstrap";
import { Formik, Field, useField } from "formik";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import ReactDOM from "react-dom";
import * as yup from "yup";
import Collapsible from "react-collapsible";
import "./Diagnosis.css";

const DiagnosisStyled = styled.div`
  background-color: white;
`;


const validationSchema = yup.object({
  diagnosis1: yup.string().required("This is Required"),
  medication1: yup.string().required("Required"),
  amount1: yup.string().required("Required"),
  units1: yup.string().required("Required"),
  frequency1: yup.string().required("Required"),
  mode1: yup.string().required("Required"),
});

export default class Diagnosis extends Component {
  render() {
    return (
      <DiagnosisStyled id="diagnosis">
        <Wrapper>
          <div class="container">
            <h1>Diagnosis and Medication</h1>
            <Formik
              validateOnChange={true}
              initialValues={{
                //diagnosis 1
                diagnosis1: "",
                medication1: "",
                amount1: "",
                units1: "",
                frequency1: "",
                mode1:"",
                note1:"",
                //diagnosis 2
                diagnosis2: "",
                medication2: "",
                amount2: "",
                units2: "",
                frequency2: "",
                mode2:'',
                //diagnosis 3
                diagnosis3: "",
                medication3: "",
                amount3: "",
                units3: "",
                frequency3: "",
                mode3:"",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {

                setSubmitting(true);

                console.log(values);

                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
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
                <div>
                  <Form noValidate onSubmit={handleSubmit}>
                    <Collapsible trigger="Diagnosis 1">
                      <Form.Row>
                      <Form.Group as={Col} md="4" controlId="formDiagnosis1">
                      <Form.Label>Diagnosis</Form.Label>
                      <Field
                        name="diagnosis1"
                        type="input"
                        as={Form.Control}
                        onChange={handleChange}
                        isInvalid={!!errors.diagnosis1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.diagnosis1}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formMedication">
                      <Form.Label>Medication</Form.Label>
                      <Field
                        name="medication1"
                        type="input"
                        as={FormControl}
                        onChange={handleChange}
                        isInvalid={!!errors.medication1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.medication1}
                      </Form.Control.Feedback>
                    </Form.Group>
                      </Form.Row>
                   <Form.Row>
                     <Form.Group as={Col} controlId="formMode1">
                      <Form.Label>Mode</Form.Label>
                      <Container>
                        <Form.Row>
                          <Col>
                            <Field
                              name="mode"
                              value="pill"
                              label="Pill"
                              type="radio"
                              inline
                              as={Form.Check}
                              isInvalid={!!errors.mode1}
                            />
                            <Field
                              name="mode"
                              value="syrup"
                              label="Syrup"
                              type="radio"
                              inline
                              as={Form.Check}
                              isInvalid={!!errors.mode1}
                            />
                            <Field
                              name="mode"
                              value="injection"
                              label="Injection"
                              type="radio"
                              inline
                              as={Form.Check}
                              isInvalid={!!errors.mode1}
                            />
                             <Field
                              name="mode"
                              value="topical"
                              label="Topical"
                              type="radio"
                              inline
                              as={Form.Check}
                              isInvalid={!!errors.mode1}
                            />
                            <Field
                              name="mode"
                              value="other"
                              label="Other"
                              type="radio"
                              inline
                              as={Form.Check}
                              isInvalid={!!errors.mode1}
                            />
                          </Col>
                        </Form.Row>
                      </Container>
                      <Form.Control.Feedback>
                        {errors.mode1}
                      </Form.Control.Feedback>
                    </Form.Group>
                   </Form.Row>
                   <Form.Row>
                      <Form.Group as={Col} md="4" controlId="formAmount">
                      <Form.Label>Amount</Form.Label>
                      <Field
                        name="amount1"
                        type="input"
                        as={Form.Control}
                        onChange={handleChange}
                        isInvalid={!!errors.amount1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.amount1}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formUnits1">
                      <Form.Label>Units</Form.Label>
                      <Field
                        name="units1"
                        type="input"
                        as={FormControl}
                        onChange={handleChange}
                        isInvalid={!!errors.units1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.units1}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formFrequency1">
                      <Form.Label>Frequency</Form.Label>
                      <Field
                        name="frequency1"
                        type="input"
                        as={FormControl}
                        onChange={handleChange}
                        isInvalid={!!errors.frequency1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.frequency1}
                      </Form.Control.Feedback>
                    </Form.Group>
                      </Form.Row>
                      </Collapsible>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </Wrapper>
      </DiagnosisStyled>
    );
  }
}
