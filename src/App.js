import "./App.css";
import Testimonio from "./components/Testimonio/Testimonio.jsx";
import { data } from "./data";

function App() {
  // console.log(data);
  return (
    <div className="App">
      <div className="contenerdor-principal">
        <h1>Sección de Testimonios con React:</h1>
      </div>
      {data.map((testimonio, index) => {
        return (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        );
      })}
    </div>
  );
}

export default App;
