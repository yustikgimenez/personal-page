import Image from 'next/image'

export const Item = ( {trabajo} ) => {
  return (
    <a href={ trabajo.url } target='_blank' rel='noopener noreferrer'>
        <figure className="bg-slate-100 rounded-sm p-8">          
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
                  <p className="text-sm font-normal leading-6">
                    { trabajo.desc }                    
                  </p>
              </figcaption>
            </div>
        </figure>
    </a>    
  )
}

export default Item