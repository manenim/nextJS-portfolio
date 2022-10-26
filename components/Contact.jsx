// import Link from 'next/link'
// import React from 'react'
// import { AiOutlineMail } from 'react-icons/ai'
// import { BsFillPersonLinesFill } from 'react-icons/bs'
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
// import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

// const Contact = () => {
//   return (
//     <div id='contact' className= 'w-full lg:h-screen'>
//         <div className='max-w-[1240px] m-auto px-2 py16 w-full'>
//             <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
//                 Contact
//             </p>
//             <h2 className='py-4'> Get In touch </h2>
//             <div className='grid lg:grid-cols-5 gap-8'>
//                 <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
//                     <div className='lg:p-4 h-full'>
//                         <div>
//                             <img className='rounded-xl hover:scale-105 ease-in duration-300' src = "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = '/' />
//                         </div>
//                         <div>
//                             <h2 className='py-2'>Name Here</h2>
//                             <p>Frontend Developer</p>
//                             <p className='py-4'>I am available for freelance or fulltime positions. contact me and lets talk</p>
//                         </div>
//                         <div>
//                             <p className='uppercase pt-8'>Connect with us</p>
//                             <div className='flex items-center justify-between py-4'>
//                                 <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                     <FaLinkedinIn/>
//                                 </div>
//                                 <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                     <FaGithub/>
//                                 </div>
//                                 <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                     <AiOutlineMail/>
//                                 </div>
//                                 <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                     <BsFillPersonLinesFill/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
//                     <label className='p-4'>
//                         <form>
//                             <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
//                                 <div className='flex flex-col'>
//                                     <label className='uppercase text-sm py-2'>Name</label>
//                                     <input className='border-2 rounded-lg p-3 flex border-gray-300' type = "text" />                                
//                                 </div>
//                             </div>
//                             <div className='flex flex-col py-2'>
//                                 <label className='uppercase text-sm py-2'>Email</label>
//                                 <input className='border-2 rounded-lg p-3 flex border-gray-300' type = "email" />
//                             </div>
//                             <div className='flex flex-col py-2'>
//                                 <label className='uppercase text-sm py-2'>Subject</label>
//                                 <input className='border-2 rounded-lg p-3 flex border-gray-300' type = "text" />
//                             </div>
//                             <div className='flex flex-col py-2'>
//                                 <label className='uppercase text-sm py-2'>Message</label>
//                                 <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows= "10" type = "text" ></textarea>
//                             </div>

//                             <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
//                         </form>
//                     </label>
//                 </div>
//             </div>
//             <div className='flex justify-center py-12'>
//                 <Link href = '/'>
//                     <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
//                         <HiOutlineChevronDoubleUp className='text-[#5651e5] size = {30}' />
//                     </div>
//                 </Link>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Contact

//contact.jsx
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { validateConfig } from "next/dist/server/config-shared";
import { MdSend } from 'react-icons/md'
// import {validate} from 'react-email-validator'


const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();
  const [email, setEmail] = useState(false)


  const handleSubmit = (e) => {
    
    e.preventDefault() 

    emailjs.sendForm('service_hj9rpvg', 'template_7cb5s5r', form.current, '3Ant8ShhLcrEWfJHS')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">Well be in touch soon.</div>
      </>
    );
  }

  return (
    <div
      id = "contact"
      className="h-1/2 pt-16 lg:h-4/5 lg:py-16 mt-16 flex flex-col 
      items-center justify-center"
    >
      <div className="mb-8 lg:mb-8 pt-0">
        <h2 className="text-center mb-4 text-[#f57309]">Get In Touch</h2>
        <p className="w-[90%] lg:w-[60%] m-auto text-center">Stopping by to say G’day, ask a question, or see if we can work together to build your dream application? I would be thrilled to hear from you!!</p>
      </div>
      <form
        ref={form}
        className="bg-white w-5/6 shadow-xl lg:w-3/4 rounded px-8 pt-6 pb-8 mb-4"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="user_name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-[#f57309] disabled:opacity-25 text-white active:bg-[#F7CB1E] flex items-center font-bold uppercase text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            // disabled = {validate(email)}
          >
            Send a message  <MdSend className="ml-2 text-xl"/>
           
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;