import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

export default class PatientInfo extends Component {
    render() {
        return (
            <div>
                <div id="patientinfo" class="container" style={{ height: 500 }}>
                    <h1>Patient Information</h1>
                    <div class="row">
                        <div class="col-sm">
                            <form class="needs-validation" autoComplete="off">
                                {/* <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue="Your Name"
                        /> */}
                                <div class="form-group">
                                    <label for="exampleInputFirstName">
                                        First Name
                                    </label>
                                    <input
                                        type="name"
                                        class="form-control"
                                        id="exampleInputFirstName"
                                        placeholder="First Name"
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="col-sm">
                            <form class="needs-validation" autoComplete="off">
                                <div class="form-group">
                                    <label for="exampleInputLastName">
                                        Last Name
                                    </label>
                                    <input
                                        type="name"
                                        class="form-control"
                                        id="exampleInputLastName"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
