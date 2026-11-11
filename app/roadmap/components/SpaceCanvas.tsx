// components/SpaceCanvas.tsx
"use client";
import { useState } from 'react';
import { PLANETS } from '../data/planets';
import Planet from './Planet';
import Spaceship from './Spaceship';
import Alien from './Alien';
import Starfield from './Starfield';
import QuestionDialog from './QuestionDialog';

export default function SpaceCanvas() {
  const [isAlienAsking, setIsAlienAsking] = useState(false);
  const [isAlienLeaving, setIsAlienLeaving] = useState(false);
  const [question, setQuestion] = useState("");

  const triggerAlienEncounter = async () => {
    try {
      // Fetch the mock question from our Next.js API
      const res = await fetch('roadmap/api/mock-question');
      const data = await res.json();
      setQuestion(data.question);
      setIsAlienAsking(true);
    } catch (error) {
      console.error("Failed to load question");
    }
  };

  const handleCloseDialog = () => {
    setIsAlienAsking(false);
    setIsAlienLeaving(true); // Tell the alien to fly away
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Starfield />
      
      <Spaceship />
      
      {/* The Alien Component */}
      <Alien 
        onAskQuestion={triggerAlienEncounter} 
        isLeaving={isAlienLeaving} 
      />
      
      {PLANETS.map(planet => (
        <Planet key={planet.id} data={planet} />
      ))}

      {/* The Question Modal */}
      {isAlienAsking && (
        <QuestionDialog 
          question={question} 
          onClose={handleCloseDialog} 
        />
      )}
    </div>
  );
}