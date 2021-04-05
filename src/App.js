import "./App.css";
import Header from "./components/Header";
import PatientInfo from "./components/PatientInfo";
import Diagnosis from "./components/Diagnosis";
import Medication from "./components/Medication";
import Prescription from "./components/Prescription";

function App() {
    return (
        <div className="App">
            <Header />
            <PatientInfo />
            <Diagnosis />
            <Medication />
            <Prescription />
        </div>
    );
}

export default App;
