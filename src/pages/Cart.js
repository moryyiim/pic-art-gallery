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
    <main className='cart-page'>
        <h1>Check out</h1>
        {cartItemElements}
        <p className='total-cost'>Total: {totalCostDisplay} </p>
       {
         cartItems.length ?
         <div className='order-button'>
           <Link to='/confirmation'>
            <button onClick={placeOrder} className='submit'>{buttonText}</button>
            </Link>
        </div> :
        <p>You have no items in your cart.</p>
        }
    </main> 
  )
}

export default Cart
