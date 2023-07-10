import Explore from './components/blog/Explore'
import Rekomendasi from './components/blog/Rekomendasi'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='bg-[#011630] max-h-full'>
      <Navbar />
      <div className='mx-28 '>

        <div className='mt-28'>
          <h1 className='text-8xl text-white text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-600 to-orange-500'>Dokumentasi <span className='block mt-5'> Tempat Nongki Anak IT </span> </h1>
        </div>

        <div className='mx-96 mt-14 flex justify-center items-center'>
          <input type="text" placeholder='Cari bahan nongki...' className='w-full py-4 px-8 rounded-full -mx-12 placeholder:text-[#787373] placeholder:text-1xl' />
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search text-[#787373]" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>

        <div className='mt-28'>
          <div className='items-center justify-center bg-[#132144] rounded-xl shadow-xl'>
            <div className='mt-8'>
              <div className='grid grid-cols-3 -gap-10'>
                <div className='mt-20 mx-12'>
                  <h1 className=' font-semibold text-3xl text-white'>Hot Topik</h1>
                  <p className='text-white font-semibold mt-5 '>Pemrograman atau penataolahan adalah proses menulis, menguji dan memperbaiki (debug), dan memelihara kode yang membangun suatu program komputer.</p>

                  <div className='flex gap-2 mt-64'>
                    <div className='bg-slate-400 py-2 px-2 rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left font-semibold" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </div>

                    <div className='bg-slate-400 py-2 px-2 rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right " viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <div className='p-5'>
                  <div className='absolute'>
                    <div className='mx-7 text-5xl mt-12'>
                      <h1 className='font-semibold text-white '>Belajar <span className='block'>Pemrograman</span> </h1>
                    </div>
                    <div className='mt-80 mx-7'>
                      <a href="#" className='bg-[#099E8C] text-white py-4 px-8 rounded-xl font-semibold text-2xl'> Diskusi</a>
                    </div>
                  </div>
                  <img className='rounded-xl' width={1000} src="./src/assets/img/pemrograman.jpg" alt="" />
                </div>
                <div className='p-5'>
                  <div className='absolute'>
                    <div className='mx-7 text-5xl mt-12'>
                      <h1 className='font-semibold text-white '>Belajar <span className='block'>Pemrograman</span> </h1>
                    </div>
                    <div className='mt-80 mx-7'>
                      <a href="#" className='bg-[#099E8C] text-white py-4 px-8 rounded-xl font-semibold text-2xl'> Diskusi</a>
                    </div>
                  </div>
                  <img className='rounded-xl ' width={1000} src="./src/assets/img/pemrograman.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Rekomendasi />
        <Explore />
      </div>
    </div>
  )
}

export default App
