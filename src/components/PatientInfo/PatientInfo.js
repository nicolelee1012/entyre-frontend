import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FormControl, Row, Col, Button } from "react-bootstrap";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Formik, Field, useField, Form } from "formik";

const PatientInfoStyled = styled.div`
  background-color: white;
`;

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

export default class PatientInfo extends Component {
  render() {
    return (
      <PatientInfoStyled id="patientInfo">
        <Wrapper>
          <div class="container">
            <h1>Patient Information</h1>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                // ages: 1,
                // weights: 1,
                // gender: "male",
                insuranceCompanyName: "",
                subscriberName: "",
                memberId: "",
              }}
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
                      <div class="form-group" controlId="formFirstName">
                        <label for="firstName">First Name</label>
                        <Field name="firstName" type="input" as={FormControl} />
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group" controlId="formLastName">
                        <label for="lastName">Last Name</label>
                        <Field name="lastName" type="input" as={FormControl} />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div class="form-group">
                        <label for="selectAge">Age</label>
                        <select class="form-control" id="selectAge">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label for="selectWeight">Weight (kg)</label>
                        <select class="form-control" id="selectWeight">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label class="radio control-label" for="genderRadio">
                        Gender
                      </label>
                      <div class="form-group">
                        <RadioOptions
                          name="genderRadio"
                          value="male"
                          label="Male"
                          id="genderRadioMale"
                        />
                        <RadioOptions
                          name="genderRadio"
                          value="female"
                          label="Female"
                          id="genderRadioFemale"
                        />
                        <RadioOptions
                          name="genderRadio"
                          value="nonbinary"
                          label="Non-Binary"
                          id="genderRadioNonBinary"
                        />
                        <RadioOptions
                          name="genderRadio"
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
                        class="form-group"
                        controlId="formInsuranceCompanyName"
                      >
                        <label for="insuranceCompanyName">
                          Insurance Company Name
                        </label>
                        <Field
                          name="insuranceCompanyName"
                          type="input"
                          as={FormControl}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div class="form-group" controlId="formSubscriberName">
                        <label for="subscriberName">Subscriber Name</label>
                        <Field
                          name="subscriberName"
                          type="input"
                          as={FormControl}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group" controlId="formMemberId">
                        <label for="memberId">Member ID</label>
                        <Field name="memberId" type="input" as={FormControl} />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label
                        class="radio control-label"
                        for="relationshipRadio"
                      >
                        Relationship to Subscriber
                      </label>
                      <div class="form-group">
                        <RadioOptions
                          name="relationshipRadio"
                          value="self"
                          label="Self"
                          id="relationshipRadioSelf"
                        />
                        <RadioOptions
                          name="relationshipRadio"
                          value="spouse"
                          label="Spouse"
                          id="relationshipRadioSpouse"
                        />
                        <RadioOptions
                          name="relationshipRadio"
                          value="dependent"
                          label="Dependent"
                          id="relationshipRadioDependent"
                        />
                        <RadioOptions
                          name="relationshipRadio"
                          value="other"
                          label="Other"
                          id="relationshipRadioOther"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button variant="secondary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </Wrapper>
      </PatientInfoStyled>
    );
  }
}
