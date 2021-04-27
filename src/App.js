import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import Diagnosis from "./components/Diagnosis/Diagnosis";
import SideEffects from "./components/SideEffects/SideEffects";
import Optimization from "./components/Optimization/Optimization";
import PatientReport from "./components/PatientReport/PatientReport";
<<<<<<< HEAD
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <Home />
      <PatientInfo />
      <Diagnosis />
      <SideEffects />
      <Optimization />
      <PatientReport />
    </div>
  );
=======

function App() {
    return (
        <div className="App">
            <Logo />
            <Header />
            <Home />
            <PatientInfo />
            <Diagnosis />
            <SideEffects />
           <Optimization />
            <PatientReport />
        </div>
    );
>>>>>>> 2876a6026ead314f55ec25233dff5d030adfe16c
}

export default App;
