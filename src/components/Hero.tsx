"use client";
import Image from 'next/image';
import cursor from "../assets/icon1.png";
import lighting from "../assets/icon2.png";
import { motion } from 'framer-motion';
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div className="py-16 md:py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBFA6E_80%)]">
      
      {/* Background Radial Gradient */}
      <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'></div>
      
      <div className='relative'>
        
        {/* Heading Section */}
        <div className="text-5xl md:text-8xl font-bold text-center">
          <h1 className='text-[#9884CE]'>Hi, I am</h1>
          <h1 className='text-[#E48A57]'>Sumit Shaw</h1>
        </div>
        
        {/* Animated Cursor and Lighting Icons (Visible on Larger Screens) */}
        <motion.div className='hidden md:block absolute left-[10%] lg:left-[280px] top-[170px]' drag>
          <Image
            src={cursor}
            height="170"
            width="170"
            alt='cursor'
            draggable="false"
          />
        </motion.div>
        
        <motion.div className='hidden md:block absolute right-[10%] lg:right-[220px] top-[20px]' drag>
          <Image
            src={lighting}
            height="120"
            width="120"
            alt='lighting'
            draggable="false"
          />
        </motion.div>
        
        {/* Description Section */}
        <p className='text-center text-lg md:text-xl max-w-[300px] md:max-w-[500px] mx-auto mt-6 md:mt-8 text-white/80'>
          I am a full-stack developer focused on creating websites that provide the best experience for users.
        </p>
        
        {/* Profile Picture */}
        <Image
          src={profilepic}
          alt='profile picture'
          className='h-auto w-auto mx-auto mt-8'
        />
      </div>
    </div>
  );
}

export default Hero;
