import Link from 'next/link'
import { FunctionComponent } from 'react'
import { IService } from '../type'


const ServiceCard: FunctionComponent<{ service: IService }> = ({
   service: { Icon, title, about},
}) => {
   function createMarkup() {
      return {
         __html: about,
      }
   }

   return (
      <div className='flex items-center p-4 space-x-4 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg border border-transparent hover:border-mauve-b/20'>
         <div className='flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-mauve-a/10 to-mauve-b/10 transition-all duration-300 hover:from-mauve-a/20 hover:to-mauve-b/20'>
            <Icon className='w-10 h-10 text-mauve-b' />
         </div>
         <div className='flex-1'>
            <h6 className='font-bold text-lg mb-1 bg-gradient-to-r from-mauve-a to-mauve-b bg-clip-text text-transparent'>{title}</h6>
            <p className='text-sm opacity-80' dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default ServiceCard