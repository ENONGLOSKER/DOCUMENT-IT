import React, { useState } from 'react'

function CardRekomendasi() {

    const [cards, setCard] = useState([
        {
            id: 1,
            name: "Belajar Pemrograman",
            title: "Python"
        },
        {
            id: 2,
            name: "Belajar Pemrograman",
            title: "Javascript"
        },
        {
            id: 3,
            name: "Belajar Pemrograman",
            title: "Java"
        },
    ])

    return (
        <div className='mt-5'>
            <div className='grid grid-cols-3 gap-4'>

                {cards.map((card, x) => (

                    <div key={x} className='relative'>
                        <div className='absolute bottom-20 left-7'>
                            <div>
                                <h1 className='text-4xl font-semibold text-white'>{card.name}</h1>
                            </div>
                            <div className='mt-3 '>
                                <a href="#" className='text-white font-semibold bg-red-500 py-2 px-5 rounded-full'>{card.title}</a>
                            </div>
                        </div>
                        <img className='w-full rounded-xl' src="./src/assets/img/pemrograman.jpg" alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardRekomendasi;