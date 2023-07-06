import React from 'react';
import portfolio from '../src/assets/portfolio/portfolio.png'
import design from '../src/assets/portfolio/design.png'
import bookshelf from '../src/assets/portfolio/bookshelf.png'
import gadgets from '../src/assets/portfolio/gadgets.png'
import koncepts from '../src/assets/portfolio/sleek-koncepts.png'


const Work = () => {

  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0D1017]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#ccd6f6] border: border-[#DC143C]'>
            Projects
          </p>
          <p className='py-6 text-[#8892b0]'>Here are some of my previous projects</p>
        </div>

{/* container*/}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
  <div
    style={{ backgroundImage: `url(${portfolio})`}}
    className="shadow-md shadow-gray-800 group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div " >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font-bold text-white tracking-wider ">
      My portfolio
      </span>
      <div className="pt-8 text-center ">
        <a href="/">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
        <h3 className='text-lg pt-6'>BuildUp: ReactJs, FramerMotion</h3>
      
      </div>
    </div>
  </div>

  <div
    style={{ backgroundImage: `url(${bookshelf})` }}
    className="shadow-md shadow-gray-800 group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div " >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font-bold text-white tracking-wider ">
      Bookshelf
      </span>
      <div className="pt-8 text-center ">
        <a href="/">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
        <h3 className='text-lg pt-6'>BuildUp: ReactJs, FramerMotion</h3>
  
      </div>
    </div>
  </div>

            {/* Gird Item */}
            <div
    style={{ backgroundImage: `url(${koncepts})` }}
    className="shadow-md shadow-gray-800 group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div " >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font-bold text-white tracking-wider ">
      Sleek Koncepts
      </span>
      <div className="pt-8 text-center ">
        <a href="/">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
        <h3 className='text-lg pt-6'>BuildUp: ReactJs, FramerMotion</h3>
        
      </div>
    </div>
  </div>

  <div
    style={{ backgroundImage: `url(${gadgets})` }}
    className="shadow-md shadow-gray-800 group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div " >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font-bold text-white tracking-wider ">
      Sleek Gadgets
      </span>
      <div className="pt-8 text-center ">
        <a href="https://sleekgadgets.netlify.app/" target='blank'>
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
        <h3 className='text-lg pt-6'>BuildUp: HTML5, CSS3, TailwindCSS</h3>
       
      </div>
    </div>
  </div>

            {/* Gird Item */}
            <div
    style={{ backgroundImage: `url(${bookshelf})` }}
    className="shadow-md shadow-gray-800 group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div " >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font-bold text-white tracking-wider ">
      Bookshelf
      </span>
      <div className="pt-8 text-center ">
        <a href="https://bookshelf11.netlify.app/" target='blank'>
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
        <h3 className='text-lg pt-6'>BuildUp: HTML5, CSS3, TailwindCSS</h3>
    
      </div>
    </div>
  </div>

  <div
    style={{ backgroundImage: `url(${design})` }}
    className="shadow-md shadow-gray-800 group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div " >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font-bold text-white tracking-wider ">
      Eat 'N Drink UI Design
      </span>
      <div className="pt-8 text-center ">
        <a href="/">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Preview
          </button>
        </a>
        <h3 className='text-lg pt-6'>Tools: Figma, Photoshop</h3>
  
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Work;