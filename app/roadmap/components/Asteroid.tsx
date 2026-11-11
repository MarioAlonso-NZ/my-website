"use client";
import { useState, useEffect } from "react";

export default function Asteroid() {
  // Default position to avoid hydration mismatch
  const [topPosition, setTopPosition] = useState("10%");

  // On the client side, pick a random starting height (between 5% and 40% of the screen)
  useEffect(() => {
    const randomTop = Math.floor(Math.random() * 35) + 5;
    setTopPosition(`${randomTop}%`);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fly-across {
          0% { 
            transform: translate(0, 0); 
            opacity: 0;
          }
          5% { 
            opacity: 1; /* Fade in quickly */
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            transform: translate(-130vw, 80vh); 
            opacity: 0; /* Fade out at the end */
          }
        }
      `}</style>
      
      <div 
        className="absolute text-4xl z-40 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
        style={{
          animation: 'fly-across 15s linear infinite',
          top: topPosition,
          right: '-10%', // Start off-screen
          // Rotate the rocket so it points towards the bottom-left
          transform: 'rotate(-135deg)', 
        }}
      >
        ☄️
      </div>
    </>
  );
}