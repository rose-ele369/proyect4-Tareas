import React from "react";
import "../estilos/TareaFormulario.css";

function TareaFormulario(props) {
  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"/>

        <button className="tarea-boton">
          Aregar Tarea
        </button>
    </form>
  );
}

export default TareaFormulario;