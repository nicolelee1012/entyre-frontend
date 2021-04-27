import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import Diagnosis from "./components/Diagnosis/Diagnosis";
import SideEffects from "./components/SideEffects/SideEffects";
import Optimization from "./components/Optimization/Optimization";
import PatientReport from "./components/PatientReport/PatientReport";
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
}

export default App;
