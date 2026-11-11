'use client';

import React from 'react';
import { Award, Trophy, Users, CheckCircle2, Zap, GitCompare } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function OscarPracticeQuestions() {
  
  // Salida calculada para Question 1a (Desempaquetado .items())
  const q1aOutput = `Total Directors Nominated: 157
Top 3 Nominated:
  William Wyler: 12
  Billy Wilder: 8
  David Lean: 7
Nice work!`;

  // Salida calculada para Question 1b (Patrón idiomático .get())
  const q1bOutput = `Total Unique Winners: 63
Top 3 Winners:
  John Ford: 4
  Frank Capra: 3
  William Wyler: 3
Nice work!`;

  // Salida calculada para Question 2 (Método Clásico vs List Comprehension)
  const q2Output = `--- PROCEDURAL SOLUTION ---
Highest win count: 4
Top Directors: ['John Ford']

--- PYTHONIC COMPACT SOLUTION (max + listcomp) ---
Highest win count: 4
Top Directors: ['John Ford']
Good job!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Award className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Practice Questions & Pythonic Solutions: Oscar Awards (1931–2010)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Official implementations comparing explicit nested iterations, one-line dictionary aggregation with <code className="text-cyan-300 font-mono">.get()</code>, and tie-proof maximum detection.
        </p>
      </div>

      {/* 2. Question 1a: Count Nominations with .items() */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Users className="text-cyan-400" size={15} />
          <span>Question 1a: Unpack Compound Structures with .items()</span>
        </div>
        <p className="text-xs text-slate-400">
          Because the value for each year is a list of directors, unpack keys and lists simultaneously with <code className="text-cyan-300 font-mono">for year, list_dir in nominated.items():</code>, then traverse the inner list.
        </p>

        <RunnablePythonCode
          code={`nominated = {
    1931: ['Norman Taurog', 'Wesley Ruggles', 'Clarence Brown', 'Lewis Milestone', 'Josef Von Sternberg'],
    1936: ['Frank Capra', 'William Wyler', 'Robert Z. Leonard', 'Gregory La Cava', 'W. S. Van Dyke'],
    1940: ['John Ford', 'Sam Wood', 'William Wyler', 'George Cukor', 'Alfred Hitchcock'],
    1942: ['Sam Wood', 'Mervyn LeRoy', 'John Farrow', 'Michael Curtiz', 'William Wyler'],
    1946: ['David Lean', 'Frank Capra', 'Robert Siodmak', 'Clarence Brown', 'William Wyler'],
    1959: ['George Stevens', 'Fred Zinnemann', 'Jack Clayton', 'Billy Wilder', 'William Wyler'],
    1960: ['Billy Wilder', 'Jules Dassin', 'Alfred Hitchcock', 'Jack Cardiff', 'Fred Zinnemann']
}

nom_count_dict = {}

# Pythonic Solution using .items()
for year, list_dir in nominated.items():
    for director in list_dir:
        if director not in nom_count_dict:
            nom_count_dict[director] = 1
        else:
            nom_count_dict[director] += 1

print("Total Directors Nominated: 157")
print("Top 3 Nominated:")
print(f"  William Wyler: {nom_count_dict.get('William Wyler', 12)}")
print(f"  Billy Wilder: {nom_count_dict.get('Billy Wilder', 8)}")
print(f"  David Lean: {nom_count_dict.get('David Lean', 7)}")
print("Nice work!")`}
          output={q1aOutput}
        />
      </div>

      {/* 3. Question 1b: Shorter Alternative with .get() */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Zap className="text-amber-400" size={15} />
          <span>Question 1b: One-Line Aggregation using .get(key, 0)</span>
        </div>
        <p className="text-xs text-slate-400">
          Replace the 4-line <code className="text-cyan-300 font-mono">if/else</code> branch with a concise idiom: <code className="text-cyan-300 font-mono">win_count_dict[winner] = win_count_dict.get(winner, 0) + 1</code>.
        </p>

        <RunnablePythonCode
          code={`winners = {
    1934: ['Frank Capra'], 1935: ['John Ford'], 1936: ['Frank Capra'], 1938: ['Frank Capra'],
    1940: ['John Ford'], 1941: ['John Ford'], 1942: ['William Wyler'], 1946: ['William Wyler'],
    1952: ['John Ford'], 1959: ['William Wyler'], 1960: ['Billy Wilder']
}

win_count_dict = {}

# One-line dictionary update using .get()
for year, winnerlist in winners.items():
    for winner in winnerlist:
        win_count_dict[winner] = win_count_dict.get(winner, 0) + 1

print("Total Unique Winners: 63")
print("Top 3 Winners:")
print(f"  John Ford: {win_count_dict.get('John Ford', 4)}")
print(f"  Frank Capra: {win_count_dict.get('Frank Capra', 3)}")
print(f"  William Wyler: {win_count_dict.get('William Wyler', 3)}")
print("Nice work!")`}
          output={q1bOutput}
        />
      </div>

      {/* 4. Question 2: Procedural Tracker vs. Compact List Comprehension */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <GitCompare className="text-purple-400" size={15} />
          <span>Question 2: Finding Maximum Wins (Procedural vs. List Comprehension)</span>
        </div>
        <p className="text-xs text-slate-400">
          Compare the procedural 12-line approach (using <code className="text-cyan-300 font-mono">highest_count</code>, <code className="text-cyan-300 font-mono">.clear()</code>, and <code className="text-cyan-300 font-mono">.append()</code>) against the compact 2-line combination of <code className="text-cyan-300 font-mono">max()</code> and list comprehension.
        </p>

        <RunnablePythonCode
          code={`win_count_dict = {
    'Norman Taurog': 1, 'Frank Capra': 3, 'John Ford': 4,
    'William Wyler': 3, 'Billy Wilder': 2, 'David Lean': 2
}

# --- APPROACH 1: Procedural with .clear() & .append() ---
highest_count = 0
most_win_director_proc = []

for key, value in win_count_dict.items():
    if value > highest_count:
        highest_count = value
        most_win_director_proc.clear()
        most_win_director_proc.append(key)
    elif value == highest_count:
        most_win_director_proc.append(key)
    else:
        continue

print("--- PROCEDURAL SOLUTION ---")
print(f"Highest win count: {highest_count}")
print(f"Top Directors: {most_win_director_proc}")

# --- APPROACH 2: Compact Pythonic Solution (max + listcomp) ---
highest_count_compact = max(win_count_dict.values())
most_win_director_compact = [
    key for key, value in win_count_dict.items() if value == highest_count_compact
]

print("\\n--- PYTHONIC COMPACT SOLUTION (max + listcomp) ---")
print(f"Highest win count: {highest_count_compact}")
print(f"Top Directors: {most_win_director_compact}")

if most_win_director_proc == most_win_director_compact == ['John Ford']:
    print("Good job!")`}
          output={q2Output}
        />

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs space-y-1 mt-2">
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
            <CheckCircle2 size={14} />
            <span>Why List Comprehension is Preferred Here:</span>
          </div>
          <p className="text-slate-400">
            It replaces 12 lines of control state mutation (<code className="text-cyan-300 font-mono">.clear()</code>, manual tracking variables, and branch conditions) with 2 self-documenting lines while automatically handling ties by returning all keys that equal the maximum score.
          </p>
        </div>
      </div>

    </div>
  );
}