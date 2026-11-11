'use client';

import React from 'react';
import { Cpu, BarChart3, Trophy, PlusCircle } from 'lucide-react';
import DataStructuresCheckDialog from './DataStructuresCheckDialog';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function DictionariesExercise() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">

      {/* Encabezado con el botón del modal */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div>
          <h3 className="font-bold text-white text-base">
            # Quiz: Define and Manipulate a Dictionary for Model Accuracies
          </h3>
          <p className="text-xs text-slate-400">
            Track CNN model metrics and configurations in computer vision workflows.
          </p>
        </div>

        {/* Trigger Pop-up Modal */}
        <DataStructuresCheckDialog />
      </div>

      {/* Resumen de Tareas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono">
            <Cpu size={14} />
            <span>Part 1: Define Dictionary</span>
          </div>
          <p className="text-slate-400">
            Map model names (string keys) to accuracies (float values).
          </p>
        </div>

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono">
            <BarChart3 size={14} />
            <span>Part 2: Average Accuracy</span>
          </div>
          <p className="text-slate-400">
            Calculate average accuracy using <code className="text-cyan-300 font-mono">sum()</code> and <code className="text-cyan-300 font-mono">len()</code> over <code className="text-cyan-300 font-mono">.values()</code>.
          </p>
        </div>

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono">
            <Trophy size={14} />
            <span>Part 3: Find Best Model</span>
          </div>
          <p className="text-slate-400">
            Identify the highest performing architecture with <code className="text-purple-300 font-mono">max(dict, key=dict.get)</code>.
          </p>
        </div>

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono">
            <PlusCircle size={14} />
            <span>Part 4: Add New Model</span>
          </div>
          <p className="text-slate-400">
            Dynamically insert lightweight MobileNet (accuracy: 0.89).
          </p>
        </div>
      </div>

      {/* Solución en Python */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-cyan-400">
          Python Solution & Verification
        </h4>
        <RunnablePythonCode
          code={`# Part 1: Define the dictionary with initial model benchmark data
model_accuracies = {
    'ResNet': 0.91,
    'AlexNet': 0.85,
    'VGG': 0.88,
    'Inception': 0.92,
}

# Part 2: Calculate the average accuracy across all architectures
average_accuracy = sum(model_accuracies.values()) / len(model_accuracies)

# Part 3: Find the model with the highest accuracy
best_model = max(model_accuracies, key=model_accuracies.get)

# Part 4: Add MobileNet for edge/mobile deployment scenarios
new_model = 'MobileNet'
new_accuracy = 0.89
model_accuracies[new_model] = new_accuracy

# Validation Output
print(f"Updated Accuracies: {model_accuracies}")
print(f"Average Accuracy: {average_accuracy:.2f}")
print(f"Top Performer: {best_model}")`}
          output={`Updated Accuracies: {'ResNet': 0.91, 'AlexNet': 0.85, 'VGG': 0.88, 'Inception': 0.92, 'MobileNet': 0.89}
Average Accuracy: 0.89
Top Performer: Inception`}
        />
      </div>

      {/* Tabla comparativa de CNNs */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
        <table className="w-full text-left border-collapse text-xs font-mono">
          <thead>
            <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
              <th className="py-2.5 px-3">Architecture</th>
              <th className="py-2.5 px-3">Accuracy</th>
              <th className="py-2.5 px-3">Key Design Feature</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            <tr className="hover:bg-slate-900/30 transition">
              <td className="py-2.5 px-3 text-white font-semibold">Inception</td>
              <td className="py-2.5 px-3 text-cyan-400">0.92 (Best)</td>
              <td className="py-2.5 px-3 text-slate-400">Multi-scale parallel convolutional filters</td>
            </tr>
            <tr className="hover:bg-slate-900/30 transition">
              <td className="py-2.5 px-3 text-white font-semibold">ResNet</td>
              <td className="py-2.5 px-3 text-cyan-400">0.91</td>
              <td className="py-2.5 px-3 text-slate-400">Residual skip connections to avoid vanishing gradients</td>
            </tr>
            <tr className="hover:bg-slate-900/30 transition">
              <td className="py-2.5 px-3 text-white font-semibold">MobileNet</td>
              <td className="py-2.5 px-3 text-cyan-400">0.89</td>
              <td className="py-2.5 px-3 text-slate-400">Depthwise separable convolutions for edge devices</td>
            </tr>
            <tr className="hover:bg-slate-900/30 transition">
              <td className="py-2.5 px-3 text-white font-semibold">VGG</td>
              <td className="py-2.5 px-3 text-cyan-400">0.88</td>
              <td className="py-2.5 px-3 text-slate-400">Uniform stack of small 3x3 convolutions</td>
            </tr>
            <tr className="hover:bg-slate-900/30 transition">
              <td className="py-2.5 px-3 text-white font-semibold">AlexNet</td>
              <td className="py-2.5 px-3 text-cyan-400">0.85</td>
              <td className="py-2.5 px-3 text-slate-400">Pioneered ReLU and dropout in deep CNNs</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}