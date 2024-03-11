/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

const Patien = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="m-3 shadow-md px-5 py-10 rounded-xl bg-blue-200 md:w-1/2 lg:w-2/3">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="normal-case font-bold">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-bold normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-bold normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-bold normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-bold normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold 
          rounded-md uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold 
        rounded-md uppercase"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patien;
