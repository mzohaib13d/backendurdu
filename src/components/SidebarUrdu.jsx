import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Home, BookOpen } from "lucide-react";

export default function SidebarUrdu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Auto close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 70;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) setIsOpen(false);
    if (distance < -minSwipeDistance) setIsOpen(true);
  };

  const linkClass = ({ isActive }) =>
    `flex flex-row-reverse items-center gap-3 px-4 py-3 rounded-xl
     transition text-sm md:text-base text-right
     ${
       isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"
     }`;

  // CSS for the Glowing Orb animation + NEW HEADER ANIMATION
  const animationStyles = `
    .orb-container {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 45px;
      height: 45px;
      pointer-events: none;
      z-index: 10;
      filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.15));
    }
    
    .glowing-orb {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: 
        pulseGlow 2.5s ease-in-out infinite,
        colorShift 7s linear infinite;
      box-shadow: 
        0 0 25px rgba(102, 126, 234, 0.7),
        0 0 45px rgba(118, 75, 162, 0.5),
        inset 0 0 12px rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .orb-sparkle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: white;
      top: 50%;
      left: 50%;
      animation: sparkleMove 2.5s linear infinite;
      opacity: 0;
    }
    
    @keyframes pulseGlow {
      0%, 100% { 
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 
          0 0 25px rgba(102, 126, 234, 0.7),
          0 0 45px rgba(118, 75, 162, 0.5),
          inset 0 0 12px rgba(255, 255, 255, 0.4);
      }
      50% { 
        transform: translate(-50%, -50%) scale(1.15);
        box-shadow: 
          0 0 35px rgba(102, 126, 234, 0.9),
          0 0 65px rgba(118, 75, 162, 0.7),
          inset 0 0 18px rgba(255, 255, 255, 0.6);
      }
    }
    
    @keyframes colorShift {
      0% { 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        filter: hue-rotate(0deg) brightness(1.1);
      }
      25% { 
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }
      50% { 
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }
      75% { 
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }
      100% { 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        filter: hue-rotate(360deg) brightness(1.1);
      }
    }
    
    @keyframes sparkleMove {
      0% {
        transform: translate(-50%, -50%) rotate(0deg) translateX(22px) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      40% {
        opacity: 0.7;
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg) translateX(22px) rotate(-360deg);
        opacity: 0;
      }
    }
    
    /* NEW HEADER ANIMATION CSS - ADAPTED FOR SIDEBAR */
    .sidebar-header {
      position: relative;
      font-size: 20px;
      font-weight: bold;
      background: linear-gradient(
        to right,
        #ff7e5f,
        #feb47b,
        #00c6ff
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      padding: 12px 24px;
      margin: 0;
      display: inline-block;
      transition: background 0.3s ease;
      cursor: pointer;
      border-radius: 10px;
      width: fit-content;
      text-align: right;
      direction: rtl;
      line-height: 1.5;
      overflow: visible;
    }
    
    .sidebar-header-wrapper {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      width: fit-content;
    }
    
    .sidebar-header-border {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 12px;
      padding: 2px;
      background: linear-gradient(45deg, #ff7e5f, #feb47b, #00c6ff);
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: rotateBorder 3s linear infinite;
    }
    
    @keyframes rotateBorder {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
    
    .sidebar-header span:nth-child(1) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, #0c002b, #1779ff);
      animation: anim1 2s linear infinite;
    }
    
    @keyframes anim1 {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    .sidebar-header span:nth-child(2) {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 2px;
      height: 100%;
      background: linear-gradient(to bottom, #0c002b, #1779ff);
      animation: anim2 2s linear infinite;
      animation-delay: 1s;
    }
    
    @keyframes anim2 {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(100%);
      }
    }
    
    .sidebar-header span:nth-child(3) {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: linear-gradient(to left, #0c002b, #1779ff);
      animation: anim3 2s linear infinite;
    }
    
    @keyframes anim3 {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    
    .sidebar-header span:nth-child(4) {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 2px;
      height: 100%;
      background: linear-gradient(to top, #0c002b, #1779ff);
      animation: anim4 2s linear infinite;
      animation-delay: 1s;
    }
    
    @keyframes anim4 {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(-100%);
      }
    }
    
    .sidebar-header:hover {
      background: linear-gradient(to right, #8e44ad, #3498db, #1abc9c);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    
    .sidebar-header-wrapper:hover .sidebar-header-border {
      background: linear-gradient(45deg, #8e44ad, #3498db, #1abc9c);
      animation: rotateBorder 1s linear infinite;
    }
  `;

  const sparkleCount = 5;

  return (
    <>
      {/* Add animation styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* Hamburger Button - NOW VISIBLE ON BOTH MOBILE AND DESKTOP */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all cursor-pointer"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay with Blur - Works on BOTH mobile and desktop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
        />
      )}

      {/* Sidebar - Now starts HIDDEN on both mobile and desktop */}
      <aside
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`
          fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-out
          flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          border-l border-gray-200
        `}
      >
        {/* Glowing Orb Animation */}
        <div className="orb-container">
          <div className="glowing-orb">
            {[...Array(sparkleCount)].map((_, i) => (
              <div
                key={i}
                className="orb-sparkle"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>
        </div>

        {/* Sidebar Header with ANIMATION */}
        <div className="flex flex-row-reverse items-center justify-between p-1 border-b border-gray-200 relative">
          <div className="sidebar-header-wrapper">
            <div className="sidebar-header-border"></div>
            <h2 className="sidebar-header relative">
              {/* Animated border spans */}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              
              {/* Header text */}
              اردو سائیڈبار 📘
              <br />
              <span style={{ fontSize: '14px', display: 'block', marginTop: '4px' }}>
                زوہیب فاروق
              </span>
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-51.5 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer bg-white p-1.5 rounded-full shadow-md z-[60]"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links - Each closes sidebar when clicked */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-2">
            <NavLink 
              to="/" 
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 1 – کلاس 1 / ہوم</span>
              <Home size={18} />
            </NavLink>

            <NavLink 
              to="/week1class2" 
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 1 – کلاس 2</span>
              <BookOpen size={18} />
            </NavLink>

            <NavLink 
              to="/week2class1" 
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 2 – کلاس 1</span>
              <BookOpen size={18} />
            </NavLink>

            <NavLink 
              to="/week2class2" 
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 2 – کلاس 2</span>
              <BookOpen size={18} />
            </NavLink>

            <NavLink 
              to="/week3class1" 
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 3 – کلاس 1</span>
              <BookOpen size={18} />
            </NavLink>

            <NavLink 
              to="/week3class2" 
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 3 – کلاس 2</span>
              <BookOpen size={18} />
            </NavLink>

            <NavLink 
              to="/week4class1" 
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 4 – کلاس 1</span>
              <BookOpen size={18} />
            </NavLink>
            <NavLink 
              to="/week4class2" 
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 4 – کلاس 2</span>
              <BookOpen size={18} />
            </NavLink>
            <NavLink
              to="/week5class1"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 5 – کلاس 1</span>
              <BookOpen size={18} />
            </NavLink>
            <NavLink
              to="/week5class2"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 5 – کلاس 2</span>
              <BookOpen size={18} />
            </NavLink>
            <NavLink
              to="/week6class1"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 6 – کلاس 1</span>
              <BookOpen size={18} />
            </NavLink>
            <NavLink
              to="/week6class2"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 6 – کلاس 2</span>
              <BookOpen size={18} />
            </NavLink>
            <NavLink
              to="/week7class1"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 7 – کلاس 1</span>
              <BookOpen size={18} />
            </NavLink>
            <NavLink
              to="/week7class2"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 7 – کلاس 2</span>
              <BookOpen size={18} />
            </NavLink>
            <NavLink
              to="/week8class1"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 8 – کلاس 1</span>
              <BookOpen size={18} />
            </NavLink>
            <NavLink
              to="/week8class2"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              <span>ہفتہ 8 – کلاس 2</span>
              <BookOpen size={18} />
            </NavLink>
          </div>
        </nav>

        {/* Footer - Moved inside the sidebar */}
        <div className="p-4 text-center text-xs text-gray-500 border-t border-gray-200 bg-gray-50 mt-auto">
          <p>اردو کورس زوہیب فاروق</p>
          <p className="mt-1">تمام حقوق محفوظ ہیں © 2026</p>
        </div>
      </aside>
    </>
  );
}