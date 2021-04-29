import React, { Component } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";


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
        this.props.parentCallback(this.props.name, suggestion);
        return suggestion;
    };

    getInfo = async (value, type) => {
        const callEndpoint = `http://localhost:3000/search/${type}?q=${value}&limit=10`;
        const response = await axios.get(callEndpoint);
        const responseData = response.data;
        this.setState({
            suggestions: responseData,
        });
        console.log(callEndpoint);
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
            value,
            onChange: this.onChange,
            placeholder: "Search",
        };

        return (
          <div>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
            </div>
        );
    }
}

export default Search;
