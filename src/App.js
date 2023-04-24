import "./App.css";
import Testimonio from "./components/Testimonio/Testimonio.jsx";
import { data } from "./data";
import logo from "./images/logo5.png";

function App() {
  // console.log(data);
  return (
    <div className="App">
      <div className="contenedor-principal">
        <div className="contenedor-cabecera">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <h1>Sección de Testimonios con React:</h1>
        <div >
          <div className="card">
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
        </div>
      </div>
    </div>
  );
}

export default App;
