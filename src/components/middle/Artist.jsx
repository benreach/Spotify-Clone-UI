import React from 'react'

function Artist({name}) {
  return (
    <div className='flex flex-col gap-2 items-center'>
        <img src="/profile.svg" alt=""  className='rounded-full  min-w-[150px]'/>
        <div className='flex flex-col'>
          <span>{name}</span>
          <span>Artist</span>
        </div>
    </div>
  )
}

export default Artist