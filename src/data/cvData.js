// src/data/cvData.js
export const cabecera = {
  nombre: "Yeison Caro Orrego",
  cargo: "Desarrollador Back-End",
};

export const perfil = {
  texto:
    "Tecnólogo en Análisis y Desarrollo de Software con experiencia en desarrollo web y móvil. Apasionado por la tecnología, con habilidades sólidas en programación, diseño de interfaces y gestión de proyectos. Me destaco por ser responsable, puntual en la entrega de trabajos y con capacidad para adaptarme a nuevos entornos tecnológicos. Con conocimientos en múltiples lenguajes como Python y Java, y dominio en frameworks modernos como React y Node.js."
};

export const educacion = [
  {
    id: 1,
    titulo: "Técnico en Programación de Software",
    universidad: "SENA",
    periodo: "2022"
  }
];

export const experiencia = [
  {
    id: 1,
    puesto: "Desarrollador Frontend",
    empresa: "TechSoft",
    periodo: "2023"
  },
  {
    id: 2,
    puesto: "Instructor TIC",
    empresa: "SENA",
    periodo: "2020-2022"
  }
];

export const stackTecnologias = [
  { id: 1, nombre: "HTML", tipo: "frontend" },
  { id: 2, nombre: "Node.js", tipo: "backend" },
  { id: 3, nombre: "CSS", tipo: "frontend" },
  { id: 4, nombre: "PostgreSQL", tipo: "base de datos" }
];

/* Nuevas secciones */
export const proyectos = [
  {
    id: 1,
    nombre: "Web E-commerce",
    descripcion: "Plataforma de venta de productos en línea con carrito de compras.",
    enlace: "https://github.com/usuario/proyecto-ecommerce"
  },
  {
    id: 2,
    nombre: "App de Tareas",
    descripcion: "Aplicación móvil para gestionar tareas diarias con React Native.",
    enlace: "https://github.com/usuario/app-tareas"
  }
];

export const habilidades = [
  { id: 1, nombre: "Comunicación", nivel: "Avanzado" },
  { id: 2, nombre: "Trabajo en Equipo", nivel: "Intermedio" },
  { id: 3, nombre: "Resolución de Problemas", nivel: "Avanzado" }
];
