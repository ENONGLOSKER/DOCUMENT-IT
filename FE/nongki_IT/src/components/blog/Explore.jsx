import React from 'react'
import { useState } from 'react';

function Explore() {

    const [exs, setExs] = useState([
        {
            id: 1,
            name: 'Python'
        },
        {
            id: 2,
            name: 'Python'
        },
        {
            id: 3,
            name: 'Python'
        },
        {
            id: 4,
            name: 'Python'
        },
        {
            id: 5,
            name: 'Python'
        },
        {
            id: 6,
            name: 'Python'
        },
        {
            id: 7,
            name: 'Python'
        },
        {
            id: 8,
            name: 'Python'
        },
    ])

    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='text-4xl text-white'>Explore</h1>
                <p className='text-white'>Temukan tutorial yang ingin kamu pelajari</p>
            </div>

            <div className='mt-10'>
                <div className='grid grid-cols-4 gap-3'>

                    {exs.map((cs, ex) => (
                        <div className='items-center p-5 flex bg-[#132144] shadow-lg border-slate-950 rounded-xl'>
                            <img className='h-20 w-auto bg-white p-2 rounded-full' src="./src/assets/img/python.png" alt="" />
                            <div className='mx-5'>
                                <h1 className='text-4xl text-white font-semibold'>{cs.name}</h1>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>

    )
}

export default Explore;