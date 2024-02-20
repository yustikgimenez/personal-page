import React from 'react';
import ItemTrabajo from './ItemTrabajo';

// Define la interfaz Trabajo
interface Trabajo {
    id: string;
    title: string;
    desc: string;
    image: string;
    url: string;
}

// Especifica el tipo de la prop trabajos en TrabajosList
const TrabajosList: React.FC<{ trabajos: Trabajo[] }> = ({ trabajos }) => {
  return (
    <div className='container'>
      <div className='grid grid-cols-2 xl:grid-cols-3 gap-10'>
        {trabajos.length > 0 &&
          trabajos.map((trabajo) => {
            return (
              <div key={trabajo.id}>
                <ItemTrabajo trabajo={trabajo} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TrabajosList;
