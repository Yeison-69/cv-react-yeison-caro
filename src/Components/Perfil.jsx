
const user = {
  perfil:"Perfil",
  informacion:"Tecnologo en Analisis y Desarrollo de software con experiencia en desarrollo web y móvil, apasionado por la tecnología. Mis habilidades son tales como manejo de ciertos lenguajes,Python,Java y soy puntual entregando trabajos ",
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
