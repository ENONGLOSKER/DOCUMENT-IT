import React from 'react'
import { useState, useEffect } from 'react';
import CardRekomendasi from './CardRekomendasi';

function Rekomendasi() {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Belajar Pemrograman",
            title: "Python",
            date: "12/03/2023"
        },
        {
            id: 2,
            name: "Belajar Pemrograman",
            title: "Javascript",
            date: "12/03/2021"
        },
    ]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const respone = await axios.get("http://localhost:8000/data")
    //             setData(respone.data)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchData();
    // })

    return (
        <div>
            <div className='text-center mt-24 '>
                <h1 className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-600 to-orange-500'>Rekomendasi</h1>
                <p className='text-white'>Paling banyak dibaca dan direkomendasikan</p>
            </div>

            <div  className='grid grid-cols-2 gap-4 mt-5'>

                {data.map((blog, index) => (
                    <div key={index} className='bg-[#132144] shadow-lg rounded-xl mt-4'>
                        <div className='p-4 '>
                            <img className='rounded-xl' src="./src/assets/img/laptop.jpg" alt="" />
                        </div>
                        <div className='p-4 flex  '>
                            <img className='bg-white p-2 rounded-full w-14 h-14' src="./src/assets/img/python.png" alt="" />
                            <div className='mx-4 w-full'>
                                <h3 className='font-semibold text-3xl flex text-white'>{blog.name}</h3>
                                <div className='flex justify-between mt-2'>
                                    <a href="#" className='text-white bg-gray-950 py-2 px-4 font-semibold rounded-full'>{blog.title}</a>
                                    <p className='text-white font-semibold'>{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <CardRekomendasi />

            <div className='text-center mt-20 '>
                <a href="#" className='py-5 px-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  font-semibold text-white rounded-full'>Selengkapanya</a>
            </div>

        </div>
    )
}

export default Rekomendasi;