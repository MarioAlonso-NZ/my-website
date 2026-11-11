"use client";
import { useState } from 'react';
import BaseMoon from './BaseMoon';

export default function Planet({ data }: { data: any }) {
  const [completedBases, setCompletedBases] = useState<boolean[]>(
    new Array(data.bases).fill(false)
  );

  const toggleBase = (index: number) => {
    const newCompleted = [...completedBases];
    newCompleted[index] = !newCompleted[index];
    setCompletedBases(newCompleted);
  };

  return (
    <div className={`absolute ${data.position} flex flex-col items-center`}>
      <div className={`w-48 h-48 rounded-full ${data.bg} ${data.glow} border border-white/20 flex items-center justify-center z-10`}>
        <span className="text-xl font-bold text-white">{data.name}</span>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: data.bases }).map((_, i) => {
          const angle = (i / data.bases) * 2 * Math.PI;
          
          // ROUND THE NUMBERS HERE TO PREVENT HYDRATION MISMATCH
          const x = Math.round(Math.cos(angle) * 100); 
          const y = Math.round(Math.sin(angle) * 100);
          
          return (
            <BaseMoon 
              key={i}
              style={{ left: `calc(50% + ${x}px - 16px)`, top: `calc(50% + ${y}px - 16px)` }}
              isCompleted={completedBases[i]}
              onClick={() => toggleBase(i)}
            />
          );
        })}
      </div>
    </div>
  );
}