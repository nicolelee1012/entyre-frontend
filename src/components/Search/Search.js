import React, { Component } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import { Formik, Field, FieldArray, getIn } from "formik";

const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  getSuggestionValue = (suggestion) => {
    const { example } = this.props;
    console.log(example)
    //setFieldValue(example,suggestion)
    this.props.parentCallback(example, suggestion);
    return suggestion;
  };

  getInfo = async (value, type) => {
    const callEndpoint = `http://localhost:3000/search/${type}?q=${value}&limit=10`;
    const response = await axios.get(callEndpoint);
    const responseData = response.data;
    this.setState({
      suggestions: responseData,
    });
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    const { type } = this.props;
    this.getInfo(value, type);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Prescription",
      value,
      onChange: this.onChange,
    };

    return (
      <Formik>
         {({     
                            setFieldValue,
                        }) =>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}


      />
                      }
      </Formik>
    );
  }
}

export default Search;
