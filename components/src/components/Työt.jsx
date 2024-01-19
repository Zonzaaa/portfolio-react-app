import React from 'react';
import Malli from '../assets/3Dmalli.png';
import Mallii2 from '../assets/Malli2.png';
import { Link } from 'react-scroll';
import Tulossa from '../assets/tryhackme.png';
import Tulossa2 from '../assets/Tulossa2.png';
import Portfolioweb from '../assets/projektit.png';
import tyot from '../assets/kuvaas.png';
import googlebadge from '../assets/kooklekuva.png'
import badge2 from '../assets/codecademy5.png'

const Työt = () => {
  const sectionStyle = {
    backgroundImage: `url(${tyot})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div name='Työt' style={sectionStyle} className='w-full md:h-screen text-white bg-[#0a0a0a]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Työt ja badget/sertifikaatit</p>
          <p className='py-6'>// Tästä näet minun aikaisemmat työni ja sertifikaatit/badget.</p>
        </div>

        {/* Grid Container */}
        <div className='grid md:grid-cols-2 sm:grid-cols-4 gap-4'>

          {/* Grid Item 1 */}
          <div style={{ background: `url(${Malli})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>3D malli luokasta</span>
              <div>
                <a href=""></a>
                <a href="https://github.com/Zonzaaa/portfolio-react-app/blob/master/assets/3Dmalli.png">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso koko työ tästä</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div style={{ background: `url(${Portfolioweb})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>aikaisemmin tekemäni projektit</span>
              <div>
                <a href="/"></a>
                <a href="https://drive.google.com/drive/folders/1Jo3GrrjeBMEhyIztBuBa84UTm3HubLk-?usp=drive_link">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Linkki minun onedrive kansioon</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div style={{ background: `url(${Mallii2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>Rasberry Pi kotelo</span>
              <div>
                <a href=""></a>
                <a href="https://github.com/Zonzaaa/portfolio-react-app/blob/master/assets/Malli2.png">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso koko työ tästä</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div style={{ background: `url(${badge2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover efekti */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>Codecademy profiilini ja badgeni.</span>
              <div>
              <a href="/"></a>
              <a href="https://www.codecademy.com/users/Arttuli/achievements">
                  <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso kaikki codecademy badgeni tästä</button>
                </a>
              </div>
              </div>
            </div>

 {/* Grid Item 5 */}
<div style={{ background: `url(${googlebadge})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
  {/* Hover efekti */}
  <div className='opacity-0 group-hover:opacity-100'>
    <span className='text-2xl font-bold text-white tracking-wider'>Google Bughunters Badge</span>
    <div>
      <a href="/"></a>
      <a href="https://bughunters.google.com/profile/aa48b187-05f1-49e9-b21c-d395486d8669">
        <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso profiilini tästä</button>
      </a>
    </div>
  </div>
</div>

{/* Grid Item 6 */}
<div style={{ background: `url(${Tulossa})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
  {/* Hover efekti */}
  <div className='opacity-0 group-hover:opacity-100'>
    <span className='text-2xl font-bold text-white tracking-wider'>Tryhackme profiilini ja badgeni</span>
    <div>
    <a href="/"></a>
      <a href="https://tryhackme.com/p/Arttuli">
        <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Katso profiilini ja badgeni tästä</button>
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