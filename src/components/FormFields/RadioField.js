import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Form, Container } from "react-bootstrap";
import { Field } from "formik";

function titleCase(str) {
    var splitStr = str.toLowerCase().split("-");
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join("-");
}

const PatientInfoRadioField = ({
    name,
    label,
    isInvalid,
    errors,
    ...props
}) => {
    const { options } = props;
    return (
        <Form.Group as={Col} controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Container>
                <Form.Row>
                    {options.map((option) => (
                        <Field
                            name={name}
                            value={option}
                            label={titleCase(option)}
                            type="radio"
                            inline
                            as={Form.Check}
                            isInvalid={!!errors}
                        />
                    ))}
                </Form.Row>
            </Container>
        </Form.Group>
    );
};

export default PatientInfoRadioField;
