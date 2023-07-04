import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link as NavLink } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" w-full h-[80px] flex justify-end md:justify-center items-center px-12 bg-[#131516]  text-gray-300 ">
      <ul className="hidden md:flex">
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'white' : '',
                fontWeight: isActive ? 'bolder' : '',
                fontSize: isActive ? '24px' : '',
              };
            }}
            to="/"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 "
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'white' : '',
                fontWeight: isActive ? 'bolder' : '',
                fontSize: isActive ? '24px' : '',
              };
            }}
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 "
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'white' : '',
                fontWeight: isActive ? 'bolder' : '',
                fontSize: isActive ? '24px' : '',
              };
            }}
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 "
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'white' : '',
                fontWeight: isActive ? 'bolder' : '',
                fontSize: isActive ? '24px' : '',
              };
            }}
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 "
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'white' : '',
                fontWeight: isActive ? 'bolder' : '',
                fontSize: isActive ? '24px' : '',
              };
            }}
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 "
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10  ">
        {!nav ? (
          <FaBars className="h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50" />
        ) : (
          <FaTimes className="h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50" />
        )}
      </div>

      {/* Mobile Nav */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 right-0 w-[60%] h-[60%] bg-[#2a303c] flex flex-col rounded-md  justify-center items-center z-5 duration-500 '
        }
      >
        <li className=" py-4 text-xl ">
          <NavLink
            onClick={handleClick}
            to="/"
            smooth={true}
            duration={500}
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
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
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
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
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
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
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
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
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
          >
            Contact
          </NavLink>
        </li>
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
