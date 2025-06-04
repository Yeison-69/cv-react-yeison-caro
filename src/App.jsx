// src/App.jsx
import React from "react";
import {
  cabecera,
  perfil,
  educacion,
  experiencia,
  stackTecnologias,
  proyectos,
  habilidades
} from "./data/cvData";

import CabeceraCV from "./Components/CabeceraCV";
import Perfil from "./Components/Perfil";
import Educacion from "./Components/Educacion";
import Experiencia from "./Components/Experiencia";
import StackTecnologias from "./Components/StackTecnologias";
import Proyectos from "./Components/proyecto";
import Habilidades from "./Components/Habilidades";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* Cabcera */}
   <CabeceraCV
  nombre={cabecera.nombre}
  profesion={cabecera.cargo} 
/>

      {/* Perfil */}
      <Perfil texto={perfil.texto} />

      {/* Educación */}
      <Educacion estudios={educacion} />

      {/* Experiencia */}
      <Experiencia trabajos={experiencia} />

      {/* Stack de Tecnologías */}
      <StackTecnologias tecnologias={stackTecnologias} />

      {/* Proyectos (nuevo componente) */}
      <Proyectos proyectos={proyectos} />

      {/* Habilidades (nuevo componente) */}
      <Habilidades habilidades={habilidades} />
    </div>
  );
}

export default App;
