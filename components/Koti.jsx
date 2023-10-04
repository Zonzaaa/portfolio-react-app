import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Koti = () => {
  return (
    <div name='Koti' className='w-full h-screen bg-[#0a2c2f]'>
      {/* Container */}
      <div className='max-width[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Terve, minun nimeni on</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Arttu Lilja</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Minä olen FrontEnd ohjelmoija.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Minun erityistaitoihini kuuluvat FrontEnd rakentaminen, Kehitän tällä hetkelläni FullStack osaamistani,
          pääasiassa toimin FrontEnd Devolperina mutta tulevaisuudessa voin myös toimia FullStack Devolperina.
        </p>
        <div>
          <Link to='Työt' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
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