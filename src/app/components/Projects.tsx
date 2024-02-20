"use client";
import HeadSection from './HeadSection';
import TrabajosContainer from './TrabajosContainer';


const Projects = () => {

  return (
    <section id='projects' className='dark:bg-gray-800'>
        <HeadSection pillName='Proyectos' sectionName='Mis Trabajos' />
        <TrabajosContainer />
    </section>
  )
}

export default Projects
