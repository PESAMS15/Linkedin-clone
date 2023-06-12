import React from 'react'

const Icons = ({icon, title}) => {
  return (
    <div className='flex gap-2 hover:bg-slate-200 text-xl p-2 w-full items-center cursor-pointer rounded hover:ease-in transition duration-150 ease-out'>
        <span>{icon}</span>
        <span className='text-lg'>{title}</span>
    </div>
  )
}

export default Icons