import { useEffect, useState } from "react";
import PatientList from "./components/PatientList";
import Header from "./components/Header";
import Form from "./components/Form";
import Fondo from "./assets/descarga6.jpg";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = paciente.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLocalStorage = JSON.parse(
        localStorage.getItem("pacientes")
      );
      if (patientsLocalStorage && patientsLocalStorage.length > 0) {
        setPacientes(patientsLocalStorage);
      }
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div
      className="bg-cover bg-no-repeat w-full h-full flex"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div className="container mx-auto mt-10">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <PatientList
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
