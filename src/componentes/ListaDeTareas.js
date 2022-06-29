import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../estilos/ListaDeTareas.css"

function ListaDeTareas(){

const [tareas, setTareas] = useState([]);

const agregarTarea = tarea => {
  if (tarea.texto.trim()){
    tarea.texto=tarea.texto.trim();
    const tareaActualizadas = [tarea, ...tareas];
    setTareas(tareaActualizadas);
  }
  
}

    return (
        /*Utilizar etiquetas vacías se llaman fragmentos y sirven para poder escribir la estrucutra*/
        <>
          <TareaFormulario onSubmit={agregarTarea} />
          <div className="tareas-listas-contenedor">
            {
              tareas.map((tarea) =>
                <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  texto={tarea.texto}
                  completada={tarea.completada}
                  />

              )
            }
          </div>
        </>
    );
}

export default ListaDeTareas;