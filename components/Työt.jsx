import React from 'react';
import Malli from '../assets/3Dmalli.png';
import Mallii2 from '../assets/Malli2.png';
import {Link} from 'react-scroll'

const Työt = () => {
  return (
    <div name='Työt' className='w-full md:h-screen text-gray-300 bg-[#0a2c2f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Työt</p>
          <p className='py-6'>// Katso minun aikaisemmin tekemät työt!</p>
        </div>

        {/* Grid Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item 1 */}
          <div style={{ background: `url(${Malli})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>3D mallinnus luokasta</span>
              <div>
                <a href=""></a>
                <a href="https://github.com/Zonzaaa?tab=projects">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso koko työ tästä</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div style={{ background: `url(${Mallii2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>Rasberry Pi kotelo</span>
              <div>
                <a href=""></a>
                <a href="https://github.com/Zonzaaa?tab=projects">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso koko työ tästä</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div style={{ background: `url(${Malli})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>Projektin nimi 3</span>
              <div>
                <a href="/">Linkki 3</a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso koko työ tästä</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div style={{ background: `url(${Malli})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>Projektin nimi 4</span>
              <div>
                <a href="/">Linkki 4</a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso koko työ tästä</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 5 */}
          <div style={{ background: `url(${Malli})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>Projektin nimi 5</span>
              <div>
                <a href="/">Linkki 5</a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso koko työ tästä</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 6 */}
          <div style={{ background: `url(${Malli})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>Projektin nimi 6</span>
              <div>
                <a href="/">Linkki 6</a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso koko työ tästä</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Työt;