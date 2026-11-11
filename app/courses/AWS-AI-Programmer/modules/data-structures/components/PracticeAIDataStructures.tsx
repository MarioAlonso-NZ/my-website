'use client';

import React from 'react';
import { Terminal, CheckCircle2, FileText, Cpu, AlertCircle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function PracticeAIDataStructures() {
  
  // Calculated output for Lab 1
  const lab1Output = `Total Words: 53
Unique Words: 36`;

  // Calculated output for Lab 2
  const lab2Output = `Unique Models: 7
Contains 'SqueezeNet': True
First Key Alphabetically: AlexNet
Highest Performing Model: EfficientNet (0.93)`;

  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* Encabezado del Laboratorio Práctico */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Practice: AI and Data Structures (Lab Closing)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Hands-on NLP text processing and dictionary analytics applied to deep learning model architectures (ResNet, MobileNet, VGG, Inception, AlexNet, EfficientNet, and SqueezeNet).
        </p>
      </div>

      {/* Lab 1: Count Unique Words */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <FileText className="text-purple-400" size={16} />
          <span>Lab 1: Count Unique Words in AI Model Descriptions</span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          Tokenize the input text into a list of words, convert it into a set to eliminate duplicate words, and extract the unique word count using <code className="text-cyan-300 font-mono">len()</code>.
        </p>

        <RunnablePythonCode 
          code={`model_descriptions = (
    "ResNet is a convolutional neural network that is 50 layers deep. "
    "MobileNet is a lightweight convolutional neural network designed for mobile and embedded vision applications. "
    "VGG is a convolutional neural network model proposed by Visual Geometry Group of Oxford University. "
    "Inception is a deep convolutional neural network architecture that has achieved state-of-the-art results."
)

# Step 1: Split into list of words (tokenization)
model_list = model_descriptions.split()

# Step 2: Convert list to set to retain only unique words
model_set = set(model_list)

# Step 3: Count total unique words
num_unique = len(model_set)

print(f"Total Words: {len(model_list)}")      # Output: 53
print(f"Unique Words: {num_unique}")          # Output: 36`}
          output={lab1Output}
        />

        <div className="flex items-center gap-2 p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-lg text-emerald-300 text-xs font-mono mt-2">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Verified Output: 36 unique words identified.</span>
        </div>
      </div>

      {/* Lab 2: Model Accuracy Dictionary Analysis */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Cpu className="text-cyan-400" size={16} />
          <span>Lab 2: Model Accuracy Dictionary Operations</span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          Analyze deep learning models using dictionary membership tests, sorting keys alphabetically, and retrieving the top-performing architecture with <code className="text-cyan-300 font-mono">max(..., key=dict.get)</code>.
        </p>

        <RunnablePythonCode 
          code={`model_accuracy_dict = {
    'ResNet': 0.91,
    'MobileNet': 0.89,
    'VGG': 0.88,
    'Inception': 0.92,
    'AlexNet': 0.85,
    'EfficientNet': 0.93,
    'SqueezeNet': 0.87
}

# 1. Total unique models
num_models = len(model_accuracy_dict)  # 7

# 2. Check key existence using membership operator
contains_squeezenet = 'SqueezeNet' in model_accuracy_dict  # True

# 3. Create and sort a list of dictionary keys
# Note: Use sorted(model_accuracy_dict.keys()) or sorted(model_accuracy_dict)
sorted_keys = sorted(model_accuracy_dict.keys())
first_key = sorted_keys[0]  # 'AlexNet'

# 4. Model with the highest accuracy
highest_accuracy_model = max(model_accuracy_dict, key=model_accuracy_dict.get)  # 'EfficientNet'

print(f"Unique Models: {num_models}")
print(f"Contains 'SqueezeNet': {contains_squeezenet}")
print(f"First Key Alphabetically: {first_key}")
print(f"Highest Performing Model: {highest_accuracy_model} ({model_accuracy_dict[highest_accuracy_model]})")`}
          output={lab2Output}
        />

        {/* Tip / Nota de Debugging */}
        <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-lg text-amber-200 text-xs flex items-start gap-2 mt-4">
          <AlertCircle size={16} className="shrink-0 text-amber-400 mt-0.5" />
          <div>
            <strong className="text-white block font-mono">Python Gotcha / Common Bug:</strong>
            Be sure to pass <code className="text-cyan-300 font-mono">sorted(model_accuracy_dict.keys())</code> or <code className="text-cyan-300 font-mono">sorted(model_accuracy_dict)</code>. Passing <code className="text-rose-400 font-mono">sorted(model_accuracy_dict.get)</code> without parentheses throws a <code className="text-rose-400 font-mono">TypeError: 'builtin_function_or_method' object is not iterable</code>.
          </div>
        </div>
      </div>

    </div>
  );
}