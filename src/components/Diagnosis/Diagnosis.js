import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  FormControl,
  Row,
  Col,
  Button,
  Form,
  Container,
  InputGroup,
} from "react-bootstrap";
import { Formik, Field, useField } from "formik";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import * as yup from "yup";
import Collapsible from "react-collapsible";
import "./Diagnosis.css";
import InputField from "../FormFields/InputField";
import RadioField from "../FormFields/RadioField";

const DiagnosisStyled = styled.div`
  background-color: white;
`;

const ModeRadioOptions = ["Pill", "Syrup", "Injection", "Topical", "other"];
const REQUIRED_MESSAGE = "Required";
const validationSchema = yup.object({
  diagnosis1: yup.string().required(REQUIRED_MESSAGE),
  medication1: yup.string().required(REQUIRED_MESSAGE),
  amount1: yup.string().required(REQUIRED_MESSAGE),
  units1: yup.string().required(REQUIRED_MESSAGE),
  frequency1: yup.string().required(REQUIRED_MESSAGE),
  mode1: yup.string().required(REQUIRED_MESSAGE),
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
                mode1: "",
                note1: "",
                //diagnosis 2
                diagnosis2: "",
                medication2: "",
                amount2: "",
                units2: "",
                frequency2: "",
                mode2: "",
                //diagnosis 3
                diagnosis3: "",
                medication3: "",
                amount3: "",
                units3: "",
                frequency3: "",
                mode3: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);

                const requestOptions = {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                };
                fetch(
                  "http://localhost:8080/diagnosis-details",
                  requestOptions
                );

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
                <div>
                  <Form noValidate onSubmit={handleSubmit}>
                    <Collapsible trigger="Diagnosis 1">
                      <Form.Row>
                        <InputField
                          name="diagnosis1"
                          label="Diagnosis"
                          handleChange={handleChange}
                          errors={errors.diagnosis1}
                        />
                        <InputField
                          name="medication1"
                          label="Medication"
                          handleChange={handleChange}
                          errors={errors.medication1}
                        />
                      </Form.Row>
                      <Form.Row>
                        <RadioField
                          name="mode1"
                          label="Mode"
                          errors={errors.mode1}
                          options={ModeRadioOptions}
                        />
                        <InputGroup className="mb-4">
                          <InputGroup.Prepend>
                            <InputGroup.Text>Other</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Field
                            name="mode1"
                            type="input"
                            inline
                            as={Form.Control}
                            onChange={handleChange}
                            isInvalid={!!errors.mode1}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.mode1}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Row>
                      <Form.Row>
                        <InputField
                          name="amount1"
                          label="Amount"
                          handleChange={handleChange}
                          errors={errors.amount1}
                        />
                        <InputField
                          name="units1"
                          label="Units"
                          handleChange={handleChange}
                          errors={errors.units1}
                        />
                        <InputField
                          name="frequency1"
                          label="Frequency"
                          handleChange={handleChange}
                          errors={errors.frequency1}
                        />
                      </Form.Row>
                      <Form.Row>
                        <InputGroup className="mb-4">
                          <InputGroup.Prepend>
                            <InputGroup.Text>Special Notes</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Field
                            name="note1"
                            type="input"
                            inline
                            as={Form.Control}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </Form.Row>
                    </Collapsible>
                    <Collapsible trigger="Diagnosis 2">
                      <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formDiagnosis2">
                          <Form.Label>Diagnosis</Form.Label>
                          <Field
                            name="diagnosis2"
                            type="input"
                            as={Form.Control}
                            onChange={handleChange}
                            isInvalid={!!errors.diagnosis2}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.diagnosis2}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formMedication2">
                          <Form.Label>Medication</Form.Label>
                          <Field
                            name="medication2"
                            type="input"
                            as={FormControl}
                            onChange={handleChange}
                            isInvalid={!!errors.medication2}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.medication2}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formMode2">
                          <Form.Label>Mode</Form.Label>
                          <Container>
                            <Form.Row>
                              <Col>
                                <Field
                                  name="mode2"
                                  value="pill"
                                  label="Pill"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode2}
                                />
                                <Field
                                  name="mode2"
                                  value="syrup"
                                  label="Syrup"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode2}
                                />
                                <Field
                                  name="mode2"
                                  value="injection"
                                  label="Injection"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode2}
                                />
                                <Field
                                  name="mode2"
                                  value="topical"
                                  label="Topical"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode2}
                                />
                                <Field
                                  name="mode2"
                                  value="other"
                                  label="Other"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode2}
                                  feedback={errors.mode2}
                                />
                              </Col>
                            </Form.Row>
                          </Container>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formAmount">
                          <Form.Label>Amount</Form.Label>
                          <Field
                            name="amount2"
                            type="input"
                            as={Form.Control}
                            onChange={handleChange}
                            isInvalid={!!errors.amount2}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.amount2}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formUnits2">
                          <Form.Label>Units</Form.Label>
                          <Field
                            name="units2"
                            type="input"
                            as={FormControl}
                            onChange={handleChange}
                            isInvalid={!!errors.units2}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.units2}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formFrequency2">
                          <Form.Label>Frequency</Form.Label>
                          <Field
                            name="frequency2"
                            type="input"
                            as={FormControl}
                            onChange={handleChange}
                            isInvalid={!!errors.frequency2}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.frequency2}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Form.Row>
                    </Collapsible>
                    <Collapsible trigger="Diagnosis 3">
                      <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formDiagnosis3">
                          <Form.Label>Diagnosis</Form.Label>
                          <Field
                            name="diagnosis3"
                            type="input"
                            as={Form.Control}
                            onChange={handleChange}
                            isInvalid={!!errors.diagnosis3}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.diagnosis3}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formMedication3">
                          <Form.Label>Medication</Form.Label>
                          <Field
                            name="medication3"
                            type="input"
                            as={FormControl}
                            onChange={handleChange}
                            isInvalid={!!errors.medication3}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.medication3}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formMode3">
                          <Form.Label>Mode</Form.Label>
                          <Container>
                            <Form.Row>
                              <Col>
                                <Field
                                  name="mode3"
                                  value="pill"
                                  label="Pill"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode3}
                                />
                                <Field
                                  name="mode3"
                                  value="syrup"
                                  label="Syrup"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode3}
                                />
                                <Field
                                  name="mode3"
                                  value="injection"
                                  label="Injection"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode3}
                                />
                                <Field
                                  name="mode3"
                                  value="topical"
                                  label="Topical"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode3}
                                />
                                <Field
                                  name="mode3"
                                  value="other"
                                  label="Other"
                                  type="radio"
                                  inline
                                  as={Form.Check}
                                  isInvalid={!!errors.mode3}
                                  feedback={errors.mode3}
                                />
                              </Col>
                            </Form.Row>
                          </Container>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formAmount">
                          <Form.Label>Amount</Form.Label>
                          <Field
                            name="amount3"
                            type="input"
                            as={Form.Control}
                            onChange={handleChange}
                            isInvalid={!!errors.amount3}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.amount3}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formUnits3">
                          <Form.Label>Units</Form.Label>
                          <Field
                            name="units3"
                            type="input"
                            as={FormControl}
                            onChange={handleChange}
                            isInvalid={!!errors.units3}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.units3}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formFrequency3">
                          <Form.Label>Frequency</Form.Label>
                          <Field
                            name="frequency3"
                            type="input"
                            as={FormControl}
                            onChange={handleChange}
                            isInvalid={!!errors.frequency3}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.frequency3}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Form.Row>
                    </Collapsible>
                    <Button
                      variant="secondary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
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
