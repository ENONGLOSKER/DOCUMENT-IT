import React from 'react'

function Sidebar() {
    return (
        <div className='mt-20 justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold text-white bg-gradient-to-r from-teal-400 via-green-600 to-blue-900 inline text-transparent bg-clip-text'>Rekomendasi</h1>
                <p className='text-white mt-1'>Paling banyak dibaca dan direkomendasikan</p>
            </div>
            <div className='mt-7 mx-48'>
                <div className='flex grid-cols-2 justify-center text-white'>
                    <div className='bg-blue-950/20 shadow-lg m-3 p-4 rounded-xl border-blue-950/40'>
                        <img className='rounded-xl' height='10px' src="./src/assets/img/laptop.jpg" alt="" />
                        <div className='flex items-center'>
                            <img className='w-16 h-16 mr-4 rounded-full' src="./src/assets/img/laptop.jpg" alt="" />
                            <div className='w-full'>
                                <h1 className='font-semibold text-3xl text-white mt-4'>Belajar Pemrograman</h1>
                                <div className='flex w-full grid-cols-2 items-center justify-between mt-3 mb-3 '>
                                    <a className='bg-gradient-to-r from-green-500 to-green-950 px-4 py-1 rounded-2xl font-semibold ' href="#">Python</a>
                                    <p className=''>29-12-2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-blue-950/20 shadow-lg m-3 p-4 rounded-xl border-blue-950/40'>
                        <img className='rounded-xl' height='10px' src="./src/assets/img/laptop.jpg" alt="" />
                        <div className='flex items-center'>
                            <img className='w-16 h-16 mr-4 rounded-full' src="./src/assets/img/laptop.jpg" alt="" />
                            <div className='w-full'>
                                <h1 className='font-semibold text-3xl text-white mt-4'>Belajar Pemrograman</h1>
                                <div className='flex w-full grid-cols-2 items-center justify-between mt-3 mb-3'>
                                    <a className='bg-gradient-to-r from-green-500 via-yellow-400 to-green-950 px-4 py-1 rounded-2xl font-semibold text-white' href="#">Javascript</a>
                                    <p className=''>29-12-2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' mt-5'>
                    <div className='grid grid-cols-3'>
                        <div className='m-3 shadow-lg'>
                            <img className='rounded-xl items-center w-full ' src="./src/assets/img/pemrograman.jpg" alt="" />
                            <div className='grid px-5 -mt-44'>
                                <p className='text-4xl text-white font-semibold'>Belajar Pemrograman</p>
                                <div className='mt-5'>
                                    <a className='bg-gradient-to-r from-green-500 via-yellow-400 to-green-950 px-4 py-1 rounded-2xl font-semibold text-white' href="#">Javascript</a>
                                </div>
                            </div>
                        </div>
                        <div className='m-3 shadow-lg'>
                            <img className='rounded-xl items-center w-full' src="./src/assets/img/pemrograman.jpg" alt="" />
                            <div className='grid px-5 -mt-44'>
                                <p className='text-4xl text-white font-semibold'>Belajar Pemrograman</p>
                                <div className='mt-5'>
                                    <a className='bg-gradient-to-r from-green-500 via-yellow-400 to-green-950 px-4 py-1 rounded-2xl font-semibold text-white' href="#">Django</a>
                                </div>
                            </div>
                        </div>
                        <div className='m-3 shadow-lg'>
                            <img className='rounded-xl items-center w-full' src="./src/assets/img/pemrograman.jpg" alt="" />
                            <div className='grid px-5 -mt-44'>
                                <p className='text-4xl text-white font-semibold'>Belajar Pemrograman</p>
                                <div className='mt-5'>
                                    <a className='bg-gradient-to-r from-green-500 via-yellow-400 to-green-950 px-4 py-1 rounded-2xl font-semibold text-white' href="#">Python</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-32 text-center'>
                        <a className='bg-[#099E8C] text-white py-4 px-12 rounded-full font-semibold' href="#">Selengkapnya</a>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Sidebar;