/* eslint-disable react/prop-types */
import Patien from "./Patien";

// eslint-disable-next-line react/prop-types
const PatientList = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Adminitra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>

      {pacientes.map((paciente) => (
        <Patien key={paciente.id} paciente={paciente} />
      ))}
    </div>
  );
};

export default PatientList;
