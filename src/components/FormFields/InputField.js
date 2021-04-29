import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Form } from "react-bootstrap";
import { getIn, Field, useField } from "formik";

const InputField = ({ name, label, md, handleChange, ...props }) => {
    const [field, meta] = useField(props);
    const getError = getIn(meta.error, name);
    return (
        <Form.Group as={Col} md={md} controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Field
                {...field}
                value={handleChange}
                placeholder={"Type here..."}
                isInvalid={getError && meta.touched}
                as={Form.Control}
            />
            <Form.Control.Feedback type="invalid">
                {getError}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export default InputField;
