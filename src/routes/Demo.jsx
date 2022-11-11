import React from 'react'
import { useNavigate } from 'react-router-dom'
const Demo = () => {
const navigate =useNavigate();
    const login=()=>{
navigate('/sign')
    }

  return (
    <div>
        please login to use our services
        <button className='btn' onClick={login}>login </button>
    </div>
  )
}

export default Demo