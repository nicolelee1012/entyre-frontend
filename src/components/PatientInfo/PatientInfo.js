import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Wrapper from '../Wrapper/Wrapper';
import styled from 'styled-components';


const PatientInfoStyled = styled.div`background-color: white;`;


export default class PatientInfo extends Component {
    render() {
        return (
            <PatientInfoStyled id="patientInfo" >
                 <Wrapper> 
                 <div class="container">
                <h1>Patient Information</h1>
                <div class="row">
                    <div class="col-sm">
                        <form class="needs-validation" autoComplete="off">
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
                <div class="row">
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="formControlSelectWeight">Age</label>
                            <select
                                class="form-control"
                                id="formControlSelectWeight"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="formControlSelectWeight">
                                Weight (kg)
                            </label>
                            <select
                                class="form-control"
                                id="formControlSelectWeight"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <form>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" checked />
                            Option 1
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />
                            Option 2
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />
                            Option 3
                        </label>
                    </form>
                </div>

                <div class="row">
                    <div class="col-sm">
                        <form class="needs-validation" autoComplete="off">
                            <div class="form-group">
                                <label for="insuranceCompanyName">
                                    Insurance Company Name
                                </label>
                                <input
                                    type="name"
                                    class="form-control"
                                    id="insuranceCompanyName"
                                    placeholder="Insurance Company Name"
                                />
                            </div>
                        </form>
                        <form class="needs-validation" autoComplete="off">
                            <div class="form-group">
                                <label for="subscriberName">
                                    Subscriber Name
                                </label>
                                <input
                                    type="name"
                                    class="form-control"
                                    id="subscriberName"
                                    placeholder="Subscriber Name"
                                />
                            </div>
                        </form>
                        <form class="needs-validation" autoComplete="off">
                            <div class="form-group">
                                <label for="memberId">Member ID</label>
                                <input
                                    type="name"
                                    class="form-control"
                                    id="memberId"
                                    placeholder="Member ID"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="col-sm">
                        <form>
                            <label class="radio-inline">
                                <input type="radio" name="optradio" checked />
                                Option 1
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="optradio" />
                                Option 2
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="optradio" />
                                Option 3
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            </Wrapper>
            </PatientInfoStyled>
        );
    }
}

