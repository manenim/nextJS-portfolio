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

        <div className='text-center py-4 font-semibold'>&copy; 2022 | Built by Manenimabasi Udoh</div>

    </footer>
  )
}

export default Footer