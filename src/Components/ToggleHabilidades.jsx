// ToggleHabilidades.jsx
import React from 'react';

const ToggleHabilidades = ({ visible, toggleVisibilidad }) => {
  return (
    <div>
      <button onClick={toggleVisibilidad}>
        {visible ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
      </button>
    </div>
  );
};

export default ToggleHabilidades;
