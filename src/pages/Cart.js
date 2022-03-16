import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'


function Cart() {
  const [buttonText, setButtonText ] = useState('Place Order')
  const { cartItems, removeFromCart } = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  
  function placeOrder() {
    setButtonText('Ordering...')
    setTimeout(() => {
      setButtonText('Place Order')
      removeFromCart()
    }, 3000)
  }
  
  return (
    <div className="bg-slate-500 bg-auto bg-fixed bg-center bg-no-repeat  md:w-screen m-auto md:m-auto h-screen md:h-screen">
    <main className='cart-page'>
        <h1 className='text-2xl mt-6 text-slate-300 animate-bounce'>
          Check Out
        </h1>
          {cartItemElements}
        <p className='total-cost mr-2 mb text-slate-300'> Total: {totalCostDisplay} </p>
        {
          cartItems.length ?
         <div className='order-button'>
           <Link to='/confirmation' class="flex justify-center">
            <button onClick={placeOrder} className='submit flex flex-row align-center bg-slate-700 text-slate-300 border hover:bg-slate-400 hover:border-white'>
              {buttonText}
            </button>
            </Link>
        </div> :
        <div className="m-auto">
          <div className="flex justify-center">
            <p className='text-white animate-pulse text-xl mt-64'>
              You have no items in your cart
            </p>
          </div>
        </div>
        }
    </main> 
    </div>
  )
}

export default Cart
