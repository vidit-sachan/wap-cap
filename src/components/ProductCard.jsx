import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const {addToCart, cartItem} = useCart()
    console.log(cartItem)
  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
        <img src={product.image} alt='' className='bg-gray-100 aspect-square' onClick={()=>navigate(`/products/${product.id}`)}/>
        <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
        <p className='my-1 text-lg text-gray-800 font-bold  '>${product.price}</p>
        <button className='bg-red-500 text-white text-lg px-3 py-2 rounded-md cursor-pointer w-full flex gap-2 items-center justify-center font-semibold ' onClick={()=>addToCart(product)}><IoCartOutline className='w-6 h-6'/>Add to Cart</button>
    </div>
  )
}

export default ProductCard