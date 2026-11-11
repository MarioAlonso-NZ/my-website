import React, { useState } from 'react';

const aiRoute = [
  { id: 1, title: "Fundamentos IA", time: "Meses 1-2", desc: "Comportamiento de LLMs, Tokens, Ventana de contexto, Temperatura y mitigación de alucinaciones." },
  { id: 2, title: "Construir (RAG)", time: "Meses 3-5", desc: "Python, APIs, Embeddings, Bases de Datos Vectoriales (PgVector/Pinecone) y LangChain." },
  { id: 3, title: "LLMs por Dentro", time: "Meses 6-8", desc: "Arquitectura Transformer, Pre-entrenamiento, RLHF, y comprensión de parámetros/cuantización." },
  { id: 4, title: "Especialización", time: "Meses 9-11", desc: "Decisiones arquitectónicas: Prompting vs RAG vs Fine-tuning (LoRA/PEFT) y Benchmarks." },
];

const mlRoute = [
  { id: 1, title: "Ideas Bases", time: "Meses 1-2", desc: "Aprendizaje supervisado vs reglas, Train/Test split, métricas de Precisión/Recall y Árboles de decisión." },
  { id: 2, title: "Preparar Datos", time: "Meses 3-5", desc: "SQL Joins, limpieza con Pandas, Feature Engineering, EDA y prevención de fuga de datos." },
  { id: 3, title: "Producción (MLOps)", time: "Meses 6-8", desc: "Despliegue de APIs, control de Data Drift, CI/CD para modelos y monitoreo de IA responsable." },
];

export default function CareerMap() {
  const [activePath, setActivePath] = useState('AI');
  const [activeNodeId, setActiveNodeId] = useState(1);

  const currentData = activePath === 'AI' ? aiRoute : mlRoute;

  const handleTabSwitch = (path: any) => {
    setActivePath(path);
    setActiveNodeId(1); // Reset avatar to the start of the new path
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans text-slate-800 flex flex-col items-center">
      
      {/* Header & Tabs */}
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Elige tu Aventura en IA</h1>
        <div className="flex justify-center gap-4 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
          <button 
            onClick={() => handleTabSwitch('AI')}
            className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all ${activePath === 'AI' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            AI Engineer
          </button>
          <button 
            onClick={() => handleTabSwitch('ML')}
            className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all ${activePath === 'ML' ? 'bg-green-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            Machine Learning Engineer
          </button>
        </div>
      </div>

      {/* Zig-Zag Map Container */}
      <div className="relative w-full max-w-4xl mx-auto py-10">
        
        {/* Central Dotted Line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 border-l-4 border-dashed border-slate-300 z-0"></div>

        {/* Checkpoints */}
        {currentData.map((checkpoint, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeNodeId === checkpoint.id;

          return (
            <div key={checkpoint.id} className={`relative flex w-full items-center justify-between mb-16 z-10 ${isLeft ? 'flex-row-reverse' : ''}`}>
              
              {/* Empty Space for the alternating layout */}
              <div className="w-5/12"></div>
              
              {/* Center Checkpoint Node */}
              <div className="w-2/12 flex justify-center relative">
                <button 
                  onClick={() => setActiveNodeId(checkpoint.id)}
                  className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-110
                    ${isActive ? (activePath === 'AI' ? 'bg-blue-500 border-white' : 'bg-green-500 border-white') : 'bg-white border-slate-300'}`}
                >
                  {/* The Avatar / Character */}
                  {isActive && (
                    <div className="absolute -top-10 text-4xl animate-bounce drop-shadow-md">
                      🐈
                    </div>
                  )}
                  {/* Flag icon when not active */}
                  {!isActive && (
                    <span className="text-slate-400 text-sm">🚩</span>
                  )}
                </button>
              </div>

              {/* Information Card */}
              <div className={`w-5/12 flex ${isLeft ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                <div 
                  onClick={() => setActiveNodeId(checkpoint.id)}
                  className={`bg-white p-6 rounded-xl shadow-md border-2 transition-all cursor-pointer hover:shadow-lg w-full max-w-sm
                    ${isActive ? (activePath === 'AI' ? 'border-blue-400' : 'border-green-400') : 'border-slate-100 hover:border-slate-300'}`}
                >
                  <span className={`text-xs font-extrabold uppercase tracking-wider mb-2 block 
                    ${activePath === 'AI' ? 'text-blue-600' : 'text-green-600'}`}
                  >
                    {checkpoint.time}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{checkpoint.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{checkpoint.desc}</p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
      
    </div>
  );
}