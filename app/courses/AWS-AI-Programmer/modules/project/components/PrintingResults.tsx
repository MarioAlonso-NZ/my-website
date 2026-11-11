'use client';

import React from 'react';
import { Printer, Settings2, Bug, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function PrintingResults() {

  // Salida calculada simulando la ejecución de print_results()
  const printingOutput = `*** Results Summary for CNN Model Architecture VGG ***
N Images: 4
N Dog Images: 3
N Not-Dog Images: 1

pct_match: 75.0
pct_correct_dogs: 66.66666666666666
pct_correct_breed: 66.66666666666666
pct_correct_notdogs: 100.0

INCORRECT Dog/NOT Dog Assignments:
Real:                     gecko   Classifier:                   banded gecko

INCORRECT Dog Breed Assignment:
Real:                    beagle   Classifier: walker hound, walker foxhound, beagle`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Printer className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            #TODO: 6 - Printing Results & Misclassifications
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Format and display the final performance metrics of the image classifier, and implement optional debugging features to print exact files where the model misclassified a dog or its breed.
        </p>
      </div>

      {/* 2. Conceptos Clave de Impresión */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. Summary Stats</span>
          <p className="text-slate-400 font-sans">
            Iterate over <code className="text-slate-300 font-mono">results_stats_dic</code>. Since all percentages start with <code className="text-slate-300 font-mono">pct_</code>, you can easily group them using <code className="text-slate-300 font-mono">if key.startswith('p'):</code>.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. Default Arguments</span>
          <p className="text-slate-400 font-sans">
            Adding <code className="text-slate-300 font-mono">print_incorrect_dogs=False</code> to the function signature means the function won't print bugs unless explicitly asked.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-rose-400 font-bold block">3. Misclassifications</span>
          <p className="text-slate-400 font-sans">
            A dog is misclassified if the sum of indexes 3 and 4 equals 1. A breed is misclassified if the sum is 2 but index 2 (exact match) is 0.
          </p>
        </div>
      </div>

      {/* 3. Implementación del Proyecto */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: print_results.py</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This function takes the raw dictionary, the stats dictionary, the model name, and two boolean flags to generate a comprehensive CLI report.
        </p>

        <RunnablePythonCode
          code={`def print_results(results_dic, results_stats_dic, model, 
                  print_incorrect_dogs=False, print_incorrect_breed=False):
    """
    Prints summary results on the classification and then prints incorrectly 
    classified dogs and incorrectly classified dog breeds if user indicates 
    they want those printouts (use non-default values)
    """
    # 1. Print General Summary
    print(f"*** Results Summary for CNN Model Architecture {model.upper()} ***")
    print(f"N Images: {results_stats_dic['n_images']}")
    print(f"N Dog Images: {results_stats_dic['n_dogs_img']}")
    print(f"N Not-Dog Images: {results_stats_dic['n_notdogs_img']}\\n")

    # Print percentages
    for key in results_stats_dic:
        if key.startswith('p'):
            print(f"{key}: {results_stats_dic[key]}")

    # 2. Print incorrectly classified dogs
    if (print_incorrect_dogs and 
        ((results_stats_dic['n_correct_dogs'] + results_stats_dic['n_correct_notdogs']) 
          != results_stats_dic['n_images'])):
        print("\\nINCORRECT Dog/NOT Dog Assignments:")
        for key in results_dic:
            # sum of index 3 and 4 == 1 means one said dog, the other said not dog
            if sum(results_dic[key][3:]) == 1:
                print(f"Real: {results_dic[key][0]:>25}   Classifier: {results_dic[key][1]:>30}")

    # 3. Print incorrectly classified breeds
    if (print_incorrect_breed and 
        (results_stats_dic['n_correct_dogs'] != results_stats_dic['n_correct_breed'])):
        print("\\nINCORRECT Dog Breed Assignment:")
        for key in results_dic:
            # sum == 2 means both said dog, but index 2 == 0 means breed didn't match
            if sum(results_dic[key][3:]) == 2 and results_dic[key][2] == 0:
                print(f"Real: {results_dic[key][0]:>25}   Classifier: {results_dic[key][1]:>30}")

# --- Execution Simulation ---
# Data from previous steps
results_dic = {
    "Boston_terrier_02259.jpg": ["boston terrier", "boston bull, boston terrier", 1, 1, 1],
    "beagle_0239.jpg": ["beagle", "walker hound, walker foxhound, beagle", 0, 1, 1], # Breed mismatch
    "fox_squirrel_01.jpg": ["fox squirrel", "fox squirrel, eastern fox squirrel", 1, 0, 0],
    "gecko_80.jpg": ["gecko", "banded gecko", 0, 0, 1] # Dog mismatch
}

results_stats_dic = {
    'n_images': 4, 'n_dogs_img': 3, 'n_notdogs_img': 1,
    'n_match': 2, 'n_correct_dogs': 2, 'n_correct_notdogs': 1, 'n_correct_breed': 2,
    'pct_match': 75.0, 'pct_correct_dogs': 66.66666666666666, 
    'pct_correct_breed': 66.66666666666666, 'pct_correct_notdogs': 100.0
}

# Run function requesting both optional debug prints
print_results(results_dic, results_stats_dic, "vgg", 
              print_incorrect_dogs=True, print_incorrect_breed=True)`}
          output={printingOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <Bug size={16} className="shrink-0 text-rose-400" />
          <span>Debugging Power: By toggling the default arguments to True, we can immediately see that the VGG model incorrectly classified a Gecko as a dog (Banded Gecko), and failed to match the exact Beagle breed string.</span>
        </div>
      </div>

    </div>
  );
}