import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white '>
      <div className='bg-blue-400 rounded  w-1/2 p-2 m-2'>
        <Link className='flex flex-grow justify-center' to='/cart'>
          CART
        </Link>
      </div>
      <div className='bg-blue-400 rounded w-1/2 p-2 m-2'>
        <Link className='flex flex-grow justify-center' to='/sell'>
          SELL
        </Link>
      </div>
      <div className='bg-blue-400 rounded w-1/2 p-2 m-2'>
        <Link className='flex flex-grow justify-center' to='/feature2'>
          Feature2
        </Link>
      </div>
      <div className='bg-blue-400 rounded w-1/2 p-2 m-2'>
        <Link className='flex flex-grow justify-center' to='/feature3'>
          Feature3
        </Link>
      </div>
    </div>
  )
}

export default Home
