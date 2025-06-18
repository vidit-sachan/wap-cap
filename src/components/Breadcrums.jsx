import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const Breadcrums = () => {
    const navigate = useNavigate()
  return (
    <div className='max-w-6xl mx-auto my-10 '>
        <button onClick={()=>navigate('/products/')} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft/> Back</button>
    </div>
  )
}

export default Breadcrums
