/* eslint-disable react/prop-types */
import Patien from "./Patien";

// eslint-disable-next-line react/prop-types
const PatientList = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Adminitra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Patien
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
