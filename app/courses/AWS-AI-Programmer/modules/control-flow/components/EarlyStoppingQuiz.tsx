'use client';

import React from 'react';
import { AlertOctagon, TrendingDown, Clock } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';
import EarlyStoppingDialog from './EarlyStoppingDialog';

export default function EarlyStoppingQuiz() {
  
  // Salida calculada para el Método 1: Immediate Stop
  const method1Output = `METHOD 1: Immediate Stop
Epoch 1 - Validation Loss: 0.5
Epoch 2 - Validation Loss: 0.45
Epoch 3 - Validation Loss: 0.47
Stopping early at epoch 3 as validation loss increased.

Total epochs ran: 2`;

  // Salida calculada para el Método 2: Patience
  const method2Output = `METHOD 2: Patience
Epoch 1 - Validation Loss: 0.5
Epoch 2 - Validation Loss: 0.45
Epoch 3 - Validation Loss: 0.47
Epoch 4 - Validation Loss: 0.44
Epoch 5 - Validation Loss: 0.43
Epoch 6 - Validation Loss: 0.42
Epoch 7 - Validation Loss: 0.44
Epoch 8 - Validation Loss: 0.41
Epoch 9 - Validation Loss: 0.42
Epoch 10 - Validation Loss: 0.43
Stopping early at epoch 10 as validation loss did not improve for 2 epochs.

Total epochs ran: 9`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado con el Modal */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div>
          <div className="flex items-center gap-2 text-white">
            <AlertOctagon className="text-rose-400" size={18} />
            <h3 className="font-bold text-base">
              # Quiz: AI, Break, and Continue (Early Stopping Simulation)
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Monitor validation losses over epochs to prevent overfitting using Immediate Stop and Patience thresholds.
          </p>
        </div>

        {/* Modal Trigger */}
        <EarlyStoppingDialog />
      </div>

      {/* 2. Método 1: Immediate Stop */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <TrendingDown className="text-rose-400" size={15} />
          <span>Method 1: Immediate Stop</span>
        </div>
        <p className="text-xs text-slate-400">
          The loop halts via <code className="text-rose-400 font-mono">break</code> on the first occurrence where current validation loss exceeds the best recorded value.
        </p>

        <RunnablePythonCode
          code={`epoch_performances = [
    (1, 0.5), (2, 0.45), (3, 0.47), (4, 0.44), (5, 0.43),
    (6, 0.42), (7, 0.44), (8, 0.41), (9, 0.42), (10, 0.43)
]

print("METHOD 1: Immediate Stop")
best_loss = float('inf')
epochs_ran = 0

for epoch, val_loss in epoch_performances:
    print(f"Epoch {epoch} - Validation Loss: {val_loss}")
    if val_loss < best_loss:
        best_loss = val_loss
        epochs_ran += 1
    else:
        print(f"Stopping early at epoch {epoch} as validation loss increased.")
        break

print(f"\\nTotal epochs ran: {epochs_ran}")`}
          output={method1Output}
        />
      </div>

      {/* 3. Método 2: Patience */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Clock className="text-cyan-400" size={15} />
          <span>Method 2: Patience (Tolerance Counter)</span>
        </div>
        <p className="text-xs text-slate-400">
          Tracks a <code className="text-cyan-300 font-mono">patience_counter</code> that resets when an improvement occurs and only triggers <code className="text-rose-400 font-mono">break</code> once non-improving epochs reach the patience threshold.
        </p>

        <RunnablePythonCode
          code={`epoch_performances = [
    (1, 0.5), (2, 0.45), (3, 0.47), (4, 0.44), (5, 0.43),
    (6, 0.42), (7, 0.44), (8, 0.41), (9, 0.42), (10, 0.43)
]

print("\\nMETHOD 2: Patience")
patience = 2
best_loss = float('inf')
epochs_ran = 0
patience_counter = 0

for epoch, val_loss in epoch_performances:
    print(f"Epoch {epoch} - Validation Loss: {val_loss}")
    if val_loss < best_loss:
        best_loss = val_loss
        patience_counter = 0
    else:
        patience_counter += 1
        if patience_counter >= patience:
            print(f"Stopping early at epoch {epoch} as validation loss did not improve for {patience} epochs.")
            break
    epochs_ran += 1

print(f"\\nTotal epochs ran: {epochs_ran}")`}
          output={method2Output}
        />
      </div>

    </div>
  );
}