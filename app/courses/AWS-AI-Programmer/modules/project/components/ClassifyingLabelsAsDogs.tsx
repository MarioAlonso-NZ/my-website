'use client';

import React from 'react';
import { BookOpen, FileDigit, ListPlus, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ClassifyingLabelsAsDogs() {

  // Salida calculada simulando la ejecución de adjust_results4_isadog()
  const isADogOutput = `--- Reading dognames.txt ---
Loaded 5 valid dog names into dictionary.

--- Updated results_dic (Format: [truth, classifier, match, is_dog_truth, is_dog_classifier]) ---
File: Boston_terrier_02259.jpg  | [boston terrier, boston bull, boston terrier, 1, 1, 1]
File: beagle_0239.jpg           | [beagle, walker hound, walker foxhound, beagle, 1, 1, 0]
File: fox_squirrel_01.jpg       | [fox squirrel, fox squirrel, eastern fox squirrel, 1, 0, 0]
File: gecko_80.jpg              | [gecko, banded gecko, 0, 0, 0]`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <FileDigit className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            #TODO: 4 - Classifying Labels as Dogs (adjust_results4_isadog)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Determine if the labels generated in previous steps actually represent dogs by cross-referencing them against a comprehensive dictionary of 223 valid dog breeds.
        </p>
      </div>

      {/* 2. Conceptos Clave de Clasificación */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. File I/O & rstrip()</span>
          <p className="text-slate-400 font-sans">
            Read from <code className="text-slate-300 font-mono">dognames.txt</code> and use <code className="text-slate-300 font-mono">line.rstrip()</code> to remove hidden newline characters (<code className="text-slate-300 font-mono">\n</code>) that would otherwise break string matching.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. O(1) Dictionary Lookup</span>
          <p className="text-slate-400 font-sans">
            Storing valid breeds as dictionary keys (with a dummy value of 1) allows Python to instantly check <code className="text-slate-300 font-mono">if label in dognames_dic</code> without scanning a list.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">3. list.extend()</span>
          <p className="text-slate-400 font-sans">
            Appends both index 3 (truth is dog) and index 4 (classifier is dog) simultaneously: <code className="text-slate-300 font-mono">results_dic[key].extend((1, 1))</code>.
          </p>
        </div>
      </div>

      {/* 3. Implementación del Proyecto */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: adjust_results4_isadog.py</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This simulation reads a mock list of dog names and appends the final 1/0 flags to our compound dictionary without needing to return it, since dictionaries are mutable in memory.
        </p>

        <RunnablePythonCode
          code={`def adjust_results4_isadog(results_dic, dogfile_mock_data):
    """
    Adjusts the results dictionary to determine if classifier correctly 
    classified images 'as a dog' or 'not a dog'.
    """
    dognames_dic = dict()

    # 1. Read in dog names and populate the dictionary
    for line in dogfile_mock_data:
        # Strip newline characters
        line = line.rstrip()
        
        # Add to dict if it doesn't exist to avoid duplicates
        if line not in dognames_dic:
            dognames_dic[line] = 1
        else:
            print("** Warning: Duplicate dognames in file:", line)
            
    print(f"Loaded {len(dognames_dic)} valid dog names into dictionary.\\n")

    # 2. Iterate through results_dic to check if labels are dogs
    for key in results_dic:
        
        # Check if Pet Image Label (index 0) is a dog
        if results_dic[key][0] in dognames_dic:
            
            # Check if Classifier Label (index 1) is a dog
            if results_dic[key][1] in dognames_dic:
                results_dic[key].extend((1, 1))
            else:
                results_dic[key].extend((1, 0))
                
        # Pet Image Label IS NOT a dog
        else:
            if results_dic[key][1] in dognames_dic:
                results_dic[key].extend((0, 1))
            else:
                results_dic[key].extend((0, 0))

# --- Execution Simulation ---
# Setup initial dictionary from TODO 3
results_dic = {
    "Boston_terrier_02259.jpg": ["boston terrier", "boston bull, boston terrier", 1],
    "beagle_0239.jpg": ["beagle", "walker hound, walker foxhound, beagle", 1],
    "fox_squirrel_01.jpg": ["fox squirrel", "fox squirrel, eastern fox squirrel", 1],
    "gecko_80.jpg": ["gecko", "banded gecko", 0]
}

# Simulating file reading line-by-line
mock_dognames_file = [
    "beagle\\n", 
    "boston terrier\\n", 
    "boston bull, boston terrier\\n", 
    "golden retriever\\n", 
    "chihuahua\\n"
]

print("--- Reading dognames.txt ---")
adjust_results4_isadog(results_dic, mock_dognames_file)

print("--- Updated results_dic (Format: [truth, classifier, match, is_dog_truth, is_dog_classifier]) ---")
for key in results_dic:
    # Print the full list for each key
    print(f"File: {key:25} | [{', '.join(str(v) for v in results_dic[key])}]")`}
          output={isADogOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Final Dictionary Structure: Each value in <code>results_dic</code> is now a list of exactly 5 items. With this data structure fully populated, we can now calculate the final statistics and percentages for our model!</span>
        </div>
      </div>

    </div>
  );
}