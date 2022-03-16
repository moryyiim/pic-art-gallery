import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
 
function Header() {
  const { cartItems } = useContext(Context)
  const cartClassName = cartItems.length ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'

  return (
    <>
    <header className='drop-shadow-lg z-10 w-full md:w-screen bg-slate-500 select-none'>
        <Link to='/'>
            <h2 className="text-3xl text-slate-300 hover:text-white duration-500 ease-in-out">Pic Art Gallery</h2>
        </Link>
        <Link to='/cart'>
            <i className={`${cartClassName} ri-fw ri-2x`}></i>
        </Link>
    </header>
    </>
  )
}

export default Header

// shadow-md sm:fixed md:fixed z-10 w-full md:w-screen bg-slate-800 select-none