'use client';

import React from 'react';
import { Calculator, Percent, ShieldAlert, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function CalculatingResults() {

  // Salida calculada simulando la ejecución de calculates_results_stats()
  const calculatingOutput = `--- Calculating Statistics ---
Processed 4 total images.

--- Final Statistics Dictionary ---
n_images              : 4
n_dogs_img            : 3
n_notdogs_img         : 1
n_match               : 3
n_correct_dogs        : 2
n_correct_notdogs     : 1
n_correct_breed       : 2
pct_match             : 75.0%
pct_correct_dogs      : 66.66666666666666%
pct_correct_breed     : 66.66666666666666%
pct_correct_notdogs   : 100.0%`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Calculator className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            #TODO: 5 - Calculating Results (Statistics)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Process the compound data structure to compute final model accuracy statistics, carefully guarding against division-by-zero errors when evaluating percentages.
        </p>
      </div>

      {/* 2. Conceptos Clave de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Lógica de Conteos */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <Percent size={16} />
            <span>Counting Metrics (Iteration)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            By analyzing the Boolean flags at indexes 2, 3, and 4 in <code className="text-slate-300 font-mono">results_dic</code>, we can aggregate sums. For example, if <code className="text-slate-300 font-mono">results_dic[key][3] == 1</code>, it's a real dog image. If index 4 is also 1, the model correctly identified it as a dog.
          </p>
        </div>

        {/* Lógica de Porcentajes y División Segura */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <ShieldAlert size={16} />
            <span>Safe Percentage Calculations</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Before calculating metrics like <code className="text-slate-300 font-mono">pct_correct_notdogs</code>, use a conditional check (<code className="text-slate-300 font-mono">if n_notdogs_img &gt; 0:</code>) to prevent fatal <code className="text-rose-300 font-mono">ZeroDivisionError</code> crashes if your dataset happens to only contain dog images.
          </p>
        </div>

      </div>

      {/* 3. Implementación del Proyecto */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: calculates_results_stats.py</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This function iterates through the results dictionary, computes absolute counts, safely calculates percentages, and stores everything in a new dictionary.
        </p>

        <RunnablePythonCode
          code={`def calculates_results_stats(results_dic):
    """
    Calculates statistics of the results of the program run using classifier's model 
    architecture to classifying pet images. Then puts the results statistics in a 
    dictionary (results_stats_dic).
    """
    results_stats_dic = dict()
    
    # Initialize counters
    results_stats_dic['n_dogs_img'] = 0
    results_stats_dic['n_match'] = 0
    results_stats_dic['n_correct_dogs'] = 0
    results_stats_dic['n_correct_notdogs'] = 0
    results_stats_dic['n_correct_breed'] = 0       
    
    for key in results_dic:
        # Labels Match exactly
        if results_dic[key][2] == 1:
            results_stats_dic['n_match'] += 1
            
        # Pet Image Label is a Dog
        if results_dic[key][3] == 1:
            results_stats_dic['n_dogs_img'] += 1
            
            # Classifier classifies image as Dog (& pet image is a dog)
            if results_dic[key][4] == 1:
                results_stats_dic['n_correct_dogs'] += 1
                
            # Classifier classifies image as exact same breed
            if results_dic[key][2] == 1:
                results_stats_dic['n_correct_breed'] += 1
                
        # Pet Image Label is NOT a Dog
        else:
            # Classifier classifies image as NOT a Dog (& pet image isn't a dog)
            if results_dic[key][4] == 0:
                results_stats_dic['n_correct_notdogs'] += 1

    # Total number of images
    results_stats_dic['n_images'] = len(results_dic)
    
    # Total number of NOT dog images
    results_stats_dic['n_notdogs_img'] = (results_stats_dic['n_images'] - 
                                          results_stats_dic['n_dogs_img']) 

    # --- Percentage Calculations ---
    # % Match
    results_stats_dic['pct_match'] = (results_stats_dic['n_match'] / results_stats_dic['n_images']) * 100.0

    # % Correct Dogs
    if results_stats_dic['n_dogs_img'] > 0:
        results_stats_dic['pct_correct_dogs'] = (results_stats_dic['n_correct_dogs'] / results_stats_dic['n_dogs_img']) * 100.0
    else:
        results_stats_dic['pct_correct_dogs'] = 0.0

    # % Correct Breed
    if results_stats_dic['n_dogs_img'] > 0:
        results_stats_dic['pct_correct_breed'] = (results_stats_dic['n_correct_breed'] / results_stats_dic['n_dogs_img']) * 100.0
    else:
        results_stats_dic['pct_correct_breed'] = 0.0

    # % Correct Not-a-Dog
    if results_stats_dic['n_notdogs_img'] > 0:
        results_stats_dic['pct_correct_notdogs'] = (results_stats_dic['n_correct_notdogs'] / results_stats_dic['n_notdogs_img']) * 100.0
    else:
        results_stats_dic['pct_correct_notdogs'] = 0.0
        
    return results_stats_dic

# --- Execution Simulation ---
# Data from #TODO: 4
results_dic = {
    "Boston_terrier_02259.jpg": ["boston terrier", "boston bull, boston terrier", 1, 1, 1],
    "beagle_0239.jpg": ["beagle", "walker hound, walker foxhound, beagle", 1, 1, 0],
    "fox_squirrel_01.jpg": ["fox squirrel", "fox squirrel, eastern fox squirrel", 1, 0, 0],
    "gecko_80.jpg": ["gecko", "banded gecko", 0, 0, 0]
}

print("--- Calculating Statistics ---")
stats = calculates_results_stats(results_dic)
print(f"Processed {stats['n_images']} total images.\\n")

print("--- Final Statistics Dictionary ---")
for key in stats:
    # Adding a % sign for percentages to format output
    suffix = "%" if "pct" in key else ""
    print(f"{key:21}: {stats[key]}{suffix}")`}
          output={calculatingOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Note: Returning the dictionary is standard practice here since we created a brand new dictionary inside the function rather than modifying an existing one passed as an argument.</span>
        </div>
      </div>

    </div>
  );
}