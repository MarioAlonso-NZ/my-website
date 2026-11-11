'use client';

import React from 'react';
import RunnablePythonCode from './RunnablePythonCode';
import MLConceptsDialog from './MLConceptsDialog';

export default function VariablesAndAssignmentExercise() {
  
  // We pre-calculate the outputs exactly as Python would print them
  const output1 = `learning_rate: 0.009
training_loss: 0.8200000000000001`;

  const output2 = `training_loss: 0.798`;

  const output3 = `Updated learning rate: 0.0009
Updated training loss: 0.7500`;

  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* Introducción al Ejercicio */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="space-y-2">
          <h3 className="font-bold text-white text-base">Quiz: Adjusting AI Model Parameters</h3>
          <p className="text-slate-400 text-xs">
            Scenario: You are working with an AI model and need to adjust various parameters and metrics during the training process. Use assignment operators to modify these values.
          </p>
        </div>
        {/* Place the dialog here */}
        <MLConceptsDialog />
      </div>

      {/* Bloque de Código 1 */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-cyan-400">1. Adjusting Learning Rate & Noise</h4>
        <RunnablePythonCode 
          code={`# The initial learning rate and training loss for the model
learning_rate = 0.01
training_loss = 0.8

# Decrease the learning_rate variable by 10% for stability
learning_rate *= 0.9

# Add a small value (0.02) to training_loss due to noisy data
training_loss += 0.02

print(f"learning_rate: {learning_rate}")
print(f"training_loss: {training_loss}")`}
          output={output1}
        />
      </div>

      {/* Bloque de Código 2 */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-cyan-400">2. Overfitting & Regularization Penalties</h4>
        <RunnablePythonCode 
          code={`# Starting with the original training loss
training_loss = 0.8

# Increase training_loss by 5% to account for overfitting
training_loss *= 1.05

# Decrease training_loss by 5% to account for regularization
training_loss *= 0.95

print(f"training_loss: {training_loss}")`}
          output={output2}
        />
      </div>

      {/* Bloque de Código 3 */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-cyan-400">3. Generalization & Scientific Notation</h4>
        <RunnablePythonCode 
          code={`training_loss = 0.8

# Subtract a small value (0.05) to account for improved generalization
training_loss -= 0.05

# Initial learning rate using scientific notation
learning_rate = 1e-3  # Equivalent to 0.001
learning_rate *= 0.9

print(f"Updated learning rate: {learning_rate}")
print(f"Updated training loss: {training_loss:.4f}")`}
          output={output3}
        />
      </div>

    </div>
  );
}