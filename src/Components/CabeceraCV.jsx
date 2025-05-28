import "./Cabecera.css";

const user = {
  nombre:"Yeison Caro Orrego",
  cargo:"Desarrollador Back-End",
  numero:"+57 3014420725",
  correo:"ycaroorrego@gmail.com"
}

export default function CabeceraCV() {
  return (
    <header>
      <h1>{user.nombre}</h1>
      <h2>{user.cargo}</h2>
      <h3>{user.numero}</h3>
      <h4>{user.correo}</h4>
    </header>
  );
}
