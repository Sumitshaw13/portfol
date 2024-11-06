"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.jpg";

const projects = [
  {
    title: "AI Chatbot Integration Platform",
    desc: "Integrated AI chatbot for intelligent PDF-based responses. Optimized data handling for large documents with Pandas. Ensured secure environment with Firebase and Dotenv. Created a seamless user interface with Streamlit.",
    devStack: "Streamlit, Python, Pandas, Firebase, Dotenv, LangChain (Gemini API)",
    link: "#",
    git: "#",
    src: proj4,
  },
  {
    title: "Multi-Timezone Analog Clock",
    desc: "Built an interactive analog clock displaying real-time across multiple time zones.",
    devStack: "Python, Tkinter",
    link: "#",
    git: "#",
    src: proj2,
  },
  {
    title: "Portfolio Website",
    desc: "xxxxx",
    devStack: "React, Tailwind CSS, Next.js, Framer Motion",
    link: "#",
    git: "#",
    src: proj3,
  },
];

const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40' id='portfolio'>
      <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>
        My<span className='text-orange-400'>Projects</span>
      </h1>

      <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
          >
            <div className='space-y-2 max-w-[550px]'>
              <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
              <h2 className='text-4xl'>{project.title}</h2>
              <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
              <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>

              <div className='w-64 h-[1px] bg-gray-400 my-4'></div>
              <a href={project.link} className='mr-6 hover:text-orange-400'>Link</a>
              <a href={project.git} className='hover:text-orange-400'>Git</a>
            </div>

            <div className='flex justify-center items-center'>
              <Image src={project.src} alt={project.title} className='h-[350px] w-[500px] object-cover border rounded border-gray-700' />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
