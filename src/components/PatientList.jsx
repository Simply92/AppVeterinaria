/* eslint-disable react/prop-types */
import Patien from "./Patien";

// eslint-disable-next-line react/prop-types
const PatientList = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll flex items-center flex-col ">
      {pacientes && pacientes.length ? (
        <>
          <div className="bg-blue-300 bg-opacity-50 py-4 rounded-md w-2/3 mb-5">
            <h2 className="font-black text-3xl text-center text-black">
              Pacientes
            </h2>
            <p className="text-xl mt-2 text-center text-black font-bold">
              Adminitra tus pacientes y citas
            </p>
          </div>
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
        <div className="bg-blue-300 bg-opacity-50 py-4 rounded-md w-2/3">
          <h2 className="font-black text-3xl text-center text-black">
            No hay pacientes
          </h2>
          <p className="text-xl mt-2 text-center text-black font-bold">
            Comienza agregando pacientes y apareceran en este lugar
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientList;
