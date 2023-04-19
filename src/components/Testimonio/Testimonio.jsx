import React from "react";
import userFive from "../../images/user-05.jpg";
import "./Testimonio.css"

const Testimonio = () => {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={userFive}
        alt="img user-05"
      />
      <div className="contenerdor-texto-testimonio">
        <p className="nombre-testimonio">Charlie Smith en Holanda</p>
        <p className="cargo-testimonio">Ingeniero de Software en Spotify</p>
        <p className="texto-testimonio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          laboriosam soluta? Cumque vero excepturi dolorem nostrum soluta? Saepe
          facilis sit, aut eaque similique facere ducimus, eligendi nesciunt
          blanditiis recusandae excepturi!
        </p>
      </div>
    </div>
  );
};

export default Testimonio;
