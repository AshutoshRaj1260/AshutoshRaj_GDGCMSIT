import React, { useState, useEffect } from 'react';
import night from './assets/night.png';

function Navbar({mode,setmode}) {

  const toggle_mode= ()=>{
    mode === 'light'?setmode('dark'):setmode('light');
}

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-[calc(100%-)] px-2 py-8 flex justify-between items-center bg-color1 text-white h-24 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'top-2 left-2 right-2 shadow-lg rounded-xl bg-gradient-to-b from-color12 to-color13' : 'top-0 left-0 right-0'
      }`}
      style={scrolled ? { right: '2px' } : { right: '0' }}
    >
      <div className='w-10 flex items-center'>
        <img
          src='https://monumental-tiramisu-5c86ef.netlify.app/favicon.ico'
          alt=''
        />
        <span className='tourguide-text text-3xl font-semibold'>Tourguide</span>
      </div>
      <div className='links flex gap-10 items-center'>
        {[
          'Home',
          'About',
          'Services',
          'Top Deals',
          'Packages',
          'Testimonial',
          'Rate Us?',
          'Contact Us',
          'Login/SignUp',
        ].map((item, index) => (
          <a
            key={index}
            className={` font-san text-sm  ${
              index === 8
                ? ' bg-color2 login-button px-8 py-3 rounded-3xl font-light tracking-widest hover:bg-red-600 transition'
                : 'font-semibold bg-transparent'
            } , ${index===8 && mode==='light'? 'bg-color2' : 'bg-red-600'}`}
            href=''
          >
            {item}
          </a>
        ))}
        <div className='ml-14'>
          <img onClick={()=>{toggle_mode()}} className='cursor-pointer w-12' src={night} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
