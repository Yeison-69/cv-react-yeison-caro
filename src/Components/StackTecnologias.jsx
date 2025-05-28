// src/components/StackTecnologias.jsx
const stack = [
  { nombre: "HTML", nivel: "Avanzado" },
  { nombre: "CSS", nivel: "Avanzado" },
  { nombre: "JavaScript", nivel: "Avanzado" },
  { nombre: "React", nivel: "Intermedio" },
  { nombre: "Node.js", nivel: "Intermedio" },
  { nombre: "MongoDB", nivel: "Básico" },
  { nombre: "Git", nivel: "Avanzado" },
  { nombre: "Figma", nivel: "Intermedio" },
];

export default function StackTecnologias() {
  return (
    <div>
      <h2>Stack de Tecnologías</h2>
      <ul>
        {stack.map((tech, index) => (
          <li key={index}>
            {tech.nombre} - {tech.nivel}
            {tech.nivel === "Avanzado" && <strong> ⭐</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
}
