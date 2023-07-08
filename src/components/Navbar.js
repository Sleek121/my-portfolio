import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full z-10 h-[80px] flex justify-between items-center px-4 bg-[#0D1017] text-gray-300'>
      <div>
      <a href="/"><motion.h1 className="text-4xl md:text-5xl font-signature font-medium text-[#DC143C] cursor-pointer" 
      initial={{y: -250}}
      animate={{y: 0}}
      transition={{delay: 0.5, type: 'spring', stiffness: 120}}>
          Samuel
        </motion.h1></a>
      </div>

      {/* menu */}
      <motion.ul className='hidden md:flex'
      initial={{y: -250}}
      animate={{y: 0}}
      transition={{delay: 0.5, type: 'spring', stiffness: 120}}>
        <li className="text-[#8892b0] hover:scale-110 duration-200 border-[#ccd6f6]">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-[#8892b0] hover:scale-110 duration-200">
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-[#8892b0] hover:scale-110 duration-200">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-[#8892b0] hover:scale-110 duration-200">
        <Link to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="text-[#8892b0] hover:scale-110 duration-200">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </motion.ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0D1017] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl text-[#8892b0]'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl text-[#8892b0]'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl text-[#8892b0]'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl text-[#8892b0]'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl text-[#8892b0]'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <motion.div className='hidden lg:flex fixed flex-col top-[35%] left-0'
       initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 2}}>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/samuel212/' target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Sleek121' target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DC143C]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:udohs48@gmail.com' target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1sh6ABWaWlTe_KLtn71obxKQM5qyu9COc/view' target="blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;