import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" h-[80px] flex justify-between items-center px-4 bg-gray-1000 text-gray-300">
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 ml-1 mr-1 h-8 w-8 rounded py-1"
      >
        {!nav ? (
          <FaBars className="h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50" />
        ) : (
          <FaTimes className="h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gray-1000 flex flex-col justify-center items-center'
        }
      >
        <li className=" py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="mono-type text-2xl font-bold tracking-widest text-gray-100"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/suraj-goswami01"
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
      </div>
    </div>
  );
};

export default Navbar;
