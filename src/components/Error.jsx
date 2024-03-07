// eslint-disable-next-line react/prop-types
const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-white text-center mb-3 rounded-md p-3 uppercase font-bold">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
