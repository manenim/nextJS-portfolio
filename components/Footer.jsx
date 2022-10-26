import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import logo from '../public/assets/logo.png'

const Footer = () => {
  return (
    <footer className= 'py-8 px-8 border-t-4 mt-12 flex flex-col lg:flex-row justify-center lg:justify-between  items-center'>
        <div className=''>
            <Image src = {logo} width = {100} height = {32} alt = "logo" />
        </div>

        {/* <div className='flex items-center justify-center'>
            <div className='flex items-center justify-between py-4 w-[20vw]'>
                <div className='rounded-full mr-4 lg:mr-0 mb-4 lg:mb-0 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn/>
                </div>
                <div className='rounded-full mr-4 lg:mr-0 mb-4 lg:mb-0 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub/>
                </div>
                <div className='rounded-full mr-4 lg:mr-0 mb-4 lg:mb-0 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail/>
                </div>
                <div className='rounded-full mr-4 lg:mr-0 mb-4 lg:mb-0 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill/>
                </div>
            </div>
        </div> */}

            <div className='text-center py-4 font-semibold'>&copy; 2022 | Built by Manenimabasi Udoh</div>

    </footer>
  )
}

export default Footer