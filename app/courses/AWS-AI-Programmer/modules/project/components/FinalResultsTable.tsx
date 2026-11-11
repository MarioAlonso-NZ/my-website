'use client';

import React from 'react';
import { Trophy, Target, LayoutList, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function FinalResultsTable() {

  // Salida calculada simulando la tabla final de resultados
  const finalTableOutput = `--- Dataset Overview ---
Total Images: 40
# Dog Images: 30
# Not-a-Dog Images: 10

--- Final Model Evaluation Table ---
---------------------------------------------------------------------------------
| CNN Model Architecture | % Not-a-Dog | % Dogs Correct | % Breeds | % Match    |
---------------------------------------------------------------------------------
| ResNet                 |       90.0% |         100.0% |    90.0% |      82.5% |
| AlexNet                |      100.0% |         100.0% |    80.0% |      75.0% |
| VGG                    |      100.0% |         100.0% |    93.3% |      87.5% |
---------------------------------------------------------------------------------

--- Analytical Conclusion ---
Objective 1 (Dog vs Not-Dog): VGG and AlexNet perfectly isolated dogs from non-dogs (100% accuracy). ResNet struggled slightly with non-dogs (90.0%).
Objective 2 (Breed Classification): VGG vastly outperformed the others, accurately identifying the specific dog breed 93.3% of the time.

WINNER: VGG is the "best" model for this specific application.`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Trophy className="text-amber-400" size={18} />
          <h3 className="font-bold text-base">
            Final Results & Architecture Comparison
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Compare the performance of ResNet, AlexNet, and VGG across the primary dataset to determine which pre-trained CNN model is the most effective for identifying dog breeds.
        </p>
      </div>

      {/* 2. Objetivos del Proyecto y Evaluación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Objective 1 */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <Target size={16} />
            <span>Objective 1: Dog or Not-a-Dog?</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            The program must correctly distinguish between images of dogs and images of other animals/objects. <strong>VGG</strong> and <strong>AlexNet</strong> both achieved a flawless <strong>100%</strong> accuracy on this metric, while ResNet dropped to 90% for non-dogs.
          </p>
        </div>

        {/* Objective 2 */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <LayoutList size={16} />
            <span>Objective 2: Breed Classification</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            For the images that are actually dogs, the model must guess the exact breed. <strong>VGG</strong> secured the victory here, classifying the correct breed <strong>93.3%</strong> of the time, heavily outperforming AlexNet (80.0%).
          </p>
        </div>

      </div>

      {/* 3. Simulación de la Tabla de Resultados */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Execution Simulation: Presenting the Final Data</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This simulates a Python script that ingests the outputs from <code className="text-cyan-300 font-mono">print_results.py</code> across all three models and formats them into a clean, comparative Markdown-style table.
        </p>

        <RunnablePythonCode
          code={`# Simulating final results tabulation
def generate_final_report():
    print("--- Dataset Overview ---")
    print("Total Images: 40\\n# Dog Images: 30\\n# Not-a-Dog Images: 10\\n")
    
    print("--- Final Model Evaluation Table ---")
    print("-" * 81)
    print(f"| {'CNN Model Architecture':<22} | {'% Not-a-Dog':<11} | {'% Dogs Correct':<14} | {'% Breeds':<8} | {'% Match':<10} |")
    print("-" * 81)
    
    # Mock data from project results
    models = [
        {"name": "ResNet",  "not_dog": 90.0,  "dogs": 100.0, "breeds": 90.0, "match": 82.5},
        {"name": "AlexNet", "not_dog": 100.0, "dogs": 100.0, "breeds": 80.0, "match": 75.0},
        {"name": "VGG",     "not_dog": 100.0, "dogs": 100.0, "breeds": 93.3, "match": 87.5}
    ]
    
    for m in models:
        print(f"| {m['name']:<22} | {m['not_dog']:>10.1f}% | {m['dogs']:>13.1f}% | {m['breeds']:>7.1f}% | {m['match']:>9.1f}% |")
    print("-" * 81)
    
    print("\\n--- Analytical Conclusion ---")
    print("Objective 1 (Dog vs Not-Dog): VGG and AlexNet perfectly isolated dogs from non-dogs (100% accuracy). ResNet struggled slightly with non-dogs (90.0%).")
    print("Objective 2 (Breed Classification): VGG vastly outperformed the others, accurately identifying the specific dog breed 93.3% of the time.\\n")
    print("WINNER: VGG is the \\"best\\" model for this specific application.")

generate_final_report()`}
          output={finalTableOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Project Concluded: You have successfully built an object-oriented AI pipeline, parsed command-line arguments, manipulated data structures, evaluated model performance, and drawn actionable data-science conclusions.</span>
        </div>
      </div>

    </div>
  );
}