'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CareerMap from './test';

export default function ReactIntroPage() {
  // ==========================================
  // DECLARACIÓN DE ESTADOS (Aquí están los dos)
  // ==========================================
  // 1. inputValue: Guarda el texto puro tal cual lo teclea el usuario.
  const [inputValue, setInputValue] = useState('0.5');
  
  // 2. numA: El estado numérico que intenta seguir el ritmo (y donde ocurre la trampa).
  const [numA, setNumA] = useState('0.5');

  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState('00:00.000');
  const [logMessages, setLogMessages] = useState<string[]>([
    'System ready: Type a value in the input and click ► run to step through React asynchronous batching.'
  ]);

  // Manejador del evento de escritura
  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Actualizamos el input de texto de forma inmediata
    setInputValue(newValue);

    if (newValue === '') {
      setLogMessages(['Console cleared: Input is empty. Ready for new typing...']);
      setNumA(''); 
      return;
    }

    // La trampa: 'numA' sigue mostrando el valor del render anterior (congelado en el tiempo)
    const oldNumA = numA;
    setLogMessages(prev => [
      `User typed: "${newValue}" | numA (frozen reference in this render) was still: "${oldNumA}"`,
      ...prev.slice(0, 5)
    ]);

    // Intentamos actualizar numA, pero se encola asíncronamente
    setNumA(newValue);
  };

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setExecutionTime('00:00.000');

    setLogMessages([
      `[Step 1] Event triggered for value: "${inputValue}". Synchronous handler runs.`,
      `[Step 2] setNumA("${inputValue}") called. Request queued in React internal scheduler...`
    ]);

    let startTime = performance.now();
    let interval = setInterval(() => {
      let elapsed = performance.now() - startTime;
      let seconds = Math.floor(elapsed / 1000).toString().padStart(2, '0');
      let millis = Math.floor(elapsed % 1000).toString().padStart(3, '0');
      setExecutionTime(`${seconds}:${millis}`);

      if (elapsed > 400 && elapsed < 800) {
        setLogMessages(prev => {
          if (!prev.some(m => m.includes('Step 3'))) {
            return [
              `[Step 3] Component re-render committed. Variables updated to: "${inputValue}"`,
              ...prev
            ];
          }
          return prev;
        });
      }

      if (elapsed > 1000) { 
        clearInterval(interval);
        setIsRunning(false);
        setLogMessages(prev => [
          `[Complete] State batch successfully applied for "${inputValue}".`,
          ...prev
        ]);
      }
    }, 50);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 max-w-4xl mx-auto font-sans relative">
      
      {/* Navegación y Cabecera */}
      <div className="mb-8">
        <Link href="/" className="text-xs font-mono text-cyan-400 hover:underline">
          &larr; Back to Jop's Knowledge Arcade
        </Link>
        <div className="mt-4 inline-block bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold">
          Frontend Architecture / React State
        </div>
        <h1 className="text-4xl font-extrabold mt-3 tracking-tight">React setState & The Asynchrony Trap</h1>
        <p className="text-slate-400 text-sm mt-1">An interactive visual essay inspired by Sam Who's deep dives.</p>
      </div>

      <article className="space-y-10 text-slate-300 leading-relaxed">
        
        {/* Bloque de código con la función y los estados declarados */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4"># Declaración y Manejo de Estados Múltiples</h2>
          <p className="mb-4">
            Aquí puedes ver cómo declaramos ambos estados al inicio del componente y cómo la función interactúa con ellos:
          </p>

          <pre className="bg-[#121824] border border-slate-800 rounded-2xl p-6 font-mono text-sm text-slate-200 overflow-x-auto shadow-xl">
{`// Declaración de estados al inicio del componente
const [inputValue, setInputValue] = useState('0.5'); // Estado visual del input
const [numA, setNumA] = useState('0.5');               // Estado numérico separado (la trampa)

function handleTyping(e) {
    const newValue = e.target.value;
    setInputValue(newValue);

    // El problema: numA sigue congelado con el valor del render anterior
    console.log("Current numA in memory:", numA);

    setNumA(newValue); // Programado en la cola asíncrona de React
}`}
          </pre>
        </section>

        {/* Sección Interactiva */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl text-center">
          <p className="text-sm text-slate-400 mb-6 max-w-lg mx-auto">
            Escribe en el campo de texto y observa cómo conviven ambos estados y por qué separar la lógica del input genera desfases si intentas leer el estado inmediatamente.
          </p>

          <div className="text-3xl font-mono font-bold tracking-wider text-white mb-6">
            setNumA("<span className="text-cyan-400">{inputValue}</span>")
          </div>

          <div className="flex justify-center mb-8">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="bg-[#1a2332] hover:bg-[#232f46] border border-slate-700 text-white px-8 py-4 rounded-2xl flex items-center space-x-4 shadow-xl transition transform active:scale-95 disabled:opacity-50"
            >
              <span className="text-cyan-400 text-xl">►</span>
              <span className="font-mono text-xl tracking-widest">{executionTime}</span>
            </button>
          </div>

          {/* Input de pruebas */}
          <div className="max-w-md mx-auto text-left bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <label className="block text-xs font-mono text-slate-400 mb-2">Live Playground Input:</label>
            <input
              type="text"
              value={inputValue}
              onChange={handleTyping}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-cyan-500"
              placeholder="Type numbers..."
            />
          </div>

          {/* Logs */}
          <div className="max-w-md mx-auto mt-6 text-left">
            <div className="text-xs font-mono text-slate-400 mb-2">Render Cycle Console Log:</div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-1.5 max-h-40 overflow-y-auto">
              {logMessages.map((msg, index) => (
                <div key={index} className="text-slate-400 border-b border-slate-900 pb-1">
                  <span className="text-cyan-500 mr-2">&gt;</span> {msg}
                </div>
              ))}
            </div>
          </div>
        </section>

      </article>

      <CareerMap />
    </main>
  );
}