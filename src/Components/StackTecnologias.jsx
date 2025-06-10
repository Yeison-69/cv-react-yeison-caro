// src/components/StackTecnologias.jsx
import React from "react";

export default function StackTecnologias({ tecnologias }) {
  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "blue";
      case "backend":
        return "green";
      case "base de datos":
        return "orange";
      default:
        return "gray";
    }
  };

  if (!tecnologias || tecnologias.length === 0) {
    return (
      <section>
        <h3>Stack de Tecnologías</h3>
        <p>No se han registrado tecnologías.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map((tec, index) => {
          // Si es un objeto, muestra nombre y tipo
          if (typeof tec === "object" && tec !== null) {
            const { id, nombre, tipo } = tec;
            return (
              <li key={id || index} style={{ color: obtenerColor(tipo) }}>
                {nombre} - <em>{tipo}</em>
              </li>
            );
          }

          // Si es string, solo muestra el nombre
          return (
            <li key={index} style={{ color: "gray" }}>
              {tec}
            </li>
          );
        })}
      </ul>
      <hr />
    </section>
  );
}
