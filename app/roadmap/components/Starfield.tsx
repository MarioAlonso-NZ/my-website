"use client";

export default function Starfield() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Space Nebula */}
      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.15)_0%,_transparent_50%),_radial-gradient(circle_at_80%_70%,_rgba(139,92,246,0.15)_0%,_transparent_50%)] animate-pulse-slow" />
      
      {/* Twinkling Stars Layer 1 (Small) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-twinkle" />
      
      {/* Twinkling Stars Layer 2 (Medium) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 scale-150 animate-twinkle-delayed" />
    </div>
  );
}