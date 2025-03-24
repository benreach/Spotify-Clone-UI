import React from 'react'

function Card() {
  return (
    <div className='flex flex-col gap-4 bg-lightBlack rounded-lg px-4 py-4'>
        <div className='flex items-center justify-between'>
            <span>Next in queue</span>
            <span>Open queue</span>
        </div>
        <div className='flex items-center gap-2'>
            <img src="/profile.svg" alt="" width={50} className='obeject-fit rounded-lg'/>
            <div className='flex flex-col'>
                <span>Number One</span>
                <span>TENDO</span>
            </div>
        </div>
    </div>
  )
}

export default Card