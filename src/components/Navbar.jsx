import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Menu } from '../data/Menu';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" w-full h-[80px] flex justify-end md:justify-center items-center px-12 bg-[#131516]  text-[#A6ADBB] ">
      <ul className="hidden md:flex">
        {Menu.map((item, index) => {
          console.log(item);
          return (
            <li key={index}>
              <Link
                to={item.url}
                smooth={true}
                duration={500}
                //               color: #333;
                // text-decoration: none;
                // display: inline-block;
                // position: relative;
                className="cursor-pointer px-4 py-[0.10rem] text-xl text-[#A6ADBB] duration-100  font-bold transition border-b-2 border-transparent hover:border-[#007bff]"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10  ">
        {!nav ? (
          <FaBars className="h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50 fill-[#007bff]" />
        ) : (
          <FaTimes className="h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50 fill-[#007bff]" />
        )}
      </div>

      {/* Mobile Nav */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 right-0 w-[50%] h-[100%] bg-[#2a303c] flex flex-col rounded-md  justify-center items-center z-5 duration-500 '
        }
      >
        {Menu.map((item, index) => {
          return (
            <li key={index} className=" py-4 text-3xl ">
              <Link
                onClick={handleClick}
                to={item.url}
                smooth={true}
                duration={500}
                className="mono-type text-xl font-bold tracking-widest text-[#A6ADBB] transition border-b-2 border-transparent hover:border-[#007bff]"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
