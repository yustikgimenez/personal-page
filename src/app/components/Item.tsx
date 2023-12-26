import Image from 'next/image'
import { BiLinkExternal } from "react-icons/bi";

export const Item = ( {trabajo} ) => {
  return (
    
        <figure className="bg-slate-100 rounded-sm p-8 dark:bg-gray-700 dark:text-white">          
            <div className="pt-6 text-center space-y-4">   
              <div>
                  <Image 
                    priority
                    width={250} 
                    height={250}                          
                    className='pointer-events-none select-none object-cover mx-auto mb-10'                         
                    src={ trabajo.image }
                    alt={ trabajo.title } 
                  />
              </div>                             
              <figcaption>
                  <div className='mb-5 text-2xl font-semibold'>
                    { trabajo.title }
                  </div>
                  <p className="text-sm font-normal leading-6 mb-10">
                    { trabajo.desc }                    
                  </p>

                  <a href={ trabajo.url } 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='bg-primary text-white 
                    p-4 inline-flex items-center
                    rounded-sm
                    hover:bg-green-500 hover:text-white dark:bg-green-400 dark:text-black dark:hover:bg-white'>
                    <span className='mr-3'>ir al sitio</span> <BiLinkExternal size={24} />
                  </a>    
              </figcaption>
            </div>
        </figure>
    
  )
}

export default Item