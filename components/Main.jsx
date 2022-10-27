import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { annotate } from 'rough-notation';
import { motion } from 'framer-motion'
import { Fade, Reveal } from 'react-reveal'




const Main = () => {

    const nameVariant = {
        hidden: {
            opacity: 0.3,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                delay: 0
            }
        }
    }
    const descVariant = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: .2,
                delay: .3
            }
        }
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          
        }
      }

      const item = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1,
            // transition: {
            //     duration: 2,
            //     delay: 1
            // }   
        }

      }
      const item1 = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0
            }   
        }

      }
      const item2 = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1,
            transition: {
                duration: 1,
                delay: .5
            }   
        }

      }
      const item3 = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1,
            transition: {
                duration: 1,
                delay: 1
            }   
        }

      }
      const item4 = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1,
            transition: {
                duration: 1,
                delay: 1.5
            }   
        }

      }
      

  return (
<div id='/' className='w-full h-screen text-center'>
        <div className='max-w-full px-3 w-full h-full mx-auto flex justify-center items-center'>
            <div>
                {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LETS bUILD SOMETHIND TOGETHER
                </p> */}
                
                    <h1 className='pt-4 text-[#141414]'>
                        HI, IM <motion.span initial = "hidden" animate = "visible" variants={nameVariant}><span className='text-[#f57309]'>Manenimabasi</span></motion.span>

                    </h1>
                <h1 id="elem" className='py-4 text-[#141414]'>
                    {/* <motion.div initial = "hidden" animate = "visible" variants={descVariant}> */}
                    A Software Developer
                    {/* </motion.div> */}
                </h1>
                <div className='py-2 font-normal px-4 text-gray-600 max-w-[100%] md:max-w-[80%] lg:max-w-[60%] m-auto'>
                I specialize in building (and occasionally designing) amazing digital experiences for the web. I will be thrilled to help you bring your ideas to life with code.
                </div>
                <motion.div initial = "hidden" animate = "show" variants={container}>
                <div className='flex items-center justify-between max-w-[330px] m-auto pt-8'>
                <motion.div variants={item1}>
                <div className='rounded-full  shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a  href = "https://www.linkedin.com/in/manenimabasi-udoh-dev-mani-42b480253/" className='bg-blue' target="_blank" rel="noopener noreferrer">
                            <div className='p-6'>
                                <FaLinkedinIn className='text-[#141414]' />
                            </div>
                        </a>
                    </div>
                    </motion.div>
                    <motion.div variants={item2}>
                    <div className='rounded-full  shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a  href = "https://github.com/manenim" className='bg-blue' target="_blank" rel="noopener noreferrer">
                            <div className='p-6'>
                                <FaGithub className='text-[#141414]' />
                            </div>
                        </a>
                    </div>
                    </motion.div>
                    <motion.div variants={item3}>
                    <div className='rounded-full  shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a  href = "https://twitter.com/manenimabasi" className='bg-blue' target="_blank" rel="noopener noreferrer">
                            <div className='p-6'>
                                <FaTwitter className='text-[#141414]' />
                            </div>
                        </a>
                    </div>
                    </motion.div>
                    <motion.div variants={item4}>
                    <div className='rounded-full  shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a  href = "mailto:manenimabasi@gmail.com" className='bg-blue' target="_blank" rel="noopener noreferrer">
                            <div className='p-6'>
                                <GrMail className='text-[#141414]' />
                            </div>
                        </a>
                    </div>
                    
                  </motion.div>  
                </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Main