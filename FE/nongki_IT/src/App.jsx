import Explore from './components/blog/Explore'
import Rekomendasi from './components/blog/Rekomendasi'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='bg-[#011630] max-h-full'>
      <Navbar />
      <div className='container-fluid mx-28 '>

        <div className='mt-28'>
          <h1 className='text-8xl text-white text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-600 to-orange-500'>Dokumentasi <span className='block mt-5'> Tempat Nongki Anak IT </span> </h1>
        </div>

        <div className='mx-96 mt-14 '>
          <input type="text" placeholder='Cari bahan nongki...' className='w-full py-4 px-8 rounded-full  placeholder:text-[#787373] placeholder:text-1xl' />
        </div>

        <div className='mt-28'>
          <div className='items-center justify-center bg-[#132144] rounded-xl shadow-xl'>
            <div className='mt-8'>
              <div className='grid grid-cols-3 -gap-10'>
                <div className='mt-20 mx-12'>
                  <h1 className=' font-semibold text-3xl text-white'>Hot Topik</h1>
                  <p className='text-white font-semibold mt-5 '>Pemrograman atau penataolahan adalah proses menulis, menguji dan memperbaiki (debug), dan memelihara kode yang membangun suatu program komputer.</p>
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
