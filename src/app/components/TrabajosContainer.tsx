import React, { useEffect, useState } from 'react'
import data from '../../data/trabajos.json'
import TrabajosList from './TrabajosList'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firesebase/config' 

interface Trabajo {
  id: string;
  // other properties of a trabajo
}

const TrabajosContainer = () => {

  const [trabajos, setTrabajos] = useState([]);

    const traerTrabajos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

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