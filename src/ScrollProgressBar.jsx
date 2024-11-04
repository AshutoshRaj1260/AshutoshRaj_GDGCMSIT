import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBar, setShowBar] = useState(false);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);

    if (window.scrollY > 0) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showBar && (
        <div className="fixed top-0 left-0 inset-0 w-full h-[8px] z-50">
          <div
            className="h-full bg-gradient-to-r from-color9 via-color10 to-color11 rounded-xl"
            style={{
              width: `${scrollProgress}%`,
              transition: 'width 0.4s ease-out',
            }}
          ></div>
        </div>
      )
  );
};

export default ScrollProgressBar;
