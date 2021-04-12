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
              validationSchema={Yup.object({
                diagnosis1: Yup.string().required("Required"),
                medication1: Yup.string().required("Required"),
                amount1: Yup.string().required("Required"),
                units1: Yup.string().required("Required"),
                frequency1: Yup.string().required("Required"),
                mode1: Yup.string().required("Required"),
              })}
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
                      <Row>
                        <Col>
                          <div class="form-group" controlId="formDiagnosis">
                            <label for="diagnosis">Diagnosis</label>
                            <Field
                              name="diagnosis1"
                              type="input"
                              as={FormControl}
                              onChange={handleChange}
                              isInvalid={!!errors.diagnosis1}
                            />
                          </div>
                        </Col>
                        <Col>
                          <div class="form-group" controlId="formMedication">
                            <label for="medication">Medication</label>
                            <Field
                              name="medication1"
                              type="input"
                              as={FormControl}
                              onChange={handleChange}
                              isInvalid={!!errors.medication1}
                            />
                          </div>
                        </Col>
                        <Col>
                          <h4>Dosage</h4>
                          <Row>
                            <label class="radio control-label" for="modeRadio">
                             <h6>Mode:</h6> 
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
                                <RadioOptions
                                  name="modeRadio"
                                  value="other"
                                  label="Other"
                                  id="modeRadioTopical"
                                  inline
                              as={Form.Check}
                              isInvalid={!!errors.mode1}
                              feedback={errors.mode1}
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <div class="form-group" controlId="formDosage">
                                <label for="Amount">Amount:</label>
                                <Field
                                  name="amount1"
                                  type="input"
                                  as={FormControl}
                                  onChange={handleChange}
                              isInvalid={!!errors.amount1}
                                />
                              </div>
                            </Col>
                            <Col>
                              <div class="form-group" controlId="formDosage">
                                <label for="units">units:</label>
                                <Field
                                  name="units1"
                                  type="input"
                                  as={FormControl}
                                  onChange={handleChange}
                              isInvalid={!!errors.units1}
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <div class="form-group" controlId="formDosage">
                              <label for="frequency">Frequency:</label>
                              <Field
                                name="frequency1"
                                type="input"
                                as={FormControl}
                                onChange={handleChange}
                              isInvalid={!!errors.frequency1}
                              />
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </Collapsible>
                    <Collapsible trigger="Diagnosis 2">
                      <Row>
                        <Col>
                          <div class="form-group" controlId="formDiagnosis">
                            <label for="diagnosis">Diagnosis</label>
                            <Field
                              name="diagnosis2"
                              type="input"
                              as={FormControl}
                              onChange={handleChange}
                              isInvalid={!!errors.diagnosis1}
                            />
                            
                          </div>
                        </Col>
                        <Col>
                          <div class="form-group" controlId="formMedication">
                            <label for="medication">Medication</label>
                            <Field
                              name="medication2"
                              type="input"
                              as={FormControl}
                              onChange={handleChange}
                              isInvalid={!!errors.medication1}
                            />
                          </div>
                          
                        </Col>
                        <Col>
                          <h4>Dosage</h4>
                          <Row>
                            <label class="radio control-label" for="modeRadio">
                             <h6>Mode:</h6> 
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
                                <RadioOptions
                                  name="modeRadio"
                                  value="other"
                                  label="Other"
                                  id="modeRadioTopical"
                                  inline
                              as={Form.Check}
                              isInvalid={!!errors.mode1}
                              feedback={errors.mode1}
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <div class="form-group" controlId="formDosage">
                                <label for="Amount">Amount:</label>
                                <Field
                                  name="amount2"
                                  type="input"
                                  as={FormControl}
                                  onChange={handleChange}
                              isInvalid={!!errors.amount1}
                                />
                              </div>
                            </Col>
                            <Col>
                              <div class="form-group" controlId="formDosage">
                                <label for="units">units:</label>
                                <Field
                                  name="units2"
                                  type="input"
                                  as={FormControl}
                                  onChange={handleChange}
                              isInvalid={!!errors.units1}
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <div class="form-group" controlId="formDosage">
                              <label for="frequency">Frequency:</label>
                              <Field
                                name="frequency2"
                                type="input"
                                as={FormControl}
                                onChange={handleChange}
                              isInvalid={!!errors.frequency1}
                              />
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </Collapsible>
                    <Collapsible trigger="Diagnosis 3">
                      <Row>
                        <Col>
                          <div class="form-group" controlId="formDiagnosis">
                            <label for="diagnosis">Diagnosis</label>
                            <Field
                              name="diagnosis3"
                              type="input"
                              as={FormControl}
                            />
                          </div>
                        </Col>
                        <Col>
                          <div class="form-group" controlId="formMedication">
                            <label for="medication">Medication</label>
                            <Field
                              name="medication3"
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
                                  name="amount3"
                                  type="input"
                                  as={FormControl}
                                />
                              </div>
                            </Col>
                            <Col>
                              <div class="form-group" controlId="formDosage">
                                <label for="units">Units:</label>
                                <Field
                                  name="dosage3"
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
                                name="frequency3"
                                type="input"
                                as={FormControl}
                              />
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </Collapsible>
                    <Button variant="secondary"
                        type="submit"
                        disabled={isSubmitting}>
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
