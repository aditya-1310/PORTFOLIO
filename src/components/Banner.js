import React from 'react';

import avatar1 from '../assets/avatar1.png';
import {motion} from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import{FaGithub} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
const Banner = () => {
  return (
    <section className='section' id="home">
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-8 lg:flex-row  items-center lg:items-center'>
          <div className='flex-1 text-center font-secondary lg:items-left'>
            <h1 className='text-[42px] font-bold leading-[0.8] lg:text-[110px]'>
              Aditya <span>Bhadade</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold
            uppercase leading-[1]'>

            <h1>
              <span className='mr-4'>I  am a</span>
             <TypeAnimation
             sequence={[
              'Frontend Developer',
              2000,
              'Backend Developer',
              2000,
              'Fullstack Developer',
              2000,
              'GAMER',
              2000,
             ]}   
             speed={50}
             repeat={Infinity}
             wrapper='span'
             className='text-accent'          
             />
             </h1>
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>I build things for the web with love and passion. 
              I am an open source contributor.
              I am always looking to learn new technologies. 
              I love to contribute to open source projects.
              I love to play games      
            </p>
            <div className='flex max-w-max items-center gap-x-6 mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'> My Portfolio</a>
            </div>
          {/* social media */}
          <div className='text-[20px] flex  mx-auto gap-x-6 lg:mx-0 max-w-max'>
             <a href='https://github.com/aditya-1310'><FaGithub/></a>
             <a href='https://github.com/adityabh'><FaLinkedinIn/></a>
             <a href='https://github.com/adityabh'><FaTwitterSquare/></a>
          </div>
          </div>
          <div>
            <img className='avatar rounded-full w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] ' src={avatar1} alt="" />
          </div>
        </div>
      </div>
      </section>
  )
};
export default Banner;
