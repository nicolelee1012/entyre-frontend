import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import Diagnosis from "./components/Diagnosis/Diagnosis";
import PatientReport from "./components/PatientReport/PatientReport";
import Optimization from "./components/Optimization/Optimization";
import Logo from "./components/Logo/logo";


function App() {
    return (
        <div className="App">
            <Logo />
            <Header />
            <Home />
            <PatientInfo />
            <Diagnosis />
            <Optimization />
            <PatientReport />
        </div>
    );
}

export default App;
