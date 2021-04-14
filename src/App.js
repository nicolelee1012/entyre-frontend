import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import Diagnosis from "./components/Diagnosis/Diagnosis";
import Medication from "./components/Medication/Medication";
import Optimization from "./components/Optimization/Optimization";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <PatientInfo />
            <Diagnosis />
            <Medication />
            <Optimization />
        </div>
    );
}

export default App;
