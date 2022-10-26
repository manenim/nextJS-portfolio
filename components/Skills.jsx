import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import react from "../public/assets/skills/react.png"
import tailwind from "../public/assets/skills/tailwind.png"
import typescript from "../public/assets/skills/typescript.png"
import redux from "../public/assets/skills/redux.png"
import sass from "../public/assets/skills/sass.png"
import nextjs from "../public/assets/skills/nextjs.png"
import jest from "../public/assets/skills/jest.png"
import node from "../public/assets/skills/node.png"

const Skills = () => {

    const item1 = {
        hidden: { 
            opacity: 0,
            y: 30
        },
        show: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                delay: 0
            }   
        }

    }


  return (
    <div id='skills' className='w-full lg:h-screen px-4 lg:px-8 mb-24'>
        <div className='max-w-full mx-auto flex flex-col justify-center h-full'>
            <h2 className='text-[#f57309] text-center lg:pb-8 py-4'>MY ARSENAL...⚔️⚔️</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                
            <motion.div initial="hidden" whileInView="show" variants = {item1} viewport={{ once: true }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = {react} width = "64px" height = "64px" alt = "/"/>
                    </div>
                    <div className = 'flex flex-col items-center justify-center'>
                        <h3>REACT</h3>
                    </div>
                </div>
            </motion.div>
                <motion.div initial="hidden" whileInView="show" variants = {item1} viewport={{ once: true }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = {tailwind} width = "70px" height = "70px" alt = "/"/>
                    </div>
                    <div className = 'flex flex-col items-center justify-center'>
                        <h3>TAILWIND</h3>
                    </div>
                </div>
                </motion.div>
                <motion.div initial="hidden" whileInView="show" variants = {item1} viewport={{ once: true }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = {typescript} width = "64px" height = "64px" alt = "/"/>
                    </div>
                    <div className = 'flex flex-col items-center justify-center'>
                        <h3>TYPESCRIPT</h3>
                    </div>
                </div>
                </motion.div>
                <motion.div initial="hidden" whileInView="show" variants = {item1} viewport={{ once: true }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = {redux} width = "64px" height = "64px" alt = "/"/>
                    </div>
                    <div className = 'flex flex-col items-center justify-center'>
                        <h3>REDUX</h3>
                    </div>
                </div>
                </motion.div>
                <motion.div initial="hidden" whileInView="show" variants = {item1} viewport={{ once: true }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = {sass} width = "64px" height = "64px" alt = "/"/>
                    </div>
                    <div className = 'flex flex-col items-center justify-center'>
                        <h3>SASS</h3>
                    </div>
                </div>
                </motion.div>
                <motion.div initial="hidden" whileInView="show" variants = {item1} viewport={{ once: true }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = {nextjs} width = "64px" height = "64px" alt = "/"/>
                    </div>
                    <div className = 'flex flex-col items-center justify-center'>
                        <h3>NEXTJS</h3>
                    </div>
                </div>
                </motion.div>
                <motion.div initial="hidden" whileInView="show" variants = {item1} viewport={{ once: true }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = {jest} width = "64px" height = "64px" alt = "/"/>
                    </div>
                    <div className = 'flex flex-col items-center justify-center'>
                        <h3>JEST</h3>
                    </div>
                </div>
                </motion.div>
                <motion.div initial="hidden" whileInView="show" variants = {item1} viewport={{ once: true }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = {node} width = "64px" height = "64px" alt = "/"/>
                    </div>
                    <div className = 'flex flex-col items-center justify-center'>
                        <h3>NODEJS</h3>
                    </div>
                </div>
                </motion.div>
                
            </div>
        </div>

    </div>
  )
}

export default Skills