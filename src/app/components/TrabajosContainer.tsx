import React, { useEffect, useState } from 'react'
import TrabajosList from './TrabajosList'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firesebase/config' 

interface Trabajo {
  id: string; 
}

const TrabajosContainer = () => {

  const [trabajos, setTrabajos] = useState<Trabajo[]>([]);

    useEffect(() => {

      const trabajosRef = collection(db, "trabajos");

      getDocs(trabajosRef)
        .then((resp) => {          
          setTrabajos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id } as Trabajo;
            })
          )
        })

    }, [])

    

  return (
    <div>
      <TrabajosList trabajos={trabajos} />          
    </div>
  )
}

export default TrabajosContainer