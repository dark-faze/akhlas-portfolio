import { FunctionComponent } from 'react'
import { WorkedWith } from '../type'


const IconBox: FunctionComponent<{ service: WorkedWith }> = ({
   service: { Icon, name },
}) => {
   function createMarkup() {
      return {
         __html: name,
      }
   }

   return (
         <div className='p-4 rounded-xl bg-gradient-to-br from-mauve-a/10 to-mauve-b/10 hover:from-mauve-a/20 hover:to-mauve-b/20 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-transparent hover:border-mauve-b/30'>
         <Icon className='w-12 h-12 text-mauve-b' />
         </div>
   )
}

export default IconBox