'use client';

import React from 'react';
import { FileText, FolderSearch, Braces, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function CreatingPetImageLabels() {

  // Salida calculada simulando la ejecución de get_pet_labels
  const petLabelsOutput = `--- Testing get_pet_labels() ---
Filename: Boston_terrier_02259.jpg  | Label: boston terrier
Filename: beagle_0239.jpg           | Label: beagle
Filename: fox_squirrel_01.jpg       | Label: fox squirrel
Filename: gecko_80.jpg              | Label: gecko

Total items in dictionary: 4`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <FileText className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            #TODO: 2 - Creating Pet Image Labels (Data Wrangling)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Parse raw image filenames to extract clean, standardized ground-truth labels by utilizing string manipulation methods and storing them in a fast-access dictionary.
        </p>
      </div>

      {/* 2. Conceptos Clave del Procesamiento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. os.listdir()</span>
          <p className="text-slate-400 font-sans">
            Retrieves all filenames from a specified folder as a list. Essential for iterating through the <code className="text-slate-300 font-mono">pet_images/</code> directory.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. String Methods</span>
          <p className="text-slate-400 font-sans">
            Use <code className="text-slate-300 font-mono">.lower()</code> to normalize text, <code className="text-slate-300 font-mono">.split('_')</code> to separate words, and <code className="text-slate-300 font-mono">.isalpha()</code> to filter out numerical IDs.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">3. Dictionary Mapping</span>
          <p className="text-slate-400 font-sans">
            Store results as <code className="text-slate-300 font-mono">dict[filename] = [label]</code> for O(1) constant time lookups later when verifying accuracy.
          </p>
        </div>
      </div>

      {/* 3. Implementación del Proyecto */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: get_pet_labels.py</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This simulates the exact code you need for <code className="text-cyan-300 font-mono">#TODO: 2</code>, skipping hidden system files (like macOS <code className="text-cyan-300 font-mono">.DS_Store</code>) and structuring the ground-truth dictionary.
        </p>

        <RunnablePythonCode
          code={`import os

def get_pet_labels(image_dir):
    """
    Creates a dictionary of pet labels (results_dic) based upon the filenames 
    of the image files.
    """
    # Simulating os.listdir(image_dir) for the browser environment
    in_files = ["Boston_terrier_02259.jpg", "beagle_0239.jpg", 
                "fox_squirrel_01.jpg", "gecko_80.jpg", ".DS_Store"]
    
    results_dic = dict()
    
    for idx in range(0, len(in_files), 1):
        # Skip hidden system files that start with a dot
        if in_files[idx][0] != ".":
            
            # 1. Format the string
            pet_image = in_files[idx]
            low_pet_image = pet_image.lower()
            word_list_pet_image = low_pet_image.split("_")
            
            pet_name = ""
            # 2. Extract only alphabetical characters
            for word in word_list_pet_image:
                if word.isalpha():
                    pet_name += word + " "
                    
            # 3. Strip trailing whitespace
            pet_name = pet_name.strip()
            
            # 4. Add to dictionary if it doesn't already exist
            if in_files[idx] not in results_dic:
                results_dic[in_files[idx]] = [pet_name]
            else:
                print("** Warning: Duplicate file:", in_files[idx])
                
    return results_dic

# --- Execution ---
print("--- Testing get_pet_labels() ---")
labels = get_pet_labels("pet_images/")

for key in labels:
    print(f"Filename: {key:25} | Label: {labels[key][0]}")

print(f"\\nTotal items in dictionary: {len(labels)}")`}
          output={petLabelsOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Note on Hidden Files: MacOS automatically generates hidden configuration files like <code className="text-emerald-300">.DS_Store</code> inside folders. Adding the <code className="text-emerald-300">if in_files[idx][0] != "."</code> check prevents your program from crashing when it encounters them!</span>
        </div>
      </div>

    </div>
  );
}