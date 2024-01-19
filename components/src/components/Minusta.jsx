import React from 'react';
import { Link } from 'react-scroll';
import kauniskuva from '../assets/kuva24.png';

const Minusta = () => {
  const sectionStyle = {
    backgroundImage: `url(${kauniskuva})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div name='Minusta' style={sectionStyle} className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Minusta</p>
          </div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hei! Minun nimeni on Arttu, katsothan minun projektini.</p>
          </div>
          <div className='text-1xl'>
            <p>
              Olen kiinnostunut Websivujen rakentamisesta, kyberturvallisuudesta, tietoliikennetekniikasta ja IoT:stä.
              Haluan tulevaisuudessa ehdottomasti opetella näitä asioita paremmin ja mahdollisesti sitä kautta saada minun unelmatyöni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minusta;