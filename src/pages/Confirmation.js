import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmation = (props) => {

    const navigate = useNavigate()
      setTimeout(() => {
        navigate('/')
    }, 2000)

  return (
    <>
    <div value={props} className='checkout'>Thank you for your order!</div>
    <div className='checkout'>You will be redirected shortly...</div>
    </>
  )
}

export default Confirmation