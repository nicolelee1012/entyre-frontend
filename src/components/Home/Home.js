import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DoctorName from "./DoctorName";
import Welcome from "./Welcome";

function changeName(event) {
    this.setState({ doctorName: event.target.value });
}

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            doctorName: "",
        };
    }

    changeName = (event) => {
        this.setState({ doctorName: event.target.value });
    };
    render() {
        return (
            <div>
                <DoctorName
                    doctorName={this.state.doctorName}
                    onChange={changeName.bind(this)}
                />
                <Welcome doctorName={this.state.doctorName} />
            </div>
        );
    }
}
