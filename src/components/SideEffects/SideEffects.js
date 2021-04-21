import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SideEffects.css";
import { Container, Form, Table, Button } from "react-bootstrap";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
// import * as yup from "yup";
import { Formik, FieldArray } from "formik";
import SelectField from "../FormFields/SelectField";

const SideEffectsStyled = styled.div``;

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

export default class SideEffects extends Component {
    render() {
        return (
            <SideEffectsStyled id="sideEffects">
                <Wrapper>
                    <Container fluid="md">
                        <h2>Symptoms and Side Effects 💊</h2>
                        <Formik
                            validateOnChange={true}
                            initialValues={{
                                sideEffects: [
                                    {
                                        sideEffect: {
                                            value: "",
                                            label: "",
                                        },
                                        frequency: { value: "", label: "" },
                                        patterns: { value: "", label: "" },
                                    },
                                    {
                                        sideEffect: {
                                            value: "",
                                            label: "",
                                        },
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
                            render={({
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
                                        <FieldArray name="sideEffects">
                                            {(arrayHelpers) => (
                                                <div>
                                                    <Table responsive="sm">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th>
                                                                    Symptoms &
                                                                    Side Effects
                                                                </th>
                                                                <th>
                                                                    Frequency
                                                                </th>
                                                                <th>
                                                                    Notable
                                                                    Patterns
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {values.sideEffects.map(
                                                                (
                                                                    sideEffect,
                                                                    i
                                                                ) => {
                                                                    return (
                                                                        <tr
                                                                            key={
                                                                                i
                                                                            }
                                                                        >
                                                                            <td>
                                                                                <SelectField
                                                                                    name={`sideEffects.${i}.sideEffect`}
                                                                                    value={
                                                                                        values
                                                                                            .sideEffects[
                                                                                            i
                                                                                        ]
                                                                                            .sideEffect
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
                                                                            </td>

                                                                            <td>
                                                                                <SelectField
                                                                                    name={`sideEffects.${i}.frequency`}
                                                                                    value={
                                                                                        values
                                                                                            .sideEffects[
                                                                                            i
                                                                                        ]
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
                                                                                    name={`sideEffects.${i}.patterns`}
                                                                                    value={
                                                                                        values
                                                                                            .sideEffects[
                                                                                            i
                                                                                        ]
                                                                                            .patterns
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
                                                                    );
                                                                }
                                                            )}
                                                        </tbody>
                                                    </Table>
                                                    <Button
                                                        variant="primary"
                                                        OnClick={() => {
                                                            arrayHelpers.push({
                                                                sideEffect: [
                                                                    {
                                                                        value:
                                                                            "",
                                                                        label:
                                                                            "",
                                                                    },
                                                                ],

                                                                frequency: [
                                                                    {
                                                                        value:
                                                                            "",
                                                                        label:
                                                                            "",
                                                                    },
                                                                ],

                                                                patterns: [
                                                                    {
                                                                        value:
                                                                            "",
                                                                        label:
                                                                            "",
                                                                    },
                                                                ],
                                                            });
                                                        }}
                                                    >
                                                        Add
                                                    </Button>
                                                </div>
                                            )}
                                        </FieldArray>

                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            Next
                                        </Button>

                                        <pre>
                                            {JSON.stringify(values, null, 2)}
                                        </pre>
                                    </Container>
                                </Form>
                            )}
                        />
                    </Container>
                </Wrapper>
            </SideEffectsStyled>
        );
    }
}
