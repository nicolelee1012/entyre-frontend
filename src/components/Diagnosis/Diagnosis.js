import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  FormControl,
  Row,
  Col,
  Button,
  Container,
  InputGroup,
  Form,

} from "react-bootstrap";
import { Formik, Field, FieldArray, ErrorMessage} from "formik";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import * as yup from "yup";
import Collapsible from "react-collapsible";
import "./Diagnosis.css";
import InputField from "../FormFields/InputField";
import RadioField from "../FormFields/RadioField";

function Diagnosis() {
const DiagnosisStyled = styled.div`
  background-color: white;
`;

const ModeRadioOptions = ["Pill", "Syrup", "Injection", "Topical", "other"];
const REQUIRED_MESSAGE = "Required";
const validationSchema = yup.object({
  numberOfDiagnosis: yup.string()
            .required('Number of diagnosis is required'),
  diagnosis: yup.string().required(REQUIRED_MESSAGE),
  medication: yup.string().required(REQUIRED_MESSAGE),
  amount: yup.string().required(REQUIRED_MESSAGE),
  units: yup.string().required(REQUIRED_MESSAGE),
  frequency: yup.string().required(REQUIRED_MESSAGE),
  mode: yup.string().required(REQUIRED_MESSAGE),
});

const initialValues={
  numberOfDiagnosis: '',
        symptoms: [],
 
};

function onChangeDiagnosis(e, field, values, setValues) {
  // update dynamic form
  const symptoms = [...values.symptoms];
  const numberOfDiagnosis = e.target.value || 0;
  const previousNumber = parseInt(field.value || '0');
  if (previousNumber < numberOfDiagnosis) {
      for (let i = previousNumber; i < numberOfDiagnosis; i++) {
          symptoms.push({ diagnosis:'', medication: '', amount: '', units: '', frequency: '', mode: '', note: ''});
      }
  } else {
      for (let i = previousNumber; i >= numberOfDiagnosis; i--) {
        symptoms.splice(i, 1);
      }
  }
  setValues({ ...values, symptoms });

  // call formik onChange method
  field.onChange(e);
}

 
    return (
      <DiagnosisStyled id="diagnosis">
        <Wrapper>
          <div class="container">
            <h1>Diagnosis and Medication</h1>
            <Formik
              validateOnChange={true}
              initialValues = {initialValues}
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
                isSubmitting,
                values,
                isInvalid,
                handleBlur,
                errors,
                touched,
                setValues
              }) => (
                <div>
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group>
                        <label>Number of Diagnosis</label>
                        <Field name="numberOfDiagnosis">
                          {({ field }) => (
                            <select {...field}  
                            name= "numberOfDiagnosis"
                            isInvalid={!!errors}
                            as={Form.Control}
                            onChange={e => onChangeDiagnosis(e, field, values, setValues)}
                           >
                              <option value=""></option>
                                            {[1,2,3,4,5,6,7,8,9,10].map(i => 
                                                <option key={i} value={i}>{i}</option>
                                            )}
                            </select>
                          )}
                        </Field>
                      </Form.Group>
                    </Form.Row>
                    <FieldArray name="symptoms">
                        {() => (values.symptoms.map((symptom, i) => {
                            const ticketErrors = errors.symptoms?.length && errors.symptoms[i] || {};
                            const ticketTouched = touched.tickets?.length && touched.tickets[i] || {};
                            return (
                                <div key={i} className="list-group list-group-flush">
                                    <div className="list-group-item">
                                      <Collapsible trigger={`Diagnosis ${i+1}`}>

                                        <Form.Row>
                        <InputField
                          name={`symptoms.${i}.diagnosis`}
                          label="Diagnosis"
                          handleChange={handleChange}
                          errors={errors.diagnosis}
                        />
                        <InputField
                          name={`symptoms.${i}.medication`}
                          label="Medication"
                          handleChange={handleChange}
                          errors={errors.medication}
                        />
                      </Form.Row>
                      <Form.Row>
                        <RadioField
                          name={`symptoms.${i}.mode`}
                          label="Mode"
                          errors={errors.mode}
                          options={ModeRadioOptions}
                        />
                        <InputGroup className="mb-4">
                          <InputGroup.Prepend>
                            <InputGroup.Text>Other</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Field
                            name="mode"
                            type="input"
                            inline
                            as={Form.Control}
                            onChange={handleChange}
                            isInvalid={!!errors.mode}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.mode}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Row>
                      <Form.Row>
                        <InputField
                          name={`symptoms.${i}.amount`}
                          label="Amount"
                          handleChange={handleChange}
                          errors={errors.amount}
                        />
                        <InputField
                          name={`symptoms.${i}.units`}
                          label="Units"
                          handleChange={handleChange}
                          errors={errors.units}
                        />
                        <InputField
                          name={`symptoms.${i}.frequency`}
                          label="Frequency"
                          handleChange={handleChange}
                          errors={errors.frequency}
                        />
                      </Form.Row>
                      <Form.Row>
                        <InputGroup className="mb-4">
                          <InputGroup.Prepend>
                            <InputGroup.Text>Special Notes</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Field
                            name={`symptoms.${i}.note`}
                            type="input"
                            inline
                            as={Form.Control}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </Form.Row>
                      </Collapsible>

                                    </div>
                                </div>
                            );
                        }))}
                        </FieldArray>
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

export default Diagnosis;