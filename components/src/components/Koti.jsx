import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import kaapo from '../assets/oikee3.png';

const Koti = () => {
  return (
    <div
      name='Koti'
      className='w-full h-screen'
      style={{
        backgroundImage: `url(${kaapo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Container */}
      <div className='max-w-1000px mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Terve! Minun nimeni on</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#d378ce]'>Arttu Lilja</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>Minä olen FrontEnd ohjelmoija.</h2>
        <p className='text-[#ffffff] py-4 max-w-[700px]'>
          Minun taitoihini kuuluvat FrontEnd rakentaminen, it-tukitehtävät ja Kehitän tällä hetkelläni FullStack osaamistani,
          pääasiassa toimin FrontEnd Developerina.
        </p>
        <div>
          <Link to='Työt' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-pink-700'>
              katsothan aikaisemmat työni tästä
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Koti;