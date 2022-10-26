import React from 'react'
import {TiTick} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import proj1 from '../public/assets/projects/shop.png'
import proj2 from '../public/assets/projects/expense.png'
import proj3 from '../public/assets/projects/crypto.png'
import { FiExternalLink } from 'react-icons/fi'
import { VscDebugBreakpointData } from 'react-icons/vsc'
import { motion } from 'framer-motion'


const Works = () => {

    const work1 = {
        hidden: {
            opacity: 0,
            y: 60
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 1.5,
              delay: 0
            }
          }
        
    }
    const work2 = {
        hidden: {
            opacity: 0,
            y: 80
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 1,
              delay: .2
            }
          }
        
    }


  return (
    <div id='projects' className='w-full px-4 lg:px-8'>
            {/* HEADING */}
            {/* <h2 className='text-5xl tracking-widest uppercase text-[#f57309]'>Projects</h2> */}

            <h2 className='text-4xl py-4 text-center mb-8 text-[#f57309]'>PROJECTS</h2>

            <div className='flex flex-col-reverse lg:flex-row lg:h-[62vh] lg:justify-between'>

                <div className='w-full lg:w-[48%]'>
                <motion.div initial="hidden" whileInView="visible" variants = {work1} viewport={{ once: true }}>
                    <h2 className='py-4'>An EComm fashion store</h2>
                    <p className='py-2 text-gray-600'>A clothing store like no other, for when you need to look sharp for your next event😊. Feel free to check out the wide variety of clothing we have in stock. They’ll make you look fabulous.
                    Built with react, styled components, redux, for the front end, NodeJS, and express on the backend API, used JWT for authentication and stripe for payment.

                    </p>
                  
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>ReactJs</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>Redux</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>ExpressJs</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>JWT (for user authentication)</h3>
                        </div>
                    </div>
                    <div className='flex items-center py-0'>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        href='https://github.com/manenim/Fullstack-Ecommerce-Application'  
                        target="_blank" rel="noopener noreferrer" 
                        className = "flex rounded-lg justify-center items-center border-2 border-[#f57309] bg-[#f57309] w-[12rem] mt-8 text-white font-semibold py-1">
                            <AiFillGithub className = "text-white mr-2  w-8 h-8 text-xl"/>
                            Github Repo
                    </motion.a>
                    
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        href='https://shopnowfront.herokuapp.com'  
                        target="_blank" rel="noopener noreferrer" 
                        className = "flex rounded-lg justify-center items-center ml-6 bg-transparent w-[12rem] mt-8 text-[#f57309] border-2 border-[#f57309] font-semibold py-1">
                            <FiExternalLink className = "text-[#f57309] mr-2 w-8 h-8 text-xl"/>
                            Live Site
                    </motion.a>

                    </div>
                </motion.div>
                </div>

                <motion.div initial="hidden" whileInView="visible" variants = {work2} viewport={{ once: true }} className='-z-20 w-full flex justify-center lg:w-[50%] lg:h-[100%] rounded-xl shadow-md hover:shadow-xl hover:shadow-[#949494] hover:scale-105 ease-in duration-300 shadow-[#949494] bg-slate-600'>
                    <Image src={proj1} alt='project 1' className='object-cover object-left rounded-xl' />
                </motion.div>
                
            
            </div>



            <div className='flex flex-col-reverse lg:h-[76vh] lg:flex-row-reverse my-24 lg:justify-between'>
                <div className='w-full lg:w-[48%]'>
                <motion.div initial="hidden" whileInView="visible" variants = {work1} viewport={{ once: true }}>

                    <h2 className='py-4'>Financial Management Application</h2>
                    <p className='py-2 text-gray-600'>As the slogan goes, “money moves from those who do not manage it to those who do”. This amazing application helps you keep track of your expenses, savings and investment. It visually shows you where your money is really going and truly empowers you to take full charge of your finances.
                    Built with ReactJS, Redux , TailwindCSS, React-chartsJS on the frontend, NodeJS and Express on the backend, and the Awesome mongoDB as the database of choice.


                    </p>
                  
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>React Js</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>Redux</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>TailwindCSS</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>ExpressJS</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>MongoDB</h3>
                        </div>
                    </div>
                    <div className='flex items-center py-0'>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        href='https://github.com/manenim/Expense-Logger'  
                        target="_blank" rel="noopener noreferrer" 
                        className = "flex rounded-lg justify-center items-center border-2 border-[#f57309] bg-[#f57309] w-[12rem] mt-8 text-white font-semibold py-1">
                            <AiFillGithub className = "text-white mr-2  w-8 h-8 text-xl"/>
                            Github Repo
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        href='https://expenselogfront.herokuapp.com' 
                        target="_blank" rel="noopener noreferrer" 
                        className = "flex rounded-lg justify-center items-center ml-6 bg-transparent w-[12rem] mt-8 text-[#f57309] border-2 border-[#f57309] font-semibold py-1">
                            <FiExternalLink className = "text-[#f57309] mr-2 w-8 h-8 text-xl"/>
                            Live Site
                    </motion.a>
                    </div>
                </motion.div>
                </div>
                
                <motion.div initial="hidden" whileInView="visible" variants = {work2} viewport={{ once: true }}  className='-z-20 w-full flex justify-center lg:h-[100%] rounded-xl shadow-md hover:shadow-xl hover:shadow-[#949494] hover:scale-105 ease-in duration-300 shadow-[#949494] lg:w-[50%] '>
                    <Image src={proj2} alt='project 2' className='object-center object-cover rounded-xl' />
                </motion.div>
            
            </div>



            <div className='flex flex-col-reverse lg:flex-row lg:h-[68vh] lg:justify-between'>
                <div className='w-full lg:w-[48%]'>
                <motion.div initial="hidden" whileInView="visible" variants = {work1} viewport={{ once: true }}>
                    <h2 className='py-4'>Cryptoland!!✨✨ </h2>
                    <p className='py-2 text-gray-600'>This project is centered around APIs. I implemented data fetching from two different REST APIs using the Axios library. this application bring to you the latest crypto statistics as well as the latest news in the cryptocurrency universe. Built with ReactJs, Redux, React-router, React-chartjs-2, and styled with Ant-design.
                    </p>
                  
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>ReactJS</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>ReduxJS</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>Axios</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>React-chartJS</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>Ant Design</h3>
                        </div>
                        <div className='flex items-center'>
                            <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                            <h3 className=''>Rapid API</h3>
                        </div>
                    </div>
                    <div className='flex items-center py-0'>
                   
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        href='https://github.com/manenim/cryptoland'  
                        target="_blank" rel="noopener noreferrer" 
                        className = "flex rounded-lg justify-center items-center border-2 border-[#f57309] bg-[#f57309] w-[12rem] mt-8 text-white font-semibold py-1">
                            <AiFillGithub className = "text-white mr-2  w-8 h-8 text-xl"/>
                            Github Repo
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        href='https://cryptoland.herokuapp.com' 
                        target="_blank" rel="noopener noreferrer" 
                        className = "flex rounded-lg justify-center items-center ml-6 bg-transparent w-[12rem] mt-8 text-[#f57309] border-2 border-[#f57309] font-semibold py-1">
                            <FiExternalLink className = "text-[#f57309] mr-2 w-8 h-8 text-xl"/>
                            Live Site
                    </motion.a>
                    </div>
                </motion.div>
                </div>
                
                <motion.div initial="hidden" whileInView="visible" variants = {work2} viewport={{ once: true }}  className='-z-20 w-full flex justify-center rounded-xl shadow-md hover:shadow-xl hover:shadow-[#949494] hover:scale-105 ease-in duration-300 shadow-[#949494] lg:w-[50%]'>
                    <Image src={proj3} alt='project 3' className='object-right object-cover rounded-xl' />
                </motion.div>
            
            </div>


    </div>
  )
}

export default Works