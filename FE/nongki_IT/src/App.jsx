import Explore from './components/blog/Explore'
import Rekomendasi from './components/blog/Rekomendasi'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='bg-[#011630] max-h-full'>
      <Navbar />
      <div className='container-fluid mx-28 '>

        <div className='mt-28'>
          <h1 className='text-8xl text-white text-center font-bold'>Dokumentasi <span className='block mt-5'> Tempat Nongki Anak IT </span> </h1>
        </div>
        
        <div className='items-center justify-center text-center mt-20 '>
          <input type="text" placeholder='alfin mardani' className='px-3 py-5 w-96 rounded-full' />
        </div>

        <div className='items-center justify-center bg-[#132144] rounded-xl shadow-xl'>
          <div className='mt-8'>
            <div className='grid grid-cols-3 -gap-10'>
              <div className='mt-20 mx-12'>
                <h1 className=' font-semibold text-3xl text-white'>Hot Topik</h1>
                <p className='text-white font-semibold mt-5 '>Pemrograman atau penataolahan adalah proses menulis, menguji dan memperbaiki (debug), dan memelihara kode yang membangun suatu program komputer.</p>
              </div>
              <div className='p-5'>
                <div className='absolute mx-7 text-5xl mt-12'>
                  <h1 className='font-semibold text-white '>Belajar <span className='block'>Pemrograman</span> </h1>
                </div>
                <img className='rounded-xl' width={1000} src="./src/assets/img/pemrograman.jpg" alt="" />
              </div>
              <div className='p-5'>
                <div className='absolute mx-7 text-5xl mt-12'>
                  <h1 className='font-semibold text-white '>Belajar <span className='block'>Pemrograman</span> </h1>
                </div>
                <img className='rounded-xl ' width={1000} src="./src/assets/img/pemrograman.jpg" alt="" />
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
