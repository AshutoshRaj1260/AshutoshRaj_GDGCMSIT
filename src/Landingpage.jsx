import React from 'react'
import { Typed } from 'react-typed';
import Typical from 'react-typical';
import Navbar from './Navbar'
import './App.css'

function Landingpage({mode}) {
    return (
        <div className={`w-full h-screen mt-28 font-sans ${mode==='light'? 'bg-white' : 'bg-color14'}`}>
            <div className='flex'>
                <div className='w-1/2 '>
                    <img className={`relative h-[25rem] top-48 left-56 border-solid border-8 rounded-3xl ${mode==='light'? 'border-color2' : 'border-red-600'}`} src="https://i.ibb.co/88Qnjxg/pexels-josh-hild-2422259.jpg" alt="" />
                    <img className={`relative h-40 left-[29rem] -top-11 border-solid border-8 rounded-3xl ${mode==='light'? 'border-color2' : 'border-red-600'}` } src="https://i.ibb.co/w4Jqjdf/pexels-andrei-tanase-1271619.jpg" alt="" />
                </div>
                <div className='w-1/2'>
                    <div className={`relative ${mode==='light'? 'text-color3' : 'text-white'} mt-48 text-5xl font-bold text-end right-72 leading-snug tracking-tight`}>
                        Find Your Perfect <br /> Getaway <br />
                        Discover the <br /> World's Best Kept
                    </div>

                        <div className={`w-[56.5vh] flex justify-end text-5xl font-bold text-color2 ${mode==='light'? 'text-color2' : 'text-red-600'} typing-wrapper`}>
                            <Typical
                                steps={['Wonders', 3000, 'Secrets', 3000, 'Gems', 3000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </div>
                        <div className={`w-fit text-center tracking-tight font-light ${mode==='light'? 'text-color3' : 'text-white'}`}>
                            Make your travel more enjoyable with us. We are the best travel agency and <br /> we are providing the best travel services for our clients.
                        </div>

                        <div className='relative right-10 top-2 w-5/6 flex gap-1 items-center justify-center'>
                            {["Membership", "Plan a Trip", "Book Now"].map((item, index) => (
                                <a key={index} className={`bg-color2 shadow-[3px_3px_10px_red] rounded px-5 py-3 text-sm font-bold text-white`} href="">{item}</a>
                            ))}
                        </div>

                        <div className='relative top-8 left-[17rem] '>
                            <img className='shadow-[3px_3px_10px_blue] rounded-full w-[60px] h-[60px]' src="https://i.ibb.co/KwHd8PQ/pexels-stijn-dijkstra-2499699.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
            )
}

            export default Landingpage