import React from 'react'
import Typed from 'react-typed';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { delay, motion } from 'framer-motion';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0D1017]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto lg:ml-[130px] px-8 flex flex-col justify-center h-full'>
        <motion.p className='text-[#DC143C] font-semibold text-base sm:text-2xl lg:text-3xl'
        initial={{x: '-100vw'}}
        animate={{x: 0}}
        transition={{delay: 0.5, type: 'spring', stiffness: 60}}>Hi, my name is</motion.p>
        <motion.h1 className='text-2xl sm:text-6xl lg:text-7xl font-bold text-[#ccd6f6]'
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{delay: 0.7, type: 'spring', stiffness: 60}}>
          Samuel Udoh
        </motion.h1>
        <motion.div className='flex'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.9, duration: 1}}>
        <h1 className='text-md sm:text-5xl lg:text-6xl pr-1.5 sm:pr-2.5 lg:pr-4 font-bold inline text-[#8892b0]'>I'm a</h1>
        <Typed className='text-md sm:text-5xl lg:text-6xl font-bold text-[#8892b0]'
          strings={["Front-end Developer", "Product Designer"]}
          typeSpeed={170}
          backSpeed={100}
          loop
        />
        </motion.div>
       

        <motion.p className='text-[#8892b0] py-4 max-w-[700px]'
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{delay: 1.1, type: 'spring', stiffness: 60}}>
        I'm a Front-end Developer and I specialize in using Reactjs, ReactNative, Typescript, HTML5, CSS3, JavaScript, Bootstrap, TailwindCSS, Styled_Components and Git in web and mobile development.
        </motion.p>
        <div>
       <motion.ul className='flex lg:hidden text-[#8892b0] py-3 text-[#8892b0]'
       initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 2}}>
          <li>
            <a href='https://www.linkedin.com/in/samuel212/' target='_blank'><FaLinkedin size={26} className='hover:scale-125 duration-200'/>
            </a> 
          </li>
          <li>
            <a href='https://github.com/Sleek121' target='_blank'><FaGithub size={26} className='hover:scale-125 duration-200'/>
            </a>
          </li>
          <li>
            <a href='mailto:udohs48@gmail.com' target='_blank'><HiOutlineMail size={26} className='hover:scale-125 duration-200'/>
            </a>
          </li>
          <li>
            <a href='https://docs.google.com/document/d/16T-Q951zeqa7vt-G9mK-OCV6jlHaHbYFZQz8w1Rp5XA/edit?usp=sharing' target='blank'><BsFillPersonLinesFill size={26} className='hover:scale-125 duration-200'/>
            </a>
          </li>
        </motion.ul>
        </div>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <motion.button className='text-[#ccd6f6] group border-2 border-[#ccd6f6] px-6 py-3 my-2 flex items-center hover:bg-[#DC143C] hover:border-[#DC143C]'
          initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 2, duration: 4}}>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;