import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { validateConfig } from "next/dist/server/config-shared";
import { MdSend } from 'react-icons/md'
// import {validate} from 'react-email-validator'


const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  


  const handleSubmit = async  (e) => {
    
    e.preventDefault() 
    setEmail('')
    setName('')
    setMessage('')

   await emailjs.sendForm('service_hj9rpvg', 'template_7cb5s5r', form.current, '3Ant8ShhLcrEWfJHS')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    alert("Your meeaasge has been sent. Thank you for reaching out.")
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
            value={name}
            onChange = {(e) => setName(e.target.value)}
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
            value= {email}
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            value={message}
            onChange = {(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-[#f57309] disabled:opacity-25 text-white active:bg-[#F7CB1E] flex items-center font-bold uppercase text-sm px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 shadow-md hover:shadow-xl hover:shadow-[#afafaf] shadow-[#afafaf]"
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