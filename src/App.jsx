// src/App.jsx
import React, { useState } from "react";
import {
  cabecera,
  perfil,
  educacion,
  experiencia,
  proyectos,
  habilidades as habilidadesIniciales,
  stackTecnologias as tecnologiasIniciales,
} from "./data/cvData";

import CabeceraCV from "./Components/CabeceraCV";
import Perfil from "./Components/Perfil";
import Educacion from "./Components/Educacion";
import Experiencia from "./Components/Experiencia";
import StackTecnologias from "./Components/StackTecnologias";
import Proyectos from "./Components/proyecto";
import Habilidades from "./Components/Habilidades";

// NUEVOS COMPONENTES
import ToggleHabilidades from "./Components/ToggleHabilidades";
import FormularioTecnologia from "./Components/FormularioTecnologia";

function App() {
  // Estado para habilidades (visibilidad)
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  // Estado para tecnologías dinámicas
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  // Función para alternar visibilidad de habilidades
  const toggleHabilidades = () => {
    setMostrarHabilidades((prev) => !prev);
  };

  // Función para agregar nueva tecnología
  const agregarTecnologia = (nuevaTec) => {
    setTecnologias((prev) => [...prev, nuevaTec]);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* Cabecera */}
      <CabeceraCV nombre={cabecera.nombre} profesion={cabecera.cargo} />

      {/* Perfil */}
      <Perfil texto={perfil.texto} />

      {/* Educación */}
      <Educacion estudios={educacion} />

      {/* Experiencia */}
      <Experiencia trabajos={experiencia} />

      {/* Stack de Tecnologías */}
      <h3>Stack de Tecnologías</h3>
      <FormularioTecnologia onAgregar={agregarTecnologia} />
      <StackTecnologias tecnologias={tecnologias} />

      {/* Proyectos */}
      <Proyectos proyectos={proyectos} />

      {/* Toggle Habilidades */}
      <ToggleHabilidades
        visible={mostrarHabilidades}
        toggleVisibilidad={toggleHabilidades}
      />
      {mostrarHabilidades && <Habilidades habilidades={habilidadesIniciales} />}
    </div>
  );
}

export default App;
