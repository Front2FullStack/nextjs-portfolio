import { FunctionComponent } from 'react'
import { ISkill } from '../types/Skills'

const Bar:FunctionComponent<{data: ISkill}> = ({data: {Icon, level, name}}) => {
  return (
    <div className='mb-2 text-white rounded-full be b-200 bg-zinc-300 dark:bg-black'>
            <div className="flex items-center px-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 dark:from-stone-900 dark:to-slate-900" style={{width: level}}>
                <Icon className='mr-3'/>
                {name}
            </div>
    </div>
  )
}

export default Bar