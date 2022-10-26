import React from 'react'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import { TiTick } from 'react-icons/ti'
import cert1 from '../public/assets/cert1.png'
import cert2 from '../public/assets/cert2.png'
import { VscDebugBreakpointData } from 'react-icons/vsc'
import { motion } from 'framer-motion'

const Certifications = () => {

  return (
    <div id='certification' className='w-full px-4 lg:px-8 mt-32'>
        <div className='flex justify-center pb-8 text-[#f57309]'><div className='uppercase font-bold text-4xl text-[#f57309]'>CERTIFICATIONS</div></div>

        <div className='flex flex-col lg:flex-row lg:justify-between mb-12'>
        <div className='w-full shadow-md hover:shadow-xl hover:shadow-[#949494] hover:scale-105 ease-in duration-300 shadow-[#949494] rounded-xl lg:w-[55%]'>

            <Image src={cert1} alt = "cert" />
          </div>
          <div className='w-full lg:w-[42%]'>
            <h2 className='mb-4 mt-8 lg:mt-0 '>Foundations of UX Design</h2>
            <div>In this program offered by google, I was able to gain some experience in the field of UX design. I was better understood some fundamental UX design concepts including;
          </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2'>
              <div className='flex items-center'>
                  <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                  <h3 className=''>User-Centered Design</h3>
              </div>
              <div className='flex items-center'>
                  <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                  <h3 className=''>Accessibility</h3>
              </div>
              <div className='flex items-center'>
                  <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                  <h3 className=''>Equity-focused Design</h3>
              </div>
              <div className='flex items-center'>
                  <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                  <h3 className=''>Design Sprints</h3>
              </div>
              <div className='flex items-center'>
                  <VscDebugBreakpointData className='text-[#f57309] w-8 h-8' />
                  <h3 className=''>And Much More</h3>
              </div>

            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href='https://coursera.org/share/c1e72b3f26cf1c2c1815c054c3b8f0a6'
              target="_blank" rel="noopener noreferrer" 
              className = "flex justify-center items-center rounded-xl  border-2 border-[#f57309] bg-[#f57309] w-[12rem] mt-8 text-white py-1">
                <FiExternalLink className = "text-white mr-2 w-8 h-8 text-xl"/>
                Click to View
                
            </motion.a>

          </div>
        </div>



        <div className='flex flex-col lg:flex-row-reverse lg:justify-between mt-12'>
        <div className='w-full shadow-md hover:shadow-xl hover:shadow-[#949494] hover:scale-105 ease-in duration-300 shadow-[#949494] rounded-xl lg:w-[55%]'>
            <Image src={cert2} alt = "cert" />
              
          </div>
          <div className='w-full lg:w-[42%]'>
            <h2 className='mb-4 mt-12 lg:mt-0'>ALX-T Cloud Developer</h2>
            <div>I recently completed the ALX Cloud developer training program and it was such a blast. I gained hands-on experience working with the AWS cloud technology as well as technologies like docker, google’s Kubernetes and Travis CI. 
              <div className='pt-2'>Beyond just working with these technologies I better understood a lot about debugging, working with legacy code, and many other useful software development best practices. I also gained hands-on experience working on several challenging but exciting projects including;</div>
            </div>

            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2'>
              <div className='flex items-center'>
                  <VscDebugBreakpointData className='text-[#f57309] w-8 h-8 pr-1' />
                  <h3 className=''>Building and deploying a full-stack app on AWS elastic beanstalk</h3>
              </div>
              <div className='flex items-center'>
                  <VscDebugBreakpointData className='text-[#f57309] w-8 h-8 pr-1' />
                  <h3 className=''>Building a CI/CD pipeline with Travis CI and Kubernetes(k8)</h3>
              </div>
              <div className='flex items-center'>
                  <VscDebugBreakpointData className='text-[#f57309] w-8 h-8 pr-1' />
                  <h3 className=''>Refactoring a monolith into microservices.</h3>
              </div>
              <div className='flex items-center'>
                  <VscDebugBreakpointData className='text-[#f57309] w-8 h-8 pr-1' />
                  <h3 className=''>Deploying a serverless application on AWS Lambda</h3>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href='https://coursera.org/share/c1e72b3f26cf1c2c1815c054c3b8f0a6'
              target="_blank" rel="noopener noreferrer" 
              className = "flex justify-center items-center rounded-xl  border-2 border-[#f57309] bg-[#f57309] w-[12rem] mt-8 text-white py-1">
                <FiExternalLink className = "text-white mr-2 w-8 h-8 text-xl"/>
                Click to View
                
            </motion.a>
          </div>
        </div>

    </div>
  )
}

export default Certifications