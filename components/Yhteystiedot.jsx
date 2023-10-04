import React from 'react'

const Yhteystiedot = () => {
  return (
    <div name='Yhteystiedot' className='w-full h-screen bg-[#0a2c2f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/fa5b6de1-7e5d-4bdf-a145-2f6eccb1b4de" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Yhteydenotot</p>
                <p className='text-gray-300 py-4'>// Ota minuun yhteyttä tätä formia käyttämällä tai lähetä minulle sähköpostia - arttuli51@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nimi' nimi='nimi' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' nimi='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="Message" cols="30" rows="10" placeholder='Viesti'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Paina tästä lähettääksesi</button>
        </form>
    </div>
  )
}

export default Yhteystiedot