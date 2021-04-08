import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FormControl, Row, Col, Button } from "react-bootstrap";
import { Formik, Field, useField, Form } from "formik";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import ReactDOM from "react-dom";
import * as Yup from "yup";
import Collapsible from "react-collapsible";
import "./Diagnosis.css";

const DiagnosisStyled = styled.div`
  background-color: white;
`;
/**
const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  
  const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
 */

const RadioOptions = ({ name, label, id, form, ...props }) => {
  const [field] = useField(props);
  return (
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={field}
      />
      <label class="form-check-label" for={id}>
        {label}
      </label>
    </div>
  );
};

function handleClick() {
    console.log('hehe');
  }

export default class Diagnosis extends Component {
  render() {
    return (
      <DiagnosisStyled id="diagnosis">
        <Wrapper>
          <div class="container">
            <h1>Diagnosis and Medication</h1>
            <Formik
              initialValues={{
                diagnosis: "",
                medication: "",
                amount: "",
                units: "",
                frequency: "",
                //mode:''
              }}
              validationSchema={Yup.object({
                diagnosis: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                medication: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                acceptedTerms: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept the terms and conditions."),
                jobType: Yup.string()
                  .oneOf(
                    ["designer", "development", "product", "other"],
                    "Invalid Job Type"
                  )
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <div>
                <Collapsible trigger="Diagnosis 1">
                  <Form>
                    <Row>
                      <Col>
                        <div class="form-group" controlId="formDiagnosis">
                          <label for="diagnosis">Diagnosis</label>
                          <Field
                            name="diagnosis"
                            type="input"
                            as={FormControl}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div class="form-group" controlId="formMedication">
                          <label for="medication">Medication</label>
                          <Field
                            name="medication"
                            type="input"
                            as={FormControl}
                          />
                        </div>
                      </Col>
                      <Col>
                        Dosage
                        <Row>
                          <label class="radio control-label" for="modeRadio">
                            Mode:
                          </label>
                          <Col>
                            <div class="form-group">
                              <RadioOptions
                                name="modeRadio"
                                value="pill"
                                label="Pill"
                                id="modeRadioPill"
                              />
                              <RadioOptions
                                name="modeRadio"
                                value="syrup"
                                label="Syrup"
                                id="modeRadioSyrup"
                              />
                              <RadioOptions
                                name="modeRadio"
                                value="injection"
                                label="Injection"
                                id="modeRadioInjection"
                              />
                              <RadioOptions
                                name="modeRadio"
                                value="topical"
                                label="Topical"
                                id="modeRadioTopical"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div class="form-group" controlId="formDosage">
                              <label for="Amount">Amount:</label>
                              <Field
                                name="amount"
                                type="input"
                                as={FormControl}
                              />
                            </div>
                          </Col>
                          <Col>
                            <div class="form-group" controlId="formDosage">
                              <label for="units">units:</label>
                              <Field
                                name="units"
                                type="input"
                                as={FormControl}
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <div class="form-group" controlId="formDosage">
                            <label for="frequency">Frequency:</label>
                            <Field
                              name="frequency"
                              type="input"
                              as={FormControl}
                            />
                          </div>
                        </Row>
                      </Col>
                    </Row>
                    <button type="submit" onClick={console.log("hello")}>Submit</button>
                  </Form>
                </Collapsible>
              </div>
            </Formik>
            <Formik
              initialValues={{
                diagnosis: "",
                medication: "",
                amount: "",
                units: "",
                Frequency: "",
                //mode:''
              }}
              validationSchema={Yup.object({
                diagnosis: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                medication: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                acceptedTerms: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept the terms and conditions."),
                jobType: Yup.string()
                  .oneOf(
                    ["designer", "development", "product", "other"],
                    "Invalid Job Type"
                  )
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <div>
                <Collapsible trigger="Diagnosis 2">
                  <Form>
                    <Row>
                      <Col>
                        <div class="form-group" controlId="formDiagnosis">
                          <label for="diagnosis">Diagnosis</label>
                          <Field
                            name="diagnosis"
                            type="input"
                            as={FormControl}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div class="form-group" controlId="formMedication">
                          <label for="medication">Medication</label>
                          <Field
                            name="medication"
                            type="input"
                            as={FormControl}
                          />
                        </div>
                      </Col>
                      <Col>
                        Dosage
                        <Row>
                          <label class="radio control-label" for="modeRadio">
                            Mode:
                          </label>
                          <Col>
                            <div class="form-group">
                              <RadioOptions
                                name="modeRadio"
                                value="pill"
                                label="Pill"
                                id="modeRadioPill"
                              />
                              <RadioOptions
                                name="modeRadio"
                                value="syrup"
                                label="Syrup"
                                id="modeRadioSyrup"
                              />
                              <RadioOptions
                                name="modeRadio"
                                value="injection"
                                label="Injection"
                                id="modeRadioInjection"
                              />
                              <RadioOptions
                                name="modeRadio"
                                value="topical"
                                label="Topical"
                                id="modeRadioTopical"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div class="form-group" controlId="formDosage">
                              <label for="Amount">Amount:</label>
                              <Field
                                name="amount"
                                type="input"
                                as={FormControl}
                              />
                            </div>
                          </Col>
                          <Col>
                            <div class="form-group" controlId="formDosage">
                              <label for="units">Units:</label>
                              <Field
                                name="dosage"
                                type="input"
                                as={FormControl}
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <div class="form-group" controlId="formDosage">
                            <label for="dosage">Frequency:</label>
                            <Field
                              name="dosage"
                              type="input"
                              as={FormControl}
                            />
                          </div>
                        </Row>
                      </Col>
                    </Row>
                    <button type="submit">Submit</button>
                  </Form>
                </Collapsible>
              </div>
            </Formik>
            <Formik
              initialValues={{
                diagnosis: "",
                medication: "",
                amount: "",
                units: "",
                Frequency: "",
                //mode:''
              }}
              validationSchema={Yup.object({
                diagnosis: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                medication: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                acceptedTerms: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept the terms and conditions."),
                jobType: Yup.string()
                  .oneOf(
                    ["designer", "development", "product", "other"],
                    "Invalid Job Type"
                  )
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <div>
                <Collapsible trigger="Diagnosis 3">
                  <Form>
                    <Row>
                      <Col>
                        <div class="form-group" controlId="formDiagnosis">
                          <label for="diagnosis">Diagnosis</label>
                          <Field
                            name="diagnosis"
                            type="input"
                            as={FormControl}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div class="form-group" controlId="formMedication">
                          <label for="medication">Medication</label>
                          <Field
                            name="medication"
                            type="input"
                            as={FormControl}
                          />
                        </div>
                      </Col>
                      <Col>
                        Dosage
                        <Row>
                          <label class="radio control-label" for="modeRadio">
                            Mode:
                          </label>
                          <Col>
                            <div class="form-group">
                              <RadioOptions
                                name="modeRadio"
                                value="pill"
                                label="Pill"
                                id="modeRadioPill"
                              />
                              <RadioOptions
                                name="modeRadio"
                                value="syrup"
                                label="Syrup"
                                id="modeRadioSyrup"
                              />
                              <RadioOptions
                                name="modeRadio"
                                value="injection"
                                label="Injection"
                                id="modeRadioInjection"
                              />
                              <RadioOptions
                                name="modeRadio"
                                value="topical"
                                label="Topical"
                                id="modeRadioTopical"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div class="form-group" controlId="formDosage">
                              <label for="Amount">Amount:</label>
                              <Field
                                name="amount"
                                type="input"
                                as={FormControl}
                              />
                            </div>
                          </Col>
                          <Col>
                            <div class="form-group" controlId="formDosage">
                              <label for="units">Units:</label>
                              <Field
                                name="dosage"
                                type="input"
                                as={FormControl}
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <div class="form-group" controlId="formDosage">
                            <label for="dosage">Frequency:</label>
                            <Field
                              name="dosage"
                              type="input"
                              as={FormControl}
                            />
                          </div>
                        </Row>
                      </Col>
                    </Row>
                    <button type="submit">Submit</button>
                  </Form>
                </Collapsible>
              </div>
            </Formik>
          </div>
        </Wrapper>
      </DiagnosisStyled>
    );
  }
}
