import { useState, useEffect } from 'react';
export default function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(20px);
            }
          }

          .scroll-top-enter {
            animation: fadeIn 0.3s ease-out forwards;
          }

          .scroll-top-exit {
            animation: fadeOut 0.3s ease-out forwards;
          }
        `}
      </style>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 sm:right-6 z-40 bg-blue-600 text-white p-2 sm:p-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 scroll-top-enter cursor-pointer"
          style={{
            bottom: '20px',
            transition: 'bottom 0.2s ease-out'
          }}
          aria-label="اوپر جائیں"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}