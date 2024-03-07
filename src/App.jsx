import { useState } from "react";
import PatientList from "./components/PatientList";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [pacientes, setPacientes] = useState([]);
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form setPacientes={setPacientes} pacientes={pacientes} />
        <PatientList pacientes={pacientes} />
      </div>
    </div>
  );
}

export default App;
