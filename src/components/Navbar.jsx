import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex gap-2 bg-black text-white'>
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        
    </div>
  )
}

export default Navbar