'use client';

import React from 'react';
import { Box, Layers, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ClassAndObjectBasics() {

  // Salida calculada para la simulación de la clase Shirt y Modelo de Clasificación
  const oopSimulationOutput = `--- Shirt Instance Demo ---
Shirt 1 initial price: $25
Shirt 1 updated price: $30
Shirt 2 color: blue | style: short-sleeve | price: $40

--- AI Classifier Encapsulation Demo (like scikit-learn) ---
Model: ResNetClassifier
Input dimension: 2048 -> Classes: 10
Running fit() on batch of 32 images...
Status: Weights trained and loss minimized (Loss: 0.142)
Running predict() on test vector:
Class predicted: Class 4 with confidence 0.94`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Box className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Class, Object, Method, and Attribute
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          The structural pillars of Object-Oriented Programming (OOP) and encapsulation used across machine learning frameworks.
        </p>
      </div>

      {/* 2. Vocabulario Fundamental de OOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. Class</span>
          <p className="text-slate-400 font-sans">
            A blueprint or blueprint template consisting of attributes and methods.
          </p>
        </div>

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. Object (Instance)</span>
          <p className="text-slate-400 font-sans">
            A concrete realization of a class in memory (e.g., a specific yellow pencil, dog, or model pipeline).
          </p>
        </div>

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">3. Attribute</span>
          <p className="text-slate-400 font-sans">
            A descriptor or state trait (color, dimension, learning rate, weights) holding a specific value.
          </p>
        </div>

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-amber-400 font-bold block">4. Method</span>
          <p className="text-slate-400 font-sans">
            An action or callable routine that the class or object executes (e.g., <code className="text-amber-300 font-mono">change_price()</code>, <code className="text-cyan-300 font-mono">fit()</code>).
          </p>
        </div>
      </div>

      {/* 3. Encapsulamiento en AI */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
        <div className="flex items-center gap-1.5 text-cyan-400 font-mono font-bold text-xs uppercase tracking-wider">
          <ShieldCheck size={16} />
          <span>Encapsulation in Machine Learning</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed font-sans">
          Encapsulation bundles data (attributes like layer weights or hyperparameter settings) together with methods (<code className="text-cyan-300 font-mono">fit()</code>, <code className="text-cyan-300 font-mono">predict()</code>) into a single entity. It allows frameworks like <strong>scikit-learn</strong> and <strong>PyTorch</strong> to expose clean external APIs while hiding complex low-level mathematical implementations.
        </p>
      </div>

      {/* 4. Bloque Ejecutable con RunnablePythonCode */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Cpu className="text-cyan-400" size={15} />
          <span>Python Implementation: Blueprint, Instantiation, and Calling</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          Demonstrates the canonical Udacity Shirt class alongside an encapsulated AI Classifier model blueprint.
        </p>

        <RunnablePythonCode
          code={`# 1. Blueprint (Class)
class Shirt:
    def __init__(self, color, size, style, price):
        self.color = color
        self.size = size
        self.style = style
        self.price = price

    def change_price(self, new_price):
        self.price = new_price

# Concrete Objects (Instances)
shirt_one = Shirt('red', 'S', 'long-sleeve', 25)
shirt_two = Shirt('blue', 'M', 'short-sleeve', 40)

print("--- Shirt Instance Demo ---")
print(f"Shirt 1 initial price: \${shirt_one.price}")
shirt_one.change_price(30)
print(f"Shirt 1 updated price: \${shirt_one.price}")
print(f"Shirt 2 color: {shirt_two.color} | style: {shirt_two.style} | price: \${shirt_two.price}")

# 2. Encapsulated AI Model Blueprint (similar to scikit-learn)
class ResNetClassifier:
    def __init__(self, num_features=2048, num_classes=10):
        self.num_features = num_features
        self.num_classes = num_classes
        self.is_trained = False

    def fit(self, batch_size):
        # Encapsulates internal gradient descent logic
        self.is_trained = True
        return f"Status: Weights trained and loss minimized (Loss: 0.142)"

    def predict(self, input_vector):
        if not self.is_trained:
            raise ValueError("Model must be fitted before running predictions.")
        return "Class predicted: Class 4 with confidence 0.94"

print("\\n--- AI Classifier Encapsulation Demo (like scikit-learn) ---")
clf = ResNetClassifier(num_features=2048, num_classes=10)
print(f"Model: {type(clf).__name__}")
print(f"Input dimension: {clf.num_features} -> Classes: {clf.num_classes}")
print("Running fit() on batch of 32 images...")
print(clf.fit(32))
print("Running predict() on test vector:")
print(clf.predict([0.15, -0.42, 0.88]))`}
          output={oopSimulationOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-cyan-400" />
          <span>Core Takeaway: Classes provide reusable templates; instances store separate state variables while sharing method implementations.</span>
        </div>
      </div>

    </div>
  );
}