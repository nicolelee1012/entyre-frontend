import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



export default class patientInfo extends Component {
    

    render() {
        return (
            <>
                <div id="home" style={{height: 500}}>
          <h1>Welcome</h1>
          <form noValidate autoComplete="off">
            <TextField required id="standard-required" label="Required" defaultValue="Your Name" />
         </form>
        </div>
        <div id="diagnosis" style={{height: 500}}>
        <h1>This is Diagnosis section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="Medication" style={{height: 500}}>
        <h1>This is Medication section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="prescription" style={{height: 500}}>
        <h1>This is the Prescription section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
            </>
        )
    }
}