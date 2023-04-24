import React from "react";
import "./Testimonio.css";

const Testimonio = ({ imagen, nombre, cargo, pais, testimonio, empresa }) => {
  return (
    <div className="contenedor-testimonio">
      <div className="contenedor-imagen">
        <img
          // className="imagen-testimonio"
          src={require(`../../images/user-${imagen}.jpg`)}
          alt="img user"
          className="imagen"
        />
      </div>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{nombre}</strong> en {pais}
        </p>
        <p className="cargo-testimonio">
          {cargo} en <strong>{empresa}</strong>
        </p>
        <p className="texto-testimonio">"{testimonio}"</p>
      </div>
    </div>
  );
};

export default Testimonio;
