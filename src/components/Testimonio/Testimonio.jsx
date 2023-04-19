import React from "react";
import "./Testimonio.css"

const Testimonio = ({imagen, nombre, cargo, pais, testimonio, empresa}) => {
 
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../../images/user-${imagen}.jpg`)}
        alt="img user"
      />
      <div className="contenerdor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{nombre} en {pais}</strong></p>
        <p className="cargo-testimonio">{cargo} en {empresa}</p>
        <p className="texto-testimonio">"{testimonio}"</p>
      </div>
    </div>
  );
};

export default Testimonio;
