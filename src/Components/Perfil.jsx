
const user = {
  perfil:"Perfil",
  informacion:"Tecnólogo en Análisis y Desarrollo de Software con experiencia en desarrollo web y móvil. Apasionado por la tecnología, con habilidades sólidas en programación, diseño de interfaces y gestión de proyectos. Me destaco por ser responsable, puntual en la entrega de trabajos y con capacidad para adaptarme a nuevos entornos tecnológicos. Con conocimientos en múltiples lenguajes como Python y Java, y dominio en frameworks modernos como React y Node.js. ",
}

export default function Perfil() {
  return (
    <section>
      <h3>{user.perfil}</h3>
      <p>
        {user.informacion}
      </p>
    </section>
  );
}
