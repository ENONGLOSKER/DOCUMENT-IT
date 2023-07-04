import React from 'react'


function Navbar() {
    return (
        <header className='relative items-center grid grid-cols-3 shadow-lg text-center p-10 flex-col w-full lg:flex-row'>
            <h4 className='font-bold text-2xl text-center uppercase text-white flex-col lg:flex-row'>Dokumentasi</h4>
            <div className='flex justify-evenly items-center flex-col lg:flex-row'>
                <a className='block text-white text-lg uppercase hover:text-slate-300' href="#">Home</a>
                <a className='block text-white text-lg uppercase hover:text-slate-300' href="#">Tutorial</a>
                <a className='block text-white text-lg uppercase hover:text-slate-300' href="#">Diskusi</a>
            </div>
            <div className=' flex-col lg:flex-row'>
                <a className='text-lg uppercase py-3 px-6 items-center justify-center text-white text-center font-semibold bg-gradient-to-tr from-indigo-600 to-green-600 rounded-lg flex-col lg:flex-row' href="">Sign Up</a>
            </div>
        </header>

    )
}

export default Navbar;