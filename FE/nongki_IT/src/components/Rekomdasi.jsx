import React from 'react'

function Rekomdasi() {
    return (
        <div className='text-center text-7xl items-center justify-center font-bold pt-10 text-white mt-14 '>
            <p className='leading-relaxed bg-gradient-to-r from-teal-400 via-green-600 to-blue-900 inline text-transparent bg-clip-text'>Dokumentasi</p>
            <div className='-mt-5'>
                <p className='font-bold bg-gradient-to-r from-teal-400 via-green-600 to-blue-900 inline text-transparent bg-clip-text '>Tempat Nongki Anak IT</p>
            </div>
            <div className='text-sm mt-14 '>
                <input className='py-4 px-40 rounded-full text-start' type="search" placeholder='Cari bahan nongki....' />
                {/* <div className='items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search bg-blue-100 text-black" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div> */}
            </div>
        </div>

    )
}

export default Rekomdasi;