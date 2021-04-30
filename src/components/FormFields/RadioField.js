import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Form, Container } from "react-bootstrap";
import { Field, useField, getIn } from "formik";

function titleCase(str) {
    var splitStr = str.toLowerCase().split("-");
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join("-");
}

const RadioField = ({ name, label, isInvalid, errors, ...props }) => {
    const { options } = props;
    return (
        <Form.Group as={Col} md="4" style={{ marginRight: "-50px" }}>
            <Form.Label>{label}</Form.Label>
            <Container>
                <Form.Row style={{ marginTop: "5px", marginRight: "-50px" }}>
                    {options.map((option) => (
                        <Field
                            name={name}
                            value={option}
                            label={titleCase(option)}
                            type="radio"
                            as={Form.Check}
                            isInvalid={!!errors}
                            controlId={option}
                        />
                    ))}
                </Form.Row>
            </Container>
        </Form.Group>
    );
};

export const DiagnosisRadioField = ({
    name,
    label,
    isInvalid,
    errors,
    ...props
}) => {
    const { options } = props;
    const [meta] = useField(props);
    const getError = getIn(meta.error, name);
    const invalid = !!getError;
    return (
        <Form.Group as={Col}>
            <Container>
                <Form.Label>{label}</Form.Label>
                <Form.Row>
                    {options.map((option) => (
                        <Field
                            name={name}
                            value={option}
                            label={titleCase(option)}
                            type="radio"
                            inline
                            as={Form.Check}
                            isInvalid={invalid}
                            controlId={option}
                        />
                    ))}
                </Form.Row>
            </Container>
        </Form.Group>
    );
};

export default RadioField;
