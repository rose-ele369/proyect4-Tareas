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

const eliminarTarea = id => {
  const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
  setTareas(tareasActualizadas);
}

const completarTarea = id => {
  const tareasActualizadas = tareas.map(tarea => {
    if (tarea.id === id ) {
      tarea.completada = !tarea.completada;
    }
    return tarea;
  });
  setTareas(tareasActualizadas);
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
                  completarTarea={completarTarea}
                  eliminarTarea={eliminarTarea}
                  
                  />

              )
            }
          </div>
        </>
    );
}

export default ListaDeTareas;