import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <div className='pt-20  pl-8'>
      <div className='grid grid-cols-5 gap-4 items-start'>
        <div className='flex flex-col gap-1 justify-center'>
          <h1>Company</h1>
          <span>About</span>
          <span>Jobs</span>
          <span>For the Record</span>
        </div>
        <div className='flex flex-col gap-1 justify-center'>
          <h1>Communities</h1>
          <span>For Artists</span>
          <span>Developers</span>
          <span>Advertising</span>
          <span>Investors</span>
          <span>Vendors</span>
        </div>
        <div className='flex flex-col gap-1 justify-center'>
          <h1>Useful Links</h1>
          <span>Supports</span>
          <span>Free Mobile App</span>
        </div>
        <div className='flex flex-col gap-1 justify-center'>
          <h1>Spotify Plans</h1>
          <span>Premium Individual</span>
          <span>Premium Duo</span>
          <span>Premium Student</span>
          <span>Spotify Free</span>
        </div>
        <div className='flex flex-col gap-4 justify-center'>
          <img src="/instagram.svg" alt="" width={24}/>
          <img src="/twitter.svg" alt="" width={24}/>
          <img src="/facebook.svg" alt="" width={24}/>
        </div>
      </div>
      <div className=' border-t-[0.6px] p-4 mt-4 border-grayColor pb-20'>
        <div className='grid grid-cols-2 gap-2'>
          <Link>Legal</Link>
          <Link>Safety & Privacy Center</Link>
          <Link>Privacy Policy</Link>
          <Link>Cookies</Link>
          <Link>About Ads</Link>
          <Link>Accessibility</Link>
          <Link>© 2025 Spotify AB</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer