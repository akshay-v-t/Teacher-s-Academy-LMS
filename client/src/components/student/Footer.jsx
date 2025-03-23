import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
  <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
    <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
      <div className='flex flex-col md:items-start items-center w-full mt-10 '>
        <img src={assets.site_logo} alt='logo'  className='w-48' />
        <p className='mt-6 text-center md:text-left text-sm text-white/80'>
        KTET Academy is your trusted learning partner, offering expertly crafted courses to help you excel in Kerala’s Teacher Eligibility Test (KTET). With experienced educators and structured lessons, we make exam preparation easy and effective. Start your journey with us today!
        </p>

      </div>
      <div className='flex flex-col md:items-start items-center w-full mt-10'>
        <h2 className='font-semibold text-white mb-5'>Company</h2>
        <ul className='flex md:flex-col w-full justify tex-sm text-white/80 md:space-y-2'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>

          
        </ul>
        
      </div>
      <div className='flex flex-col md:items-start items-center w-full mt-10 hidden md:flex flex-col items-start w-full'>
        <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
        <p className='text-sm text-white/80'>The latest news articles and resources sent to your inbox weekly</p>
       <div className='flex itema-center gap-2 pt-4'>
        <input type="email" placeholder='Enter your email' className='border border-gray-500/30 bg-gray-800 text-gray-300 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' />
        <button className='bg-blue-600 w-24 text-white rounded h-9'>Subscribe</button>
       </div>
      </div>

    </div>
    <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025</p>
  </footer>
  )
}

export default Footer