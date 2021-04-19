import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Optimization.css";
import { Container, Form, Table } from "react-bootstrap";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
// import * as yup from "yup";
import { Formik } from "formik";
import { SelectField } from "../FormFields/InputField";

const OptimizationStyled = styled.div``;

// temporary values
const options1 = [
    { value: "headache", label: "Headache" },
    { value: "nausea", label: "Nausea" },
    { value: "soreness", label: "Soreness" },
];

const filterOptions = (inputValue) => {
    return options1.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterOptions(inputValue));
        }, 1000);
    });

// const REQUIRED_MESSAGE = "Required";
// const validationSchema = yup.object().shape({
//     sideEffects: yup.array().of(
//         yup.object().shape({
//             value: yup.string().required(REQUIRED_MESSAGE),
//         })
//     ),
//     frequency: yup.array().of(
//         yup.object().shape({
//             value: yup.string().required(REQUIRED_MESSAGE),
//         })
//     ),
//     patterns: yup.array().of(
//         yup.object().shape({
//             value: yup.string().required(REQUIRED_MESSAGE),
//         })
//     ),
// });

export default class Optimization extends Component {
    render() {
        return (
            <OptimizationStyled id="optimization">
                <Wrapper>
                    <Container fluid="md">
                        <h1>Symptoms and Side Effects</h1>
                        <Formik
                            validateOnChange={true}
                            initialValues={{
                                sideEffects: [
                                    {
                                        value: "",
                                        label: "",
                                        frequency: { value: "", label: "" },
                                        patterns: { value: "", label: "" },
                                    },
                                ],
                            }}
                            // validationSchema={validationSchema}
                            onSubmit={(
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                // When button submits form and form is in the process of submitting, submit button is disabled
                                setSubmitting(true);

                                // Resets form after submission is complete
                                resetForm();

                                // make async call

                                // Sets setSubmitting to false after form is reset
                                setSubmitting(false);
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                isSubmitting,
                                values,
                                errors,
                                touched,
                                setFieldValue,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Container className="flex-row justify-content-center">
                                        <Form.Row>
                                            <Table responsive="sm">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>
                                                            Symptoms & Side
                                                            Effects
                                                        </th>
                                                        <th>Frequency</th>
                                                        <th>
                                                            Notable Patterns
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <Form.Group>
                                                                <SelectField
                                                                    name="sideEffects"
                                                                    value={
                                                                        values.sideEffects
                                                                    }
                                                                    onChange={
                                                                        setFieldValue
                                                                    }
                                                                    promiseOptions={
                                                                        promiseOptions
                                                                    }
                                                                    // error={
                                                                    //     errors.sideEffects
                                                                    // }
                                                                    // touched={
                                                                    //     touched.sideEffects
                                                                    // }
                                                                />
                                                            </Form.Group>
                                                        </td>
                                                        <td>
                                                            <SelectField
                                                                name="frequency"
                                                                value={
                                                                    values
                                                                        .sideEffects[0]
                                                                        .frequency
                                                                }
                                                                onChange={
                                                                    setFieldValue
                                                                }
                                                                promiseOptions={
                                                                    promiseOptions
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <SelectField
                                                                name="patterns"
                                                                value={
                                                                    values.patterns
                                                                }
                                                                onChange={
                                                                    setFieldValue
                                                                }
                                                                promiseOptions={
                                                                    promiseOptions
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Form.Row>
                                        <pre>
                                            {JSON.stringify(values, null, 2)}
                                        </pre>
                                    </Container>
                                </Form>
                            )}
                        </Formik>
                    </Container>
                </Wrapper>
            </OptimizationStyled>
        );
    }
}
