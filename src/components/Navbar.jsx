import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer'>Home</li>
        <li className='p-4 cursor-pointer'>Company</li>
        <li className='p-4 cursor-pointer'>Resources</li>
        <li className='p-4 cursor-pointer'>About</li>
        <li className='p-[15px] cursor-pointer text-black bg-white rounded-lg'>
          <a href="#Last">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className='cursor-pointer block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React.</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={closeNav}>Home</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={closeNav}>Company</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={closeNav}>Resources</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={closeNav}>About</li>
          <li className='p-4 cursor-pointer' onClick={closeNav}>
            <a href="#Last">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
