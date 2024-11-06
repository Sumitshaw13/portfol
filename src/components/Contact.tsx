import React from 'react';
import Image from 'next/image';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';

const Contact = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-6 lg:p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8" id="contact">
      
      {/* Contact Info Section */}
      <div className="flex justify-center items-center">
        <ul className="space-y-6">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[80px] w-auto lg:h-[110px] mr-4 lg:mr-6"/>
            <p className="text-lg lg:text-xl">+91 8420661970</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="mail" className="h-[80px] w-auto lg:h-[110px] mr-4 lg:mr-6"/>
            <p className="text-lg lg:text-xl">sumitshaw960@gmail.com</p>
          </li>
        </ul>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white/10 p-6 rounded-xl max-w-full lg:max-w-[550px]">
        <h2 className="text-4xl lg:text-5xl font-bold text-orange-400 mb-4">Let's Connect</h2>
        <p className="text-white/70 mb-6">Send me a message, and let's schedule a call!</p>
        
        <form className="space-y-4" action="https://getform.io/f/aolllvvb" method="POST">
          <div className="grid gap-4 md:grid-cols-2">
            <input 
              type="text" name="name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="First Name" 
              required
            />
            <input 
              type="text" 
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Last Name" 
              required
            />
            <input 
              type="email" name='email'
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Email" 
              required
            />
            <input 
              type="tel" name='phone'
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Phone" 
              required
            />
          </div>
          
          <textarea name='message'
            className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
            placeholder="Your Message" 
            rows="5" 
            required
          ></textarea>
          
          <button 
            type="submit" 
            className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-3 w-full font-semibold text-xl rounded-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;