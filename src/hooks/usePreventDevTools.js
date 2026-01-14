import { useEffect } from 'react';

const usePreventDevTools = () => {
  // useEffect hook استعمال کیا
  useEffect(() => {
    // Right-click روکنے کے لیے function
    const preventRightClick = (e) => e.preventDefault();
    
    // Developer tools shortcuts روکنے کے لیے function
    const preventDevTools = (e) => {
      const key = e.key.toLowerCase();
      if (
        (e.ctrlKey && e.shiftKey && (key === "i" || key === "j")) || 
        (e.ctrlKey && key === "u") || 
        key === "f12"
      ) {
        e.preventDefault();
      }
    };

    // Event listeners add کیے
    document.addEventListener("contextmenu", preventRightClick);
    document.addEventListener("keydown", preventDevTools);

    // Cleanup function - event listeners remove کرتا ہے
    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
      document.removeEventListener("keydown", preventDevTools);
    };
  }, []); // Empty dependency array - صرف ایک بار run ہوگا
};

export default usePreventDevTools;