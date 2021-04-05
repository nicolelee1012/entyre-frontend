import "./App.css";
import Header from "./components/Header/Header";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import Diagnosis from "./components/Diagnosis/Diagnosis";
import Medication from "./components/Medication/Medication";
import Prescription from "./components/Prescription/Prescription";
import Home from "./components/Home/Home";



function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <PatientInfo />
            <Diagnosis />
            <Medication />
            <Prescription />
        </div>
    );
}

export default App;
