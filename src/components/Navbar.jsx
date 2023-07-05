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
                className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-[#A6ADBB] duration-100 "
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
            : 'absolute top-0 right-0 w-[60%] h-[100%] bg-[#2a303c] flex flex-col rounded-md  justify-center items-center z-5 duration-500 '
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
                className="mono-type text-xl font-bold tracking-widest text-[#A6ADBB]"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        {/* <li className=" py-4 text-3xl ">
          <NavLink
            onClick={handleClick}
            to="/"
            smooth={true}
            duration={500}
            className="mono-type text-xl font-bold tracking-widest text-[#A6ADBB]"
          >
            Home
          </NavLink>
        </li>
        <li className="py-4 text-3xl">
          {' '}
          <NavLink
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="mono-type text-xl font-bold tracking-widest text-[#A6ADBB]"
          >
            About
          </NavLink>
        </li>
        <li className="py-4 text-3xl">
          {' '}
          <NavLink
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="mono-type text-xl font-bold tracking-widest text-[#A6ADBB]"
          >
            Skills
          </NavLink>
        </li>
        <li className="py-4 text-3xl">
          {' '}
          <NavLink
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            className="mono-type text-xl font-bold tracking-widest text-[#A6ADBB]"
          >
            Work
          </NavLink>
        </li>
        <li className="py-4 text-3xl">
          {' '}
          <NavLink
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="mono-type text-xl font-bold tracking-widest text-[#A6ADBB]"
          >
            Contact
          </NavLink>
        </li> */}
      </ul>

      {/* Social icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.Linkedin.com/in/suraj-goswami01"
              target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/SurajG20"
              target="blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:Surajgoswami3000@gmail.com"
              target="blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
