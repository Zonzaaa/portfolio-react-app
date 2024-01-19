import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/profailpicter2.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '100px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
        <Link to="Koti" smooth={true}  duration={500}>
          Koti
        </Link>
        </li>
        <li>
        <Link to="Minusta" smooth={true}  duration={500}>
          Minusta
        </Link>
        </li>
        <li>
        <Link to="Taidot" smooth={true}  duration={500}>
          Taidot
        </Link>
        </li>
        <li>
        <Link to="Työt" smooth={true}  duration={500}>
          Työt
        </Link>
        </li>
        <li>
        <Link to="Yhteystiedot" smooth={true}  duration={500}>
          Yhteystiedot
        </Link>
        </li>
      </ul>

      {/* Hampurilaine */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!Nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!Nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-pink-500 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="Koti" smooth={true}  duration={500}>
          Koti
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link Link onClick={handleClick} to="Minusta" smooth={true}  duration={500}>
          Minusta
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link Link onClick={handleClick} to="Taidot" smooth={true}  duration={500}>
          Taidot
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link Link onClick={handleClick} to="Työt" smooth={true}  duration={500}>
          Työt
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link Link onClick={handleClick} to="Yhteystiedot" smooth={true}  duration={500}>
          Yhteystiedot
        </Link>
        </li>
      </ul>
        {/* Social icons - updated structure */}
      <div className='hidden xl:flex fixed flex-col top-[35%] right-0'>
        <ul>
          {/* LinkedIn */}
          <li className='w-[160px] h-[60px] relative flex items-center justify-end hover:mr-[-10px] duration-300 bg-[#525050]'>
            <a
              className='flex items-center w-full text-red-600 pr-8'
              href='https://www.linkedin.com/'
            >
              <FaLinkedin size={30} style={{ marginRight: '10px' }} />
              Linkedin
            </a>
          </li>

          {/* Github */}
          <li className='w-[160px] h-[60px] relative flex items-center justify-end hover:mr-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex items-center w-full text-white pr-8'
              href='https://github.com/Zonzaaa'
            >
              <FaGithub size={30} style={{ marginRight: '10px' }} />
              Github
            </a>
          </li>

          {/* Email */}
          <li className='w-[160px] h-[60px] relative flex items-center justify-end hover:mr-[-10px] duration-300 bg-[#4d5a75]'>
            <a
              className='flex items-center w-full text-green-600 pr-8'
              href='mailto:arttuli51@gmail.com'
            >
              <HiOutlineMail size={30} style={{ marginRight: '10px' }} />
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;