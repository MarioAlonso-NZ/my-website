'use client';

import React from 'react';
import { Terminal, Layers, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function OOPSyntaxPart1() {

  // Salida calculada para el laboratorio completo de Part 1
  const labOutput = `--- Task 1: Instantiation & Verification ---
shirt_one: color=red, size=S, style=long-sleeve, price=$25
shirt_two: color=orange, size=L, style=short-sleeve, price=$10

--- Task 2: Method Calls (change_price & discount) ---
Updated shirt_two price: $12
shirt_one price with 12% discount: $22.0

--- Task 3 & 4: Collection Storage & Iteration ---
Total shirts in collection: 3
Collection items:
  1. orange | size=M | price=$25
  2. red | size=S | price=$15
  3. purple | size=XL | price=$10

Unit tests passed: All 4 exercises correctly implemented!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Exercise: OOP Syntax and AI - Part 1 (Jupyter Lab Exercises)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Hands-on implementation of the Shirt class blueprint, instantiation of distinct objects, method invocations, and collection iterations.
        </p>
      </div>

      {/* 2. Resumen de Tareas del Notebook */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. Instantiate</span>
          <p className="text-slate-400 font-sans">Initialize <code className="text-slate-300 font-mono">shirt_one</code> and <code className="text-slate-300 font-mono">shirt_two</code> with specific attributes.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. Mutate Price</span>
          <p className="text-slate-400 font-sans">Use <code className="text-slate-300 font-mono">shirt_two.change_price(12)</code> to update in-memory instance state.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">3. Calculate Discount</span>
          <p className="text-slate-400 font-sans">Call <code className="text-slate-300 font-mono">shirt_one.discount(0.12)</code> without permanently altering price.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-amber-400 font-bold block">4. Iterate Collection</span>
          <p className="text-slate-400 font-sans">Traverse a list of objects and access attribute fields using dot syntax.</p>
        </div>
      </div>

      {/* 3. Bloque Ejecutable Interactivo */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <ShoppingBag className="text-cyan-400" size={15} />
          <span>Python Implementation & Unit Verification</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          Complete notebook execution containing the Shirt class definition and all 4 grading check blocks.
        </p>

        <RunnablePythonCode
          code={`class Shirt:
    def __init__(self, shirt_color, shirt_size, shirt_style, shirt_price):
        self.color = shirt_color
        self.size = shirt_size
        self.style = shirt_style
        self.price = shirt_price
        
    def change_price(self, new_price):
        self.price = new_price
        
    def discount(self, discount):
        return self.price * (1 - discount)

# Task 1: Instantiate two shirts
shirt_one = Shirt('red', 'S', 'long-sleeve', 25)
shirt_two = Shirt('orange', 'L', 'short-sleeve', 10)

print("--- Task 1: Instantiation & Verification ---")
print(f"shirt_one: color={shirt_one.color}, size={shirt_one.size}, style={shirt_one.style}, price=\${shirt_one.price}")
print(f"shirt_two: color={shirt_two.color}, size={shirt_two.size}, style={shirt_two.style}, price=\${shirt_two.price}")

# Task 2: Method Calls
shirt_two.change_price(12)
discounted_price_one = shirt_one.discount(0.12)

print("\\n--- Task 2: Method Calls (change_price & discount) ---")
print(f"Updated shirt_two price: \${shirt_two.price}")
print(f"shirt_one price with 12% discount: \${discounted_price_one}")

# Task 3: Store instances in a collection list
tshirt_collection = []
tshirt_collection.append(Shirt('orange', 'M', 'short-sleeve', 25))
tshirt_collection.append(Shirt('red', 'S', 'short-sleeve', 15))
tshirt_collection.append(Shirt('purple', 'XL', 'short-sleeve', 10))

print("\\n--- Task 3 & 4: Collection Storage & Iteration ---")
print(f"Total shirts in collection: {len(tshirt_collection)}")
print("Collection items:")
for idx, shirt in enumerate(tshirt_collection, 1):
    print(f"  {idx}. {shirt.color} | size={shirt.size} | price=\${shirt.price}")

# Grading assertions check
assert shirt_one.color == 'red' and shirt_one.price == 25
assert shirt_two.price == 12
assert round(discounted_price_one, 1) == 22.0
assert len(tshirt_collection) == 3
print("\\nUnit tests passed: All 4 exercises correctly implemented!")`}
          output={labOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-lg text-emerald-300 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Verification Complete: All instance state transitions, price updates, and collections pass Udacity's unit testing rubric.</span>
        </div>
      </div>

    </div>
  );
}