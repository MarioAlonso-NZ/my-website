'use client';

import React from 'react';
import { RefreshCw, TrendingDown, Sliders, Activity, Compass, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function WhileLoopsOptimization() {
  
  // Salida calculada para el Ejercicio 1 (Learning Rate Decay con While Loop)
  const ex1Output = `0.1 * 0.9 = 0.09000000000000001
0.09000000000000001 * 0.9 = 0.08100000000000002
0.08100000000000002 * 0.9 = 0.07290000000000002
0.07290000000000002 * 0.9 = 0.06561000000000002
0.06561000000000002 * 0.9 = 0.05904900000000002
2.0816681711721685e-17 < 1e-06 Nice work!`;

  // Salida calculada para el Ejercicio 2 (Gradient Descent Parameter Updates)
  const ex2Output = `Updated parameters: [0.499, 1.502, -0.5005]
Nice work!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <RefreshCw className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Learning Rate Schedule and Parameter Updates
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          In neural network training, controlling the convergence pace and updating weights with gradients dictate training stability and loss minimization.
        </p>
      </div>

      {/* 2. Sección Teórica Exhaustiva: Conceptos Fundamentales de Optimización */}
      <div className="space-y-3">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-purple-400">
          Core AI Optimization Theory
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Learning Rate */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
              <Compass size={15} />
              <span>Learning Rate (α)</span>
            </div>
            <p className="text-xs text-slate-400">
              A key hyperparameter that scales the magnitude of parameter updates with respect to the loss gradient. A rate that is too high causes divergence, while one that is too low leads to slow convergence.
            </p>
          </div>

          {/* Learning Rate Decay */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
              <TrendingDown size={15} />
              <span>Learning Rate Decay</span>
            </div>
            <p className="text-xs text-slate-400">
              A schedule to gradually reduce the step size as training progresses. This prevents oscillations and stops the model from overshooting optimal minima in the loss landscape.
            </p>
          </div>

          {/* Epoch */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
              <RefreshCw size={15} />
              <span>Epoch</span>
            </div>
            <p className="text-xs text-slate-400">
              One complete forward and backward pass of the entire training dataset through the neural network. Schedulers adjust hyperparameters across epochs.
            </p>
          </div>

          {/* Model Parameters */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
              <Sliders size={15} />
              <span>Model Parameters (Weights & Biases)</span>
            </div>
            <p className="text-xs text-slate-400">
              Internal numerical coefficients configured to transform input features into predictions, adjusted iteratively to minimize loss.
            </p>
          </div>

          {/* Gradients */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
              <Activity size={15} />
              <span>Gradients (∂Loss / ∂w)</span>
            </div>
            <p className="text-xs text-slate-400">
              The partial derivatives of the objective loss function evaluated at the current parameters. They point in the direction of steepest loss ascent.
            </p>
          </div>

          {/* Gradient Descent */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
              <CheckCircle2 size={15} />
              <span>Gradient Descent Update Rule</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              w := w - (learning_rate * gradient)
            </p>
            <p className="text-xs text-slate-400">
              Subtracting the scaled gradient steps the parameters in the direction of steepest loss decrease.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Ejercicio 1: Learning Rate Schedule con While Loop */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <TrendingDown className="text-cyan-400" size={15} />
          <span>Exercise 1: Learning Rate Schedule using While Loops</span>
        </div>
        <p className="text-xs text-slate-400">
          Apply a decay factor to the learning rate at each epoch until reaching the target number of epochs using a conditional <code className="text-cyan-300 font-mono">while</code> loop.
        </p>

        <RunnablePythonCode
          code={`# Initial learning rate
initial_lr = 0.1
# Decay factor
decay_factor = 0.9
# Number of epochs
epochs = 5

# Initialize current learning rate and epoch counter
current_lr = initial_lr
current_epoch = 0

# While loop to apply learning rate decay
while current_epoch < epochs:
    print(f"{current_lr} * {decay_factor} = {current_lr * decay_factor}")
    current_lr *= decay_factor
    current_epoch += 1

# Notebook grading check
if abs(current_lr - 0.059049) < 1e-6:
    print(f"{abs(current_lr - 0.059049)} < {1e-6} Nice work!")
else:
    print("Not quite. Check your learning rate calculations.")`}
          output={ex1Output}
        />
      </div>

      {/* 4. Ejercicio 2: Parameter Updates con For Loop */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Sliders className="text-emerald-400" size={15} />
          <span>Exercise 2: Iterating Through Model Parameters using For Loops</span>
        </div>
        <p className="text-xs text-slate-400">
          Iterate through weights and gradients to apply the gradient descent update formula in-place: <code className="text-cyan-300 font-mono">param -= gradient * lr</code>.
        </p>

        <RunnablePythonCode
          code={`# Model parameters
parameters = [0.5, 1.5, -0.5]
# Corresponding gradients
gradients = [0.1, -0.2, 0.05]
# Learning rate
learning_rate = 0.01

# For loop to update each parameter
for i in range(len(parameters)):
    parameters[i] -= gradients[i] * learning_rate

print(f"Updated parameters: {parameters}")

# Notebook grading check
if parameters == [0.499, 1.502, -0.5005]:
    print("Nice work!")
else:
    print("Not quite. Check your parameter updates.")`}
          output={ex2Output}
        />
      </div>

    </div>
  );
}