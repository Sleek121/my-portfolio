import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0D1017] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl text-[#ccd6f6] font-bold inline border-b-4 border: border-[#DC143C]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-[#8892b0]'>Hello. I'm Samuel Udoh, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-[#8892b0]'>I am Samuel Udoh, a professional and talented front-end developer. I'm passionate about leveraging my diverse skills to decipher challenging problems and create delightful experiences. I always work towards achieving the best result on either personal or a client's project.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;