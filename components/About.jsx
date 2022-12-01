import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import mypic from '../public/assets/mypic.jpg'
import { AiFillGithub } from 'react-icons/ai'
import { Bounce, Reveal } from 'react-reveal'



const About = () => {

  const about1 = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: 0
      }
    }
  }
  const about2 = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: .1,
      }
    }
  }

  return (
    <div id='about' className='w-full px-4 lg:px-8 mb-24'>
        {/* <div className='flex justify-center pb-8 text-[#f57309]'><div className='uppercase font-bold text-4xl tracking-widest'>About</div></div> */}
        <h2 className='py-4 text-center mb-6 text-[#f57309]'>ABOUT ME</h2>
        <div className='flex flex-col lg:flex-row lg:justify-around lg:items-center'>
            <div className='w-[100%] lg:w-[55%]'>
            <motion.div initial="hidden" whileInView="visible" variants = {about1} viewport={{ once: true }}>
                <div className='py-1 text-gray-700'>Hello, My name is Manenimabasi Udoh and I am a curiosity-driven Software Developer.</div>
            
            
                <div className='py-1 text-gray-700'>I am passionate about building intuitive, high-quality user experiences for the web. 
                </div>
            </motion.div>
                
                <motion.div initial="hidden" whileInView="visible" variants = {about1} viewport={{ once: true }}>

                <div className='py-1 text-gray-700'>I take pride in writing clean and accessible code that can be understood by mere mortals and I am a firm believer in simplicity in design.</div>

                <div className='py-1 text-gray-700'>My journey in web development started way back almost six years ago when I first learned the basics of HTML and CSS and began to piece together my first website, which I must confess was such a hassle at the time.</div>
                <div className='py-1 text-gray-700'>It turns out that trying to hack together a simple responsive site quite early on in my career really thought me a lot about HTML and CSS. Fast-forward to today, I have worked on several full-stack projects both personal and collaborative.</div>
                <div className='py-1 text-gray-700'>Passion and curiosity are two important traits I live by. I constantly seek to bring new ideas to the table and also devise feasible innovative solutions to complex real-world problems.</div>

                <div className='py-1 text-gray-700'>
                If you want to get in touch, feel free to reach out and say hello! I promise I don’t bite.😉
                </div>


                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  href='mailto:manenimabasiudoh@gmail.com' 
                  className = "flex justify-center items-center border-2 border-[#f57309]  bg-[#f57309] w-[12rem] mt-8 font-bold text-gray-100 py-2 rounded-xl shadow-md hover:shadow-xl hover:shadow-[#afafaf] shadow-[#afafaf]"
                    >Say Hello 👋
                  </motion.a>
                </motion.div>
            </div>

            <div className='w-[100%] mt-12 lg:mt-0 lg:w-[43%] relative flex items-center justify-center'>
            <motion.div initial="hidden" whileInView="visible" variants = {about2} viewport={{ once: true }}>

                <div className='hidden lg:block'>
                <Image className='rounded-xl image lg:block object-cover object-top hover:right-4 h-[450px]' height={450} width={450} src = {mypic} layout='fixed' alt = 'laptop'/>
                </div>
              </motion.div>
            </div>
          </div>
    </div>
  )
}

export default About