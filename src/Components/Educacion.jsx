// src/components/Educacion.jsx
const formacion = [
  { institucion: "SENA", curso: "Técnico en Programación de Software", año: 2022 },
  { institucion: "Platzi", curso: "Curso de React.js", año: 2023 },
  { institucion: "Google Actívate", curso: "Fundamentos de Marketing Digital", año: 2021 },
  { institucion: "Coursera", curso: "Algoritmos y Estructuras de Datos", año: 2022 },
  { institucion: "Alura", curso: "Lógica de Programación", año: 2023 },
  { institucion: "Udemy", curso: "Desarrollo Web Completo", año: 2020 },
  { institucion: "INEM", curso: "Bachillerato Técnico", año: 2024 },
  { institucion: "IBM SkillsBuild", curso: "Introducción a la Nube", año: 2023 },
  { institucion: "Oracle Next Education", curso: "BackEnd con Java", año: 2024 },
  { institucion: "EDteam", curso: "Git y GitHub", año: 2021 },
];

export default function Educacion() {
  return (
    <div>
      <h2>Formación Académica y Complementaria</h2>
      <ul>
        {formacion.map((edu, index) => (
          <li key={index}>
            <h3>{edu.curso}</h3>
            <p>{edu.institucion} - {edu.año}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
