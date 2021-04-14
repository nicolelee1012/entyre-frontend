import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Form } from "react-bootstrap";
import { Field } from "formik";

const PatientInfoInputField = ({
    name,
    label,
    handleChange,
    isInvalid,
    errors,
    ...props
}) => {
    return (
        <Form.Group as={Col} md="4" controlId={name}>
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

export default PatientInfoInputField;
