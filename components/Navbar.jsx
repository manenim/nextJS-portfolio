import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router'
import logo from '../public/assets/logo.png'
import Image from 'next/image'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState("#f5f3f3")
  const [linkColor, setLinkColor] = useState("#1f2937")

  const router = useRouter();

  useEffect(() => {
    if(
      router.asPath === '/property' ||
      router.asPath === '/property' 

    ){
       setNavBg('transparent')
       setLinkColor("#f5f3f3")
    }else {
      setNavBg('#f5f3f3')
       setLinkColor("#1f2937")
    }
  }, [router])

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true);
      }else {
        setShadow(false);
      }

    }

    window.addEventListener('scroll', handleShadow);
  
  }, [])
  

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div style = {{backgroundColor: `${navBg}`}} className = { shadow ?'fixed w-full h-20 shadow-xl px-4 lg:pl-8 z-[100]' : 'fixed px-4 lg:pl-8 w-full h-20 z-[100]' }>
      <div className='z-[99] flex justify-between items-center h-full w-full px-2 2xl:px-16'>
        <Link href = '/'>
          <div className='col-span-2 text-center w-24 h-24 mt-[58px] lg:text-left'>
              <Image src = {logo} alt = "logo" />
          </div>
        </Link>

        <div>
          <ul style = {{color: `${linkColor}`}} className='hidden font-semibold md:flex'>
            <Link href = '/'>
              <li className='ml-10 text-sm uppercase hover:border-b border-[#141414] '>Home</li>
            </Link>
            <Link href = '/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b border-[#141414] '>About</li>
            </Link>
            <Link href = '/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b border-[#141414]'>Skills</li>
            </Link>
            <Link href = '/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b border-[#141414]'>Projects</li>
            </Link>
            <Link href = '/#certification'>
              <li className='ml-10 text-sm uppercase hover:border-b border-[#141414]'>Certifications</li>
            </Link>
            <Link href = '/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b border-[#141414]'>contact</li>
            </Link>
          </ul>
          <div onClick={ handleNav } className='md:hidden' >
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f5f3f3] p-10 ease-in duration-500' : 
        'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image onClick={() => setNav(false)} src = {logo} width = {100} height = {32} alt = "logo" />
            <div onClick = {handleNav } className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-ponter'>
             <AiOutlineClose />
            </div> 
          </div>
          <div className='border-b border-gray-400 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>
              Lets Build something legendary together
            </p>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase font-semibold'>
            <Link href = '/'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
            </Link>
            <Link href = '/#about'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>ABOUT</li>
            </Link>
            <Link href = '/#skills'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>SKILLS</li>
            </Link>
            <Link href = '/#projects'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>PROJECTS</li>
            </Link>
            <Link href = '/#certification'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>CERTIFICATIONS</li>
            </Link>
            <Link href = '/#contact'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>CONTACT</li>
            </Link>
          </ul>
          <div className='pt-40'>
            <p className='uppercase tracking-widest text-[#f5f3f3]'>Lets connect</p>
            <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>


    </div>
  )
}

export default Navbar