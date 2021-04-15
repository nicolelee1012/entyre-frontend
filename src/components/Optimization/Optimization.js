import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Optimization.css";
import { Container, Form, Table } from "react-bootstrap";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";
import { Formik, FieldArray, useField } from "formik";

const OptimizationStyled = styled.div`
    background-color: white;
`;

// temporary values
const options1 = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const options2 = [
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
];

const options3 = [
    { value: "sunny", label: "Sunny" },
    { value: "rainy", label: "Rainy" },
    { value: "cloudy", label: "Cloudy" },
];

// function renderPerson(person, index) {
//     return (
//         <tr key={index}>
//             <td>{person.name}</td>
//             <td>{person.address}</td>
//             <td>{person.age}</td>
//         </tr>
//     );
// }

const SelectField = (props) => {
    const [field] = useField(props);
    return (
        <CreatableSelect
            {...field}
            closeMenuOnSelect={false}
            isMulti
            options={options1}
            isClearable
            onChange={this.handleChange}
            onInputChange={this.handleInputChange}
        />
    );
};

export default class Optimization extends Component {
    state = {
        newValue1: [options1[0].value],
    };
    handleChange = (newValue, actionMeta) => {
        console.group("Value Changed");
        console.log(newValue);
        this.setState({ newValue1: newValue.value });
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    handleInputChange = (inputValue, actionMeta) => {
        console.group("Input Changed");
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    render() {
        return (
            <OptimizationStyled id="optimization">
                <Wrapper>
                    <Container fluid="md">
                        <h1>Symptoms and Side Effects</h1>
                        <Formik
                            validateOnChange={true}
                            initialValues={{
                                sideEffects: [],
                                frequency: [],
                                patterns: [],
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
                                isInvalid,
                                errors,
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
                                                    {/* {personArray.map(this.renderPerson)} */}
                                                    <tr>
                                                        <td>
                                                            <Form.Group>
                                                                <FieldArray name="sideEffects">
                                                                    {() =>
                                                                        values.sideEffects.map(
                                                                            (
                                                                                sideffect,
                                                                                i
                                                                            ) => {
                                                                                return (
                                                                                    <div
                                                                                        className="creatableselect"
                                                                                        key={
                                                                                            i
                                                                                        }
                                                                                    >
                                                                                        <SelectField />
                                                                                        {/* <CreatableSelect
                                                                                            closeMenuOnSelect={
                                                                                                false
                                                                                            }
                                                                                            isMulti
                                                                                            options={
                                                                                                options1
                                                                                            }
                                                                                            isClearable
                                                                                            onChange={
                                                                                                this
                                                                                                    .handleChange
                                                                                            }
                                                                                            onInputChange={
                                                                                                this
                                                                                                    .handleInputChange
                                                                                            }
                                                                                        /> */}
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        )
                                                                    }
                                                                </FieldArray>
                                                            </Form.Group>
                                                        </td>
                                                        <td>
                                                            <div className="creatableselect">
                                                                <CreatableSelect
                                                                    closeMenuOnSelect={
                                                                        false
                                                                    }
                                                                    isMulti
                                                                    options={
                                                                        options2
                                                                    }
                                                                    isClearable
                                                                    onChange={
                                                                        this
                                                                            .handleChange
                                                                    }
                                                                    onInputChange={
                                                                        this
                                                                            .handleInputChange
                                                                    }
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="creatableselect">
                                                                <CreatableSelect
                                                                    closeMenuOnSelect={
                                                                        false
                                                                    }
                                                                    isMulti
                                                                    options={
                                                                        options3
                                                                    }
                                                                    isClearable
                                                                    onChange={
                                                                        this
                                                                            .handleChange
                                                                    }
                                                                    onInputChange={
                                                                        this
                                                                            .handleInputChange
                                                                    }
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Form.Row>
                                        <pre>{this.state.newValue1}</pre>
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
