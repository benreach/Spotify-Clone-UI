import React from 'react'
import { Link } from 'react-router'

function Popular() {
  return (
    <Link to="/album/:id" className='px-2'>
        <ol className='px-4 hover:bg-lightBlack py-2 rounded-lg'>
            <li  className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src="/profile.svg" alt="" width={40} className='rounded-md'/>
                    <span>Lost cow Found Love</span>
                </div>
                <span>238,838</span>
                <span>3:13</span>
            </li>
        </ol>
    </Link>
  )
}

export default Popular