"use client";
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firesebase/config'
import HeadSection from './HeadSection';
import TrabajosList from './TrabajosContainer';
import TrabajosContainer from './TrabajosContainer';


const Projects = () => {


    useEffect (() => {

        const trabajosRef = collection(db, 'trabajos');
        getDocs(trabajosRef)
            .then((resp) => {
                console.log(resp.docs[0].id);
                console.log(resp.docs[0].data());

                console.log(
                  resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                  })
                )
            })

    })

  return (
    <section id='projects'>
        <HeadSection pillName='Proyectos' sectionName='Mis Trabajos' />
        <TrabajosContainer />
    </section>
  )
}

export default Projects
