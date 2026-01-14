import { useState, useEffect, useRef } from 'react';

export default function MouseTrail({ enabled = true }) {
  const [trails, setTrails] = useState([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    if (!enabled) {
      setTrails([]);
      return;
    }

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop for creating trails
    const createTrail = () => {
      const { x, y } = mousePosition.current;
      
      if (x > 0 && y > 0) {
        const newTrail = {
          id: Date.now() + Math.random(),
          x,
          y,
        };
        
        setTrails((prev) => {
          const updated = [...prev, newTrail];
          return updated.slice(-12); // Keep only last 12 trails
        });
      }
      
      animationFrameId.current = requestAnimationFrame(createTrail);
    };

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(createTrail);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <style>
        {`
          .trail-dot {
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: rgba(0, 255, 0, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            animation: fadeOut 1s ease-out forwards;
          }
          
          @keyframes fadeOut {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0;
            }
          }
        `}
      </style>
      
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="trail-dot"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
          }}
        />
      ))}
    </>
  );
}