import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../estilos/ListaDeTareas.css"

function ListaDeTareas(){

const [tareas, setTareas] = useState([]);

    return (
        /*Utilizar etiquetas vacías se llaman fragmentos y sirven para poder escribir la estrucutra*/
        <>
          <TareaFormulario />
          <div className="tareas-listas-contenedor">
            Lista de Tareas

          </div>
        </>
    );
}

export default ListaDeTareas;