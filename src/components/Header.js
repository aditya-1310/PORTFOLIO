import React from 'react';
import { Button } from 'react-scroll';

const Header = () => {
  return(
    <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between  items-center'>
        <h1 className='text-3xl font-tertiary '><span className='text-purple-600 '>ADITYA </span><br/>BHADADE</h1>
        <button className='btn btn-sm'>Work With ME</button>
      </div>
    </div>
    </header>
  )
};

export default Header;
