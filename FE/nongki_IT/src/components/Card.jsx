import React from 'react'

function CardiImage() {
  return (
    <div className='mx-52 mt-20 '>
      <div className='grid relative gap-4 grid-cols-3 p-5 bg-blue-950/20 border-blue-950/40 rounded-xl shadow-lg items-center justify-center'>
        <div className='-mt-44 p-5 text-white ab'>
          <h1 className='font-semibold text-3xl'>Hot Topik</h1>
          <p className='mt-3 text-xl'>Pemrograman atau penataolahan adalah proses menulis, menguji dan memperbaiki (debug), dan memelihara kode yang membangun suatu program komputer.</p>
        </div>
        <div className='grid '>
          <div className='grid absolute top-24 m-7 '>
            <h1 className='font-semibold block text-4xl -mt-14  text-white'>Belajar <span className='block'>Pemrograman</span> </h1>
          </div>
          <img className='w-full rounded-xl ' src="./src/assets/img/pemrograman.jpg" alt="" />
          <div className='-mt-16 mx-8 '>
            <a className='py-4 px-9 text-white bg-[#099E8C] rounded-xl font-semibold text-2xl' href="">Diskusi</a>
          </div>
        </div>
        <div className='grid'>
          <div className='grid absolute top-24 m-7 '>
            <h1 className='font-semibold block text-4xl -mt-14  text-white'>Belajar <span className='block'>Pemrograman</span> </h1>
          </div>
          <img className='w-full rounded-xl ' src="./src/assets/img/pemrograman.jpg" alt="" />
          <div className='-mt-16 mx-8 '>
            <a className='py-4 px-9 text-white bg-[#099E8C] rounded-xl font-semibold text-2xl' href="">Diskusi</a>
          </div>
        </div>
      </div>
    </div>

  )
}


export default CardiImage;
