import React, { useEffect, useState } from 'react';
import TrabajosList from './TrabajosList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firesebase/config';
import { useParams } from 'next/navigation';

type Trabajo = {
  id: string;
  title: string;
  desc: string;
  image: string;
  url: string;
};

const TrabajosContainer = () => {
  const [trabajos, setTrabajos] = useState<Trabajo[]>([]);
  const { categoria } = useParams();

  useEffect(() => {
    const obtenerTrabajos = async () => {
      const trabajosRef = collection(db, 'trabajos');
      const querySnapshot = await getDocs(trabajosRef);
      const trabajosData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          desc: data.desc,
          image: data.image,
          url: data.url
        };
      });
      setTrabajos(trabajosData);
    };

    obtenerTrabajos();
  }, [categoria]);

  return (
    <div>
      <TrabajosList trabajos={trabajos} />
    </div>
  );
};

export default TrabajosContainer;
