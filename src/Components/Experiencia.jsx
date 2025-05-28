// src/components/Experiencia.jsx
const experiencias = [
  { cargo: "Desarrollador Frontend", empresa: "TechSoft", año: 2023, descripcion: "Diseño de interfaces con React y Tailwind CSS" },
  { cargo: "Backend Developer", empresa: "DataSecure", año: 2022, descripcion: "Desarrollo de APIs REST en Node.js" },
  { cargo: "Ingeniero de Software", empresa: "GlobalTech", año: 2021, descripcion: "Mantenimiento de sistemas internos" },
  { cargo: "Diseñador UX/UI", empresa: "InnovaWeb", año: 2020, descripcion: "Creación de wireframes y prototipos en Figma" },
  { cargo: "Tester QA", empresa: "SoftTest", año: 2023, descripcion: "Automatización de pruebas con Selenium" },
  { cargo: "Administrador de Base de Datos", empresa: "DataLogic", año: 2021, descripcion: "Gestión de bases de datos SQL" },
  { cargo: "Project Manager", empresa: "AgileTeam", año: 2022, descripcion: "Gestión ágil con Scrum y Jira" },
  { cargo: "Soporte Técnico", empresa: "ITExpress", año: 2019, descripcion: "Resolución de incidencias técnicas" },
  { cargo: "Freelancer React", empresa: "Independiente", año: 2023, descripcion: "Apps web personalizadas con React" },
  { cargo: "Desarrollador Full Stack", empresa: "StartupX", año: 2024, descripcion: "Aplicaciones completas MERN stack" },
];

export default function Experiencia() {
  return (
    <div>
      <h2>Experiencia Laboral y Proyectos</h2>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <h3>{exp.cargo} - {exp.empresa} ({exp.año})</h3>
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
