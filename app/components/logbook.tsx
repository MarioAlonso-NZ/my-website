"use client";

import React, { useState, useEffect } from "react";

// Define the shape of our data
type DiaryEntry = {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
};

export default function Logbook() {
  // 1. State for the form inputs
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Python");
  const [content, setContent] = useState("");

  // 2. State to hold all the entries
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  // 3. Load entries from LocalStorage when the component mounts
  useEffect(() => {
    const savedEntries = localStorage.getItem("knowledge_diary_entries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // 4. Save entries to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem("knowledge_diary_entries", JSON.stringify(entries));
  }, [entries]);

  // 5. Handle form submission
  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    
    if (!title.trim() || !content.trim()) return; // Basic validation

    const newEntry: DiaryEntry = {
      id: Date.now().toString(), // Simple unique ID
      title,
      category,
      content,
      date: new Date().toLocaleDateString("es-MX", {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
      }),
    };

    // Add new entry to the top of the list
    setEntries([newEntry, ...entries]);

    // Clear the form
    setTitle("");
    setContent("");
  };

  // 6. Handle deleting an entry
  const handleDelete = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">📓 Mi Diario de Conocimiento</h2>

      {/* THE FORM */}
      <form onSubmit={handleAddEntry} className="space-y-4 mb-10 bg-slate-950 p-6 rounded-xl border border-slate-800">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Título (ej. Variables en Python)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
          >
            <option value="Python">Python</option>
            <option value="AWS">AWS</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Notes">Notes</option>
          </select>
        </div>
        
        <textarea
          placeholder="¿Qué aprendiste hoy? Escribe tus notas aquí..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={3}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
          required
        />
        
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Guardar Nota
        </button>
      </form>

      {/* THE DISPLAY LIST */}
      <div className="space-y-4">
        {entries.length === 0 ? (
          <p className="text-slate-500 italic text-center">No hay notas todavía. ¡Escribe tu primera lección!</p>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="bg-slate-950 border border-slate-800 p-5 rounded-xl flex justify-between items-start group">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                    {entry.category}
                  </span>
                  <span className="text-xs text-slate-500">{entry.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-1">{entry.title}</h3>
                <p className="text-slate-400 text-sm whitespace-pre-wrap">{entry.content}</p>
              </div>
              
              <button
                onClick={() => handleDelete(entry.id)}
                className="text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-2"
                title="Eliminar nota"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}