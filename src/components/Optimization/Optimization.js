import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { Formik, FieldArray, Field, Form } from "formik";
import SelectField from "../FormFields/SelectField";

const OptimizationStyled = styled.div``;

const options1 = [
    { value: "headache", label: "Headache" },
    { value: "nausea", label: "Nausea" },
    { value: "soreness", label: "Soreness" },
];

const filterOptions1 = (inputValue) => {
    return options1.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const promiseOptions1 = (inputValue) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterOptions1(inputValue));
        }, 1000);
    });

export default class Optimization extends Component {
    render() {
        return (
            <OptimizationStyled id="optimization">
                <Wrapper>
                    <Container>
                        <h2>Optimization</h2>
                        <Formik
                            initialValues={{
                                friends: [{ name: "", age: "", location: "" }],
                            }}
                            onSubmit={async (values) => {
                                await new Promise((resolve) =>
                                    setTimeout(resolve, 500)
                                );
                                alert(JSON.stringify(values, null, 2));
                            }}
                            render={({ values, setFieldValue }) => (
                                <Form>
                                    <FieldArray
                                        name="friends"
                                        render={(arrayHelpers) => (
                                            <div>
                                                <Container className="flex-row justify-content-center">
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
                                                    </Table>
                                                    {values.friends.map(
                                                        (friend, index) => (
                                                            <div key={index}>
                                                                <Row>
                                                                    <Col>
                                                                        {/* <Field
                                                                            name={`friends.${index}.name.value`}
                                                                        /> */}
                                                                        <SelectField
                                                                            name={`friends.${index}.name.value`}
                                                                            value={
                                                                                values
                                                                                    .friends[
                                                                                    index
                                                                                ]
                                                                                    .name
                                                                            }
                                                                            onChange={
                                                                                setFieldValue
                                                                            }
                                                                            promiseOptions={
                                                                                promiseOptions1
                                                                            }
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Field
                                                                            name={`friends.${index}.age`}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Field
                                                                            name={`friends.${index}.location`}
                                                                        />
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        )
                                                    )}
                                                    <Button
                                                        variant="primary"
                                                        onClick={() =>
                                                            arrayHelpers.push({
                                                                name: "",
                                                                age: "",
                                                                location: "",
                                                            })
                                                        }
                                                    >
                                                        +
                                                    </Button>
                                                    <Button variant="primary">
                                                        <Link
                                                            to="patientReport"
                                                            spy={true}
                                                            smooth={true}
                                                        >
                                                            Generate Report
                                                        </Link>
                                                    </Button>
                                                    <pre>
                                                        {JSON.stringify(
                                                            values,
                                                            null,
                                                            2
                                                        )}
                                                    </pre>
                                                </Container>
                                            </div>
                                        )}
                                    />
                                </Form>
                            )}
                        />
                    </Container>
                </Wrapper>
            </OptimizationStyled>
        );
    }
}
