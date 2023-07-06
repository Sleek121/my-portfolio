import React from 'react';

import Javascript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import Git from '../assets/git.png'
import Typescript from '../assets/typescript.png'
import Figma from '../assets/figma.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0D1017] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl text-[#ccd6f6] font-bold inline border-b-4 border: border-[#DC143C]'>Skills</p>
              <p className='py-4 text-[#8892b0]'>Here are some of the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
          <div className='shadow-md shadow-[#00D8FF] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={react} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#1976D2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Typescript} alt="Typescript icon" />
                  <p className='my-4'>TYPESCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#FFD600] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#F4511E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Git} alt="Git icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow-md shadow-[#00A9BD] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="TailwindCSS icon" />
                  <p className='my-4'>TailwindCSS</p>
              </div>
              <div className='shadow-md shadow-[#7A4BFA] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Figma} alt="Figma icon" />
                  <p className='my-4'>FIGMA</p>
              </div>
    
          </div>
      </div>
    </div>
  );
};

export default Skills;