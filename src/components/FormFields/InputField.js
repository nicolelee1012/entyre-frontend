import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Form } from "react-bootstrap";
import { getIn, Field, useField } from "formik";

const InputField = ({
    name,
    label,
    handleChange,
    isInvalid,
    errors,
    col,
    ...props
}) => {
    return (
        <Form.Group as={Col} md={col} controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Field
                name={name}
                onChange={handleChange}
                isInvalid={!!errors}
                as={Form.Control}
                {...props}
            />
            <Form.Control.Feedback type="invalid">
                {errors}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export const DiagnosisInputField = ({
    name,
    label,
    handleChange,
    col,
    props,
}) => {
    const [field, meta] = useField(props);
    console.log(field);
    const getError = getIn(meta.error, name);
    const invalid = !!getError;
    // &&
    // getIn(meta.touched, "symptoms.[0].diagnosis");

    return (
        <Form.Group as={Col} md={col} controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Field
                name={name}
                onChange={handleChange}
                isInvalid={invalid}
                as={Form.Control}
                {...props}
            />
            {console.log("touched?" + meta.touched)}
            <Form.Control.Feedback type="invalid">
                {getError}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export default InputField;
