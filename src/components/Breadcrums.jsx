import React from 'react'
import { useNavigate } from 'react-router-dom'

const Breadcrums = () => {
    const navigate = useNavigate()
  return (
    <div className='max-w-6xl mx-auto my-10 '>
        <h1>
            <span className='text-xl text-gray-700 font-semibold cursor-pointer'  onClick={()=>navigate('/')}>
                Home/
            </span>
            <span className='text-xl text-gray-700 font-semibold cursor-pointer' onClick={()=>navigate('/products')}>
                Products
            </span>
        </h1>
    </div>
  )
}

export default Breadcrums
