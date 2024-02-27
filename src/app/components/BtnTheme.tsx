import React, { useEffect, useState } from 'react';
import { BiSolidSun } from 'react-icons/bi';

const BtnTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Verificar si estamos en un entorno que soporta 'window'
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    // Por defecto, usar 'light' si 'window' no está definido
    return 'light';
  });

  useEffect(() => {
    // Aplicar/desaplicar la clase 'dark' al elemento <html>
    document.querySelector('html')?.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleTheme = () => {
    // Cambiar entre los temas 'light' y 'dark'
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button aria-label="Cambiar el tema" className='text-white hover:text-green-300' onClick={handleTheme}>
      <BiSolidSun size={32} />
    </button>
  );
};

export default BtnTheme;