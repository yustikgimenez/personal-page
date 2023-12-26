import React from 'react'
import Image from 'next/image'

const ImgHero = () => {
  return (
    <div className='mx-auto'>
        <div className='mb-10'>            
            <Image 
                priority
                width={879 / 3} 
                height={1122 / 3}
                quality={100} 
                className='pointers-events-none select-none object-cover rounded-full overflow-hidden border-8 border-white mx-auto'                         
                src='/images/profile.png'
                alt='Imagen de perfil' 
            />
        </div>                 
    </div> 
  )
}

export default ImgHero