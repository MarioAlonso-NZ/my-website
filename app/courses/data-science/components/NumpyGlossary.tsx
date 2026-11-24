'use client';

import React, { useState } from 'react';
import { Book, Search, Code2 } from 'lucide-react';

export default function NumpyGlossary() {
  const [searchTerm, setSearchTerm] = useState('');

  // Datos extraídos directamente del Glosario del curso
  const glossaryData = [
    // General Purpose
    { term: 'numpy.ndarray.dtype', desc: 'Return the data-type of the elements of the array. Remember, arrays are homogeneous.', category: 'General Purpose' },
    { term: 'numpy.ndarray.ndim', desc: 'Return the number of array-dimensions (rank), e.g., it will return 2 for a 4x3 array.', category: 'General Purpose' },
    { term: 'numpy.ndarray.shape', desc: 'Return a tuple representing the array dimensions (rows,columns).', category: 'General Purpose' },
    { term: 'numpy.ndarray.size', desc: 'Return the number of elements present in the array.', category: 'General Purpose' },
    { term: 'numpy.save / numpy.load', desc: 'Save/Load an array to/from .npy (numpy) format.', category: 'General Purpose' },
    { term: 'numpy.random.random', desc: 'Return random floats values from the interval [0.0, 1.0).', category: 'General Purpose' },
    { term: 'numpy.random.randint', desc: 'Return random integers from the half-open interval [a, b).', category: 'General Purpose' },
    { term: 'numpy.random.normal', desc: 'Return random samples from a Gaussian (normal) distribution.', category: 'General Purpose' },
    { term: 'numpy.reshape', desc: 'Returns an array containing the same elements with a new shape.', category: 'General Purpose' },
    
    // Array Creation
    { term: 'numpy.ones / numpy.zeros', desc: 'Return a new array of given shape and type, filled with 1s or 0s.', category: 'Array Creation' },
    { term: 'numpy.full', desc: 'Return a new array of given shape and type, filled with a specific value.', category: 'Array Creation' },
    { term: 'numpy.eye', desc: 'Return a 2-D array with 1s on the diagonal and 0s elsewhere.', category: 'Array Creation' },
    { term: 'numpy.diag', desc: 'Extract the diagonal elements.', category: 'Array Creation' },
    { term: 'numpy.unique', desc: 'Return the sorted unique elements of an array.', category: 'Array Creation' },
    { term: 'numpy.arange', desc: 'Return evenly spaced values within a given half-open interval [a, b).', category: 'Array Creation' },
    { term: 'numpy.linspace', desc: 'Return evenly spaced numbers over a specified interval [a,b].', category: 'Array Creation' },
    
    // Elements and Indices
    { term: 'numpy.insert', desc: 'Insert values along the given axis before the specified indices.', category: 'Operating with Elements' },
    { term: 'numpy.delete', desc: 'Return a new array, after deleting sub-arrays along a specified axis.', category: 'Operating with Elements' },
    { term: 'numpy.append', desc: 'Append values at the end of the specified array.', category: 'Operating with Elements' },
    { term: 'numpy.hstack / vstack', desc: 'Return a stacked array horizontally (column-wise) or vertically (row-wise).', category: 'Operating with Elements' },
    { term: 'numpy.sort', desc: 'Return a sorted copy of an array (or sort in-place with .sort).', category: 'Operating with Elements' },
    
    // Set Operations
    { term: 'numpy.intersect1d', desc: 'Find the intersection of two arrays.', category: 'Set Operations' },
    { term: 'numpy.setdiff1d', desc: 'Find the set difference of two arrays.', category: 'Set Operations' },
    { term: 'numpy.union1d', desc: 'Return the unique, sorted array of values that are in either array.', category: 'Set Operations' },
    
    // Arithmetic
    { term: 'numpy.add / subtract', desc: 'Element-wise addition or subtraction of given arrays.', category: 'Arithmetic & Stats' },
    { term: 'numpy.multiply / divide', desc: 'Element-wise multiplication or true division of the inputs.', category: 'Arithmetic & Stats' },
    { term: 'numpy.exp / power / sqrt', desc: 'Calculate exponential, powers, or non-negative square-root element-wise.', category: 'Arithmetic & Stats' },
    { term: 'numpy.mean / median', desc: 'Compute the arithmetic mean or median along the specified axis.', category: 'Arithmetic & Stats' },
    { term: 'numpy.min / max', desc: 'Return the minimum or maximum along the specified axis.', category: 'Arithmetic & Stats' }
  ];

  // Filtrado de la búsqueda
  const filteredData = glossaryData.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado y Buscador */}
      <div className="space-y-4 pb-2 border-b border-slate-800/60">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-white">
            <Book className="text-emerald-400" size={18} />
            <h3 className="font-bold text-base">
              NumPy Functions Glossary
            </h3>
          </div>
          
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={14} className="text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search functions or concepts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
        <p className="text-xs text-slate-400">
          A quick reference guide for all the NumPy methods and functions covered in this module. Type a keyword like "sort", "matrix", or "random" to filter the list.
        </p>
      </div>

      {/* 2. Resultados Filtrados */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner max-h-[500px] overflow-y-auto">
        {filteredData.length > 0 ? (
          <div className="divide-y divide-slate-800/60">
            {filteredData.map((item, idx) => (
              <div key={idx} className="p-4 hover:bg-slate-900/50 transition-colors flex flex-col md:flex-row gap-2 md:gap-6">
                <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-cyan-500" />
                    <code className="text-cyan-300 font-mono text-xs font-semibold">{item.term}</code>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                    {item.category}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 text-xs">
            No functions found matching "{searchTerm}".
          </div>
        )}
      </div>

    </div>
  );
}