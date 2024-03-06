import PatientList from "./components/PatientList";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <PatientList />
      </div>
    </div>
  );
}

export default App;
