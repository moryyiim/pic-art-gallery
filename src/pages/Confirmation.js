import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmation = (props) => {

    const navigate = useNavigate()
      setTimeout(() => {
        navigate('/')
    }, 2000)

  return (
    <>
    <div className='text-slate-300 text-center text-xl bg-slate-500 bg-auto bg-fixed bg-center bg-no-repeat flex flex-col md:w-screen m-auto md:m-auto h-screen md:h-screen'>
      <div value={props} className='mt-64'>
          Thank you for your order!
        <div>
          You will be redirected shortly...
        </div>
      </div>
    </div>
    </>
  )
}

export default Confirmation