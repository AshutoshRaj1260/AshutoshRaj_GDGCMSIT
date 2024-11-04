import React from 'react'

function About() {
  return (
    <div className="h-screen w-screen flex justify-center ">
        <div className='relative h-[60%] w-[58%] rounded-lg top-60 bg-gradient-to-r from-blue-300 to-blue-100'>
            <div className='w-full flex flex-col items-center'>
                <b className='font-black text-4xl mt-12'>About Us</b>
                <iframe className='mt-7 h-[265px] w-[700px] rounded-xl' src="https://www.youtube.com/embed/veULUjsSrPg?si=eq3sDAt3-yZnZUme" allowfullscreen=""></iframe>
                <p className='bg-white rounded-xl p-6 font-light'>Welcome to TourGuide, your trusted companion in discovering the wonders of the world. We provide <br /> unparalleled assistance, offering curated itineraries, local guides, and unforgettable experiences tailored <br /> just for you. Join our growing community and let your journey become a story worth sharing!</p>
            </div>
        </div>
        
    </div>
  )
}

export default About