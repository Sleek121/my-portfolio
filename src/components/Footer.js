import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#8892b0] flex flex-col sm:flex-row sm:justify-between text-center  px-8 py-4 text-sm bg-[#0D1017] w-full h-[100px] sm:h-[100px]">

    <p className='mt-2 sm:mt-6 pl-2 text-base text-[#ccd6f6]'>&copy; Copyright Reserved 2023</p>

    <div>
       <ul className='flex mt-2 sm:mt-6 text-[#ccd6f6] justify-center sm:justify-normal'>
          <li>
            <a href='https://www.linkedin.com/in/samuel212/'><FaLinkedin size={26} className='hover:scale-125 duration-200'/>
            </a>
          </li>
          <li>
            <a href='https://github.com/Sleek121'><FaGithub size={26} className='hover:scale-125 duration-200'/>
            </a>
          </li>
          <li>
            <a href='mailto:udohs48@gmail.com'><HiOutlineMail size={26} className='hover:scale-125 duration-200'/>
            </a>
          </li>
        </ul>
        </div>
      </div>
  )
}

export default Footer