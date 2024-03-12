/* eslint-disable react/prop-types */
import PatientComp from "./PatientComp";

// eslint-disable-next-line react/prop-types
const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll flex items-center flex-col ">
      {patients && patients.length ? (
        <>
          <div className="bg-blue-300 bg-opacity-50 py-4 rounded-md w-2/3 mb-5">
            <h2 className="font-black text-3xl text-center text-black">
              Pacientes
            </h2>
            <p className="text-xl mt-2 text-center text-black font-bold">
              Adminitra tus pacientes y citas
            </p>
          </div>
          {patients.map((patient) => (
            <PatientComp
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
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
