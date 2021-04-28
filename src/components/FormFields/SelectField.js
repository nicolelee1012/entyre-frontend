import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";
import AsyncCreatableSelect from "react-select/async-creatable";

class SelectField extends Component {
  handleChange = (value) => {
    this.props.onChange(this.props.name, value);
  };

  render() {
    return (
      <Form.Group>
        <AsyncCreatableSelect
          isClearable
          onChange={this.handleChange}
          cacheOptions
          defaultOptions
          loadOptions={this.props.promiseOptions}
        />
        {/* {!!this.props.error && this.props.touched && (
                    <div style={{ color: "red" }}>{this.props.error}</div>
                )} */}
      </Form.Group>
    );
  }
}

export default SelectField;
