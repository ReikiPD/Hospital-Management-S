import React from 'react'
import { assets } from '../assets/assets'
import contactImage from '../assets/contact.jpg';

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={contactImage} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR HOSPITAL</p>
          <p className=' text-gray-500'>Jl. Jambore No.1, RT.8/RW.7, Cibubur, <br /> Kec. Ciracas, Kota Jakarta Timur, Jawa Barat 13720</p>
          <p className=' text-gray-500'>Tel: 021 124125214 <br /> Email: rson@gmail.com</p>
          </div>
      </div>

    </div>
  )
}

export default Contact
