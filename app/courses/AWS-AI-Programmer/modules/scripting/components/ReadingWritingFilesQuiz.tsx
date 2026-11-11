'use client';

import React from 'react';
import { Terminal, Users, FileCheck2, AlertCircle, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ReadingWritingFilesQuiz() {

  // Salida calculada para el caso de éxito y el caso de archivo inexistente
  const fileQuizOutput = `--- Processing 'ai_scientists.txt' ---
Extracted AI Scientists:
  1. Alan Turing
  2. Geoffrey Hinton
  3. Yann LeCun
  4. Yoshua Bengio
  5. Fei-Fei Li
  6. Andrew Ng

--- Processing Missing File 'missing_dataset.txt' ---
The file missing_dataset.txt was not found.
Result list: []
Nice work!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Quiz: AI and Reading/Writing Files (Scientist List Extractor)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Parse comma-separated AI pioneer datasets into structured lists, safely handle missing files with try-except, and clean whitespace artifacts using string methods.
        </p>
      </div>

      {/* 2. Pilares de la Solución */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. with open(..., 'r')</span>
          <p className="text-slate-400">Context manager automatically closes the file handle even if parsing fails midway.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. line.split(',')[0].strip()</span>
          <p className="text-slate-400">Extracts the name token before the first comma and strips newline (\n) characters.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">3. FileNotFoundError Guard</span>
          <p className="text-slate-400">Prevents pipeline termination when raw dataset files or paths are missing.</p>
        </div>
      </div>

      {/* 3. Bloque Ejecutable con RunnablePythonCode */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Users className="text-cyan-400" size={15} />
          <span>Python Implementation & Grading Validation</span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          Demonstrates parsing of scientist records alongside exception recovery when handling non-existent paths.
        </p>

        <RunnablePythonCode
          code={`import io

# In-memory virtual filesystem simulator
file_system = {
    "ai_scientists.txt": """Alan Turing, Computing Machinery and Intelligence
Geoffrey Hinton, Deep Learning & Backpropagation
Yann LeCun, Convolutional Neural Networks
Yoshua Bengio, Recurrent Neural Networks & Attention
Fei-Fei Li, ImageNet & Computer Vision
Andrew Ng, Coursera & DeepLearning.AI"""
}

def create_scientist_list(filename):
    """Reads the file and extracts a list of AI scientist names."""
    scientist_list = []
    try:
        # Context manager handles file lifecycle
        if filename not in file_system:
            raise FileNotFoundError(f"No such file or directory: '{filename}'")
            
        stream = io.StringIO(file_system[filename])
        with stream as file:
            for line in file:
                # Split the line by comma to extract the name part
                parts = line.split(',')
                if parts:
                    # Take the first part (name) and strip any leading/trailing whitespace
                    name = parts[0].strip()
                    scientist_list.append(name)
    except FileNotFoundError:
        print(f"The file {filename} was not found.")
    return scientist_list

# Test Case 1: Valid File Parsing
print("--- Processing 'ai_scientists.txt' ---")
scientists = create_scientist_list("ai_scientists.txt")
print("Extracted AI Scientists:")
for idx, name in enumerate(scientists, 1):
    print(f"  {idx}. {name}")

# Test Case 2: Missing File Handling
print("\\n--- Processing Missing File 'missing_dataset.txt' ---")
missing_result = create_scientist_list("missing_dataset.txt")
print(f"Result list: {missing_result}")

# Verification check
if len(scientists) == 6 and scientists[0] == "Alan Turing" and missing_result == []:
    print("Nice work!")`}
          output={fileQuizOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-lg text-emerald-300 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Verified: Clean extraction of 6 AI pioneer names and graceful recovery on missing input file.</span>
        </div>
      </div>

    </div>
  );
}