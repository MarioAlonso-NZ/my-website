'use client';

import React from 'react';
import { Box, Layers, ArrowUpCircle, Save, Code2, AlertTriangle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function CreatingSavingNdarrays() {
  
  // Salida simulada del código de creación y upcasting
  const ndarrayOutput = `--- 1. Creating a 1D Array ---
x = [1 2 3 4 5]
Shape: (5,) | Dimensions (Rank): 1 | Size: 5
Data Type: int64

--- 2. Upcasting (Ints + Floats) ---
y = [1.  2.5 4. ]
Data Type: float64 (Integers were upcasted to floats)

--- 3. Creating a 2D Array ---
Y = 
 [[ 1  2  3]
  [ 4  5  6]
  [ 7  8  9]
  [10 11 12]]
Shape: (4, 3) | Dimensions (Rank): 2 | Size: 12`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Box className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Creating and Saving ndarrays
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          At the core of NumPy is the <strong>ndarray</strong> (n-dimensional array). It is a grid that holds elements of the exact same type. We always import the library using the convention <code className="text-emerald-300">import numpy as np</code>.
        </p>
      </div>

      {/* 2. Core Attributes Grid */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2">
          Inspecting Arrays (Core Attributes)
        </span>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
            <span className="text-emerald-400 font-mono text-xs font-bold">.ndim</span>
            <p className="text-xs text-slate-400 font-sans">Returns the rank (number of dimensions). E.g., 1 for a list, 2 for a matrix.</p>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
            <span className="text-cyan-400 font-mono text-xs font-bold">.shape</span>
            <p className="text-xs text-slate-400 font-sans">Returns a tuple with the size of each dimension (rows, columns).</p>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
            <span className="text-purple-400 font-mono text-xs font-bold">.size</span>
            <p className="text-xs text-slate-400 font-sans">Returns the total number of elements inside the entire array.</p>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
            <span className="text-amber-400 font-mono text-xs font-bold">.dtype</span>
            <p className="text-xs text-slate-400 font-sans">Returns the data type of the elements (e.g., int64, float64, U5).</p>
          </div>
        </div>
      </div>

      {/* 3. Upcasting & Homogeneity */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-xs">
            <AlertTriangle size={16} />
            <span>Homogeneity Constraint</span>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Unlike standard Python lists, <strong>all elements in an ndarray must be of the same type</strong>. If you try to mix strings and integers (e.g., <code className="text-slate-300">[1, 2, 'World']</code>), NumPy will convert everything into strings to maintain homogeneity.
          </p>
        </div>
        
        <div className="flex-1 p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <ArrowUpCircle size={16} />
            <span>Upcasting to Prevent Data Loss</span>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            If you mix integers and floats (e.g., <code className="text-slate-300">[1, 2.5, 4]</code>), NumPy performs <strong>upcasting</strong>. It automatically converts the integers into floats (float64) so that numerical precision is not lost during mathematical operations.
          </p>
        </div>
      </div>

      {/* 4. Demostración de Código */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-emerald-400" size={15} />
          <span>Interactive Example: Array Creation</span>
        </div>
        
        <RunnablePythonCode
          code={`import numpy as np

print("--- 1. Creating a 1D Array ---")
x = np.array([1, 2, 3, 4, 5])
print("x =", x)
print(f"Shape: {x.shape} | Dimensions (Rank): {x.ndim} | Size: {x.size}")
print(f"Data Type: {x.dtype}\\n")

print("--- 2. Upcasting (Ints + Floats) ---")
# Mixing ints and floats
y = np.array([1, 2.5, 4])
print("y =", y)
print(f"Data Type: {y.dtype} (Integers were upcasted to floats)\\n")

print("--- 3. Creating a 2D Array ---")
# Creating a Rank 2 array using nested lists
Y = np.array([[1,2,3], [4,5,6], [7,8,9], [10,11,12]])
print("Y = \\n", Y)
print(f"Shape: {Y.shape} | Dimensions (Rank): {Y.ndim} | Size: {Y.size}")`}
          output={ndarrayOutput}
        />
      </div>

      {/* 5. Guardar y Cargar */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3 mt-4">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
          <Save size={16} />
          <span>Saving Arrays to Disk</span>
        </div>
        <p className="text-xs text-slate-400 font-sans mb-2">
          You can save large arrays to a file to avoid recomputing them later. NumPy uses the <code className="text-emerald-300">.npy</code> extension.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-1">
            <span className="text-xs font-mono text-slate-500 block">Saving:</span>
            <code className="block bg-slate-900 px-3 py-2 rounded text-emerald-300 font-mono text-xs">np.save('my_array', x)</code>
          </div>
          <div className="flex-1 space-y-1">
            <span className="text-xs font-mono text-slate-500 block">Loading:</span>
            <code className="block bg-slate-900 px-3 py-2 rounded text-cyan-300 font-mono text-xs">y = np.load('my_array.npy')</code>
          </div>
        </div>
      </div>

    </div>
  );
}