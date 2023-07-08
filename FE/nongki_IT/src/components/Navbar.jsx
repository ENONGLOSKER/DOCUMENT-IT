import React from 'react'

function Navbar() {
    return (
        <div className='grid grid-cols-3 items-center justify-center bg-transparent mx-12 p-10'>
            <div className=''>
                <h1 className='font-semibold text-white text-2xl '>Dokumentasi</h1>
            </div>
            <div>
                <nav className="flex justify-center space-x-20 text-1xl ">
                    <a href="/dashboard" className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-50 hover:text-blue-950">Home</a>
                    <a href="/team" className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-50 hover:text-blue-950">Tutorial</a>
                    <a href="/projects" className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-50 hover:text-blue-950">Diskusi</a>
                </nav>
            </div>
            <div className='text-end'>
                <a href="#" className='font-semibold py-3 uppercase px-6 bg-white rounded-lg'>Sign Up</a>
            </div>

        </div>
    )
}

export default Navbar;