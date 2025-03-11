import React from 'react'
import { assets } from '../../assets/assets'
import Searchbar from './Searchbar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70 '>
        <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Your Shortcut to KTET Success 
        <span className='text-blue-600'> Learn Smarter, Score Higher!</span></h1>
        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Your gateway to success in the Kerala Teacher Eligibility Test (KTET). Our expert-led courses are designed to fit your learning needs and help you excel in the exams. </p>
        <p className='md:hidden text-gray-500 max-w-sm mx-auto'>Your gateway to success in the Kerala Teacher Eligibility Test (KTET). Our expert-led courses are designed to fit your learning needs and help you excel in the exams. </p>
        <Searchbar/>
        </div>
  )
}

export default Hero