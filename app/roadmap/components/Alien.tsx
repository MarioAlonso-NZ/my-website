"use client";
import { useState, useEffect } from "react";

// Helper to generate random points
const generateFlightPlan = () => {
  const edge = Math.floor(Math.random() * 4);
  let startX, startY;
  if (edge === 0) { startX = Math.random() * 100; startY = -20; }      
  else if (edge === 1) { startX = 120; startY = Math.random() * 100; } 
  else if (edge === 2) { startX = Math.random() * 100; startY = 120; } 
  else { startX = -20; startY = Math.random() * 100; }                 

  const wander1 = { top: 30 + Math.random() * 40, left: 40 + Math.random() * 40 };
  const wander2 = { top: 20 + Math.random() * 60, left: 30 + Math.random() * 60 };
  const finalApproach = { top: 45 + Math.random() * 10, left: 25 + Math.random() * 10 };

  return [
    { top: startY, left: startX, duration: 0 },          
    { ...wander1, duration: 3000 },                      
    { ...wander2, duration: 4000 },                      
    { ...finalApproach, duration: 5000 }                 
  ];
};

export default function Alien({ onAskQuestion, isLeaving }: { onAskQuestion: () => void, isLeaving: boolean }) {
  const [phase, setPhase] = useState<'traveling' | 'arrived' | 'leaving' | 'gone'>('traveling');
  const [currentPoint, setCurrentPoint] = useState(0);
  const [flightPlan, setFlightPlan] = useState<any[]>([]);

  // Initialize
  useEffect(() => {
    setFlightPlan(generateFlightPlan());
    setTimeout(() => setCurrentPoint(1), 500);
  }, []);

  // Handle travel progression
  useEffect(() => {
    if (phase === 'traveling' && currentPoint > 0 && currentPoint < flightPlan.length) {
      const timer = setTimeout(() => {
        if (currentPoint === flightPlan.length - 1) {
          setPhase('arrived'); // Reached the ship
          onAskQuestion();     // Trigger the modal
        }
        setCurrentPoint(prev => prev + 1);
      }, flightPlan[currentPoint].duration);
      return () => clearTimeout(timer);
    }
  }, [currentPoint, flightPlan, phase, onAskQuestion]);

  // Handle leaving (when dialog closes)
  useEffect(() => {
    if (isLeaving && phase === 'arrived') {
      setPhase('leaving');
      // Pick a new random escape point
      const escapeEdge = Math.floor(Math.random() * 4);
      let escapeX = escapeEdge === 1 ? 120 : escapeEdge === 3 ? -20 : 50;
      let escapeY = escapeEdge === 0 ? -20 : escapeEdge === 2 ? 120 : 50;
      
      setFlightPlan(prev => [...prev, { top: escapeY, left: escapeX, duration: 2000 }]);
      setCurrentPoint(flightPlan.length); // Move to escape point

      // After escape animation finishes, unmount
      setTimeout(() => setPhase('gone'), 2500);
    }
  }, [isLeaving, phase, flightPlan.length]);

  if (phase === 'gone' || flightPlan.length === 0) return null;

  const activePoint = flightPlan[Math.min(currentPoint, flightPlan.length - 1)];
  
  // Determine which emoji to show
  let emoji = "🛸";
  if (phase === 'arrived') emoji = "👽";
  
  // Make the UFO spin while traveling, but stop when arrived
  const rotation = phase === 'traveling' || phase === 'leaving' ? 'rotate(10deg)' : 'rotate(0deg)';

  return (
    <div
      className={`absolute z-40 text-5xl transition-all ease-in-out ${
        phase === 'arrived' ? "animate-float" : ""
      }`}
      style={{
        top: `${activePoint.top}%`,
        left: `${activePoint.left}%`,
        transform: `translate(-50%, -50%) ${rotation}`,
        transitionDuration: `${activePoint.duration}ms`,
        filter: phase === 'arrived' 
          ? "drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))" 
          : "drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))",
      }}
    >
      {emoji}
    </div>
  );
}