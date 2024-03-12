import { useEffect, useState } from "react";
import PatientList from "./components/PatientList";
import Header from "./components/Header";
import Form from "./components/Form";
import Fondo from "./assets/descarga6.jpg";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const deletePatient = (id) => {
    const updatePatients = patients.filter((patien) => patien.id !== id);
    setPatients(updatePatients);
  };

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLocalStorage = JSON.parse(
        localStorage.getItem("pacientes")
      );
      if (patientsLocalStorage && patientsLocalStorage.length > 0) {
        setPatients(patientsLocalStorage);
      }
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(patients));
  }, [patients]);

  return (
    <div
      className="bg-cover bg-no-repeat w-full h-full flex"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div className="container mx-auto mt-10">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
          />
          <PatientList
            patients={patients}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
