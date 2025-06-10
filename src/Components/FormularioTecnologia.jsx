// src/components/FormularioTecnologia.jsx
import React, { useState } from "react";

export default function FormularioTecnologia({ onAgregar }) {
  const [nuevaTecnologia, setNuevaTecnologia] = useState("");

  const manejarCambio = (e) => {
    setNuevaTecnologia(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const textoTrim = nuevaTecnologia.trim();
    if (textoTrim) {
      onAgregar(textoTrim);
      setNuevaTecnologia("");
    }
  };

  return (
    <form onSubmit={manejarEnvio} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Agregar nueva tecnología"
        value={nuevaTecnologia}
        onChange={manejarCambio}
        required
      />
      <button type="submit" style={{ marginLeft: "10px" }}>
        Agregar
      </button>
    </form>
  );
}
