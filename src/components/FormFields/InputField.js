import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Form } from "react-bootstrap";
import { getIn, Field, useField } from "formik";
import AsyncCreatableSelect from "react-select/async-creatable";

const InputField = ({ name, label, handleChange, col, ...props }) => {
    const [field, meta] = useField(props);
    const getError = getIn(meta.error, name);
    return (
        <Form.Group as={Col} md={col} controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Field
                {...field}
                value={handleChange}
                isInvalid={getError && meta.touched}
                as={Form.Control}
            />
            <Form.Control.Feedback type="invalid">
                {getError}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export class SelectField extends Component {
    handleChange = (value) => {
        this.props.onChange(this.props.name, value);
    };
    // const getError = getIn(meta.error, name);

    render() {
        return (
            <AsyncCreatableSelect
                onChange={this.handleChange}
                isMulti
                cacheOptions
                defaultOptions
                loadOptions={this.props.promiseOptions}
            />
            // <Form.Control.Feedback type="invalid">
            //     {getError}
            // </Form.Control.Feedback>
        );
    }
}

export default InputField;
