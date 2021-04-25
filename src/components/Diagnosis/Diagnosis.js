import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, InputGroup, Container, Form } from "react-bootstrap";
import { Formik, Field, FieldArray, getIn } from "formik";
import Wrapper, { scrollTo } from "../Wrapper/Wrapper";
import styled from "styled-components";
import * as yup from "yup";
import Collapsible from "react-collapsible";
import "./Diagnosis.css";
import InputField from "../FormFields/InputField";
import { DiagnosisRadioField } from "../FormFields/RadioField";
import Search from "../Search/Search";
import { FileEarmark } from "react-bootstrap-icons";

function Diagnosis() {
    const DiagnosisStyled = styled.div``;
    const ModeRadioOptions = ["Pill", "Syrup", "Injection", "Topical"];
    const REQUIRED_MESSAGE = "Required";
    const validationSchema = yup.object().shape({
        numberOfDiagnosis: yup
            .string()
            .required("Number of diagnosis is required"),
        symptoms: yup
            .array()
            .of(
                yup.object().shape({
                    diagnosis: yup.string().required(REQUIRED_MESSAGE),
                    medication: yup.string().required(REQUIRED_MESSAGE),
                    amount: yup.number().required(REQUIRED_MESSAGE),
                    units: yup.number().required(REQUIRED_MESSAGE),
                    frequency: yup.string().required(REQUIRED_MESSAGE),
                    mode: yup.string().required(REQUIRED_MESSAGE),
                })
            )
            .required(REQUIRED_MESSAGE),
    });

    const initialValues = {
        numberOfDiagnosis: "",
        symptoms: [],
    };

    function onChangeDiagnosis(e, field, values, setValues) {
        // update dynamic form
        const symptoms = [...values.symptoms];
        const numberOfDiagnosis = e.target.value || 0;
        const previousNumber = parseInt(field.value || "0");
        if (previousNumber < numberOfDiagnosis) {
            for (let i = previousNumber; i < numberOfDiagnosis; i++) {
                symptoms.push({
                    diagnosis: "",
                    medication: "",
                    amount: "",
                    units: "",
                    frequency: "",
                    mode: "",
                    note: "",
                });
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
                <Container>
                    <h2>Add Diagnosis {<FileEarmark />}</h2>
                    <Formik
                        validateOnChange={true}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(true);

                            const requestOptions = {
                                credentials: "include",
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(values),
                            };

                            alert("submit: " + JSON.stringify(values, null, 2));
                            console.log(
                                "submit: ",
                                getIn(values, "symptoms[0]")
                            );

                            fetch(
                                "http://localhost:8080/diagnosis-details",
                                requestOptions
                            );
                            setSubmitting(false);

                            scrollTo("sideEffects");
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
                            setValues,
                        }) => (
                            <div>
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Row>
                                        <Form.Group>
                                            <Form.Label>
                                                Number of Diagnosis
                                            </Form.Label>
                                            <Field name="numberOfDiagnosis">
                                                {({ field }) => (
                                                    <select
                                                        {...field}
                                                        name="numberOfDiagnosis"
                                                        isInvalid={!!errors}
                                                        as={Form.Control}
                                                        onChange={(e) =>
                                                            onChangeDiagnosis(
                                                                e,
                                                                field,
                                                                values,
                                                                setValues
                                                            )
                                                        }
                                                    >
                                                        <option value=""></option>
                                                        {[
                                                            1,
                                                            2,
                                                            3,
                                                            4,
                                                            5,
                                                            6,
                                                            7,
                                                            8,
                                                            9,
                                                            10,
                                                        ].map((i) => (
                                                            <option
                                                                key={i}
                                                                value={i}
                                                            >
                                                                {i}
                                                            </option>
                                                        ))}
                                                    </select>
                                                )}
                                            </Field>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group>
                                        <FieldArray name="symptoms">
                                            {() =>
                                                values.symptoms.map(
                                                    (symptom, i) => {
                                                        // const ticketErrors =
                                                        //     (errors.symptoms
                                                        //         ?.length &&
                                                        //         errors.symptoms[
                                                        //             i
                                                        //         ]) ||
                                                        //     {};
                                                        // const ticketTouched =
                                                        //     (touched.symptoms
                                                        //         ?.length &&
                                                        //         touched.symptoms[
                                                        //             i
                                                        //         ]) ||
                                                        //     {};

                                                        return (
                                                            <div
                                                                key={i}
                                                                className="list-group list-group-flush"
                                                            >
                                                                <div className="list-group-item">
                                                                    <Collapsible
                                                                        trigger={`Diagnosis ${
                                                                            i +
                                                                            1
                                                                        }`}
                                                                    >
                                                                        <Form.Row>
                                                                            <Search />
                                                                            {console.log(
                                                                                "diagnosis " +
                                                                                    errors.symptoms
                                                                            )}
                                                                            <InputField
                                                                                name={`symptoms.${i}.medication`}
                                                                                label="Medication"
                                                                                col={
                                                                                    3
                                                                                }
                                                                            />
                                                                        </Form.Row>
                                                                        <Form.Row>
                                                                            <DiagnosisRadioField
                                                                                name={`symptoms.${i}.mode`}
                                                                                label="Mode"
                                                                                errors={
                                                                                    errors.mode
                                                                                }
                                                                                options={
                                                                                    ModeRadioOptions
                                                                                }
                                                                            />
                                                                            <InputGroup className="mb-4">
                                                                                <InputGroup.Prepend>
                                                                                    <InputGroup.Text>
                                                                                        Other
                                                                                    </InputGroup.Text>
                                                                                </InputGroup.Prepend>
                                                                                <Field
                                                                                    name={`symptoms.${i}.mode`}
                                                                                    type="input"
                                                                                    inline
                                                                                    as={
                                                                                        Form.Control
                                                                                    }
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
                                                                                    isInvalid={getIn(
                                                                                        errors,
                                                                                        `symptoms.${i}.mode`
                                                                                    )}
                                                                                />
                                                                                <Form.Control.Feedback type="invalid">
                                                                                    {
                                                                                        errors.mode
                                                                                    }
                                                                                </Form.Control.Feedback>
                                                                            </InputGroup>
                                                                        </Form.Row>
                                                                        <Form.Row>
                                                                            <InputField
                                                                                name={`symptoms.${i}.amount`}
                                                                                label="Amount"
                                                                                col={
                                                                                    3
                                                                                }
                                                                            />
                                                                            <InputField
                                                                                name={`symptoms.${i}.units`}
                                                                                label="Units"
                                                                                col={
                                                                                    3
                                                                                }
                                                                            />
                                                                            <InputField
                                                                                name={`symptoms.${i}.frequency`}
                                                                                label="Frequency"
                                                                                col={
                                                                                    3
                                                                                }
                                                                            />
                                                                        </Form.Row>
                                                                        <Form.Row>
                                                                            <InputGroup className="mb-4">
                                                                                <InputGroup.Prepend>
                                                                                    <InputGroup.Text>
                                                                                        Special
                                                                                        Notes
                                                                                    </InputGroup.Text>
                                                                                </InputGroup.Prepend>
                                                                                <Field
                                                                                    name={`symptoms.${i}.note`}
                                                                                    type="input"
                                                                                    inline
                                                                                    as={
                                                                                        Form.Control
                                                                                    }
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
                                                                                />
                                                                            </InputGroup>
                                                                        </Form.Row>
                                                                    </Collapsible>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )
                                            }
                                        </FieldArray>
                                    </Form.Group>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Next
                                    </Button>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </Container>
            </Wrapper>
        </DiagnosisStyled>
    );
}

export default Diagnosis;
