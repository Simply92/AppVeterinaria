/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [admiDate, setAdmiDate] = useState("");
  const [disDate, setDisDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setAdmiDate(patient.admiDate);
      setDisDate(patient.disDate);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, owner, email, admiDate, disDate, symptoms].includes("")) {
      Swal.fire({
        icon: "error",
        title: "Faltan campos",
        text: "Todos los campos son obligatorios",
      });
      setError(true);
      return;
    }
    setError(false);

    const objetPatient = {
      name,
      owner,
      email,
      admiDate,
      disDate,
      symptoms,
    };

    if (patient.id) {
      objetPatient.id = patient.id;
      const updatePatients = patients.map((patienState) =>
        patienState.id === patient.id ? objetPatient : patienState
      );
      const res = await Swal.fire({
        icon: "question",
        title: "Editar paciente",
        text: "¿Estas seguro que quieres editar este paciente?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "No",
      });
      if (res.isConfirmed) {
        setPatients(updatePatients);
        setPatient({});
      } else {
        setPatient({});
      }
    } else {
      objetPatient.id = generarId();
      setPatients([...patients, objetPatient]);
      Swal.fire({
        icon: "success",
        title: "Tarea completada",
        text: "Su formulario fue cargado exitosamente",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
      });
    }

    setName("");
    setOwner("");
    setEmail("");
    setAdmiDate("");
    setDisDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 flex items-center flex-col">
      <div className="bg-blue-300 bg-opacity-50 py-4 rounded-md mb-2 w-full">
        <h2 className="font-black text-3xl text-center text-black">
          Seguimiento pacientes
        </h2>
        <p className="text-xl mt-2 text-center text-black font-bold">
          Añade pacientes o Editalos
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded-lg py-10 px-5 mb-10 bg-blue-200 mt-6"
      >
        {error && (
          <div className="bg-red-800 text-white text-center mb-3 rounded-md p-3 uppercase font-bold">
            <p>Todos los campos son obligatorios</p>
          </div>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            nombre del propietario
          </label>
          <input
            id="owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            fecha de ingreso
          </label>
          <input
            id="admiDate"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={admiDate}
            max={new Date().toISOString().split("T")[0]}
            onChange={(e) => setAdmiDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            fecha de alta
          </label>
          <input
            id="disDate"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={disDate}
            max={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDisDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            sintomas
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            cols="62"
            rows="6"
            placeholder="Describe los sintomas..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold cursor-pointer hover:bg-indigo-800 transition-all"
            value={patient.id ? "Editar paciente" : "Agregar paciente"}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
