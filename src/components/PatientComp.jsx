/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const PatienComp = ({ patient, setPatient, deletePatient }) => {
  const { name, owner, email, admiDate, disDate, symptoms, id } = patient;

  const handleDelete = async () => {
    const res = await Swal.fire({
      icon: "question",
      title: "Eliminar paciente",
      text: "¿Estas seguro que quieres eliminar este paciente?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (res.isConfirmed) {
      deletePatient(id);
    }
  };
  return (
    <div className="m-3 shadow-md px-5 py-10 rounded-xl bg-blue-200 md:w-1/2 lg:w-2/3">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        nombre: {""}
        <span className="normal-case font-bold">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        propietario: {""}
        <span className="font-bold normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-bold normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        fecha de ingreso: {""}
        <span className="font-bold normal-case">{admiDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        fecha de alta: {""}
        <span className="font-bold normal-case">{disDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        sintomas: {""}
        <span className="font-bold normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold 
          rounded-md uppercase"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold 
        rounded-md uppercase"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatienComp;
