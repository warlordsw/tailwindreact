import React from 'react'

const Sell = () => {
  return (
    <div className='relative flex flex-col m-auto hwsell   py-8 px-10 border-4 border-opacity-0 hover:border-blue-500 items-center justify-center text-center shadow-xl bg-white rounded-3xl'>
      <span className='absolute top-4 right-5 font-bold text-yellow-600'>
        Popular
      </span>
      <img
        className='w-10 h-10 mt-2'
        src='https://t3.ftcdn.net/jpg/02/35/26/30/240_F_235263034_miJw2igmixo7ymCqhHZ7c8wp9kaujzfM.jpg'
        alt='Fire'
      />

      <h2 className='font-bold'>Growth</h2>
      <p className='m-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <p className='mb-6'>Lorem ipsum dolor sit.</p>

      <ul className='fl mt-4'>
        <li>
          <img
            src='https://image.flaticon.com/icons/png/512/390/390973.png'
            alt='tik'
          />
          Lorem ipsum dolor sit amet.
        </li>
        <li>
          <img
            src='https://image.flaticon.com/icons/png/512/390/390973.png'
            alt='tik'
          />
          Lorem ipsum dolor sit amet.
        </li>
        <li>
          <img
            src='https://image.flaticon.com/icons/png/512/390/390973.png'
            alt='tik'
          />
          Lorem ipsum dolor sit amet.
        </li>
        <li>
          <img
            src='https://image.flaticon.com/icons/png/512/390/390973.png'
            alt='tik'
          />
          Lorem ipsum dolor sit amet.
        </li>
        <li className='opacity-20'>
          <img
            src='https://image.flaticon.com/icons/png/512/390/390973.png'
            alt='tik'
          />
          Lorem ipsum dolor sit amet.
        </li>
      </ul>

      <button className='w-full py-2 my-2 border-2 hover:bg-blue-500 hover:text-white border-blue-500 rounded text-blue-500'>
        Try it free
      </button>
      <p className='mt-3'>Lorem ipsum dolor sit.</p>
    </div>
  )
}

export default Sell
