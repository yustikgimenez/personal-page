import React from 'react'
import TypeWrite from './TypeWriter'
import ImgHero from './ImgHero';
import MouseNext from './MouseNext';
import ButtonsHero from './ButtonsHero';

const Hero = () => {
  return (
    <section id="home" className='h-full bg-primary min-h-screen items-center flex relative dark:bg-black'>
        <div className='container'>   
            <ImgHero />
            <TypeWrite />
            <ButtonsHero />
        </div>   
        <MouseNext />  
    </section>
  )
}

export default Hero
